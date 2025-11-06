import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const ProductDisplay = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(1);
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Ajouté au panier", {
      description: product.node.title,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Aucun produit trouvé</p>
        </div>
      </div>
    );
  }

  const product = products[0];
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            {image ? (
              <img
                src={image.url}
                alt={image.altText || product.node.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Image placeholder
              </div>
            )}
          </div>

          {/* Détails produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {product.node.title}
              </h1>
              <p className="text-3xl font-semibold">
                {variant?.price.currencyCode} {parseFloat(variant?.price.amount || '0').toFixed(2)}
              </p>
            </div>

            {product.node.description && (
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg">
                  {product.node.description}
                </p>
              </div>
            )}

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto min-w-[250px]"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ajouter au panier
              </Button>
            </div>

            {/* Infos supplémentaires */}
            <div className="pt-6 border-t space-y-2 text-sm text-muted-foreground">
              <p>• Livraison offerte</p>
              <p>• Retours gratuits sous 30 jours</p>
              <p>• Garantie 2 ans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
