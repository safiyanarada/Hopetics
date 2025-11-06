import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ShopifyProduct, directCheckout } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface ProductStickyProps {
  product: ShopifyProduct | null;
  loading?: boolean;
}

export const ProductSticky = ({ product, loading }: ProductStickyProps) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Animation du produit : centre → gauche
  // Le produit commence au centre et se déplace vers la gauche
  // Position initiale: 50vw - 10vw (pour centrer un produit de 20vw) = 40vw
  // Position finale: 5vw
  const xPosition = useTransform(scrollYProgress, [0, 0.3], [40, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);
  
  // Convertir en vw
  const xPositionVw = useTransform(xPosition, (value) => `${value}vw`);

  const handleDirectCheckout = async () => {
    if (!product) return;
    
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("Variante non disponible");
      return;
    }

    setIsCheckingOut(true);
    try {
      const checkoutUrl = await directCheckout(variant.id, 1);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Checkout failed:', error);
      toast.error("Erreur lors du checkout", {
        description: "Veuillez réessayer",
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (loading) {
    return (
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 w-[20vw] min-w-[200px] max-w-[300px] aspect-square z-20"
        style={{ x: xPositionVw, scale, opacity, left: 0 }}
      >
        <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
        </div>
      </motion.div>
    );
  }

  if (!product) {
    return null;
  }

  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = variant?.price || product.node.priceRange.minVariantPrice;

  return (
    <motion.div
      className="fixed top-1/2 -translate-y-1/2 w-[20vw] min-w-[150px] max-w-[300px] aspect-square z-20 pointer-events-none hidden md:block"
      style={{ 
        x: xPositionVw, 
        scale, 
        opacity,
        left: 0,
      }}
    >
      <div className="w-full h-full bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
        {/* Image produit */}
        <div className="w-full h-[70%] bg-muted overflow-hidden">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || product.node.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Image placeholder
            </div>
          )}
        </div>
        
        {/* Infos produit */}
        <div className="p-4 h-[30%] flex flex-col justify-between bg-background">
          <div>
            <h3 className="font-semibold text-sm line-clamp-1 mb-1">
              {product.node.title}
            </h3>
            <p className="text-lg font-bold">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </p>
          </div>
          
          {/* CTA - avec pointer-events pour permettre le clic */}
          <div className="pointer-events-auto">
            <Button
              onClick={handleDirectCheckout}
              disabled={isCheckingOut || !variant?.availableForSale}
              className="w-full text-xs h-8"
              size="sm"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                  Redirection...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3 h-3 mr-1" />
                  Acheter maintenant
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

