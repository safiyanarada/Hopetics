import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CheckCircle2, Sparkles, Shield, Truck } from "lucide-react";
import { ShopifyProduct, directCheckout } from "@/lib/shopify";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ScrollSectionProps {
  product: ShopifyProduct | null;
}

const Section = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
      <section
      ref={ref}
      className={`min-h-screen flex items-center justify-end px-6 md:px-12 lg:px-24 py-20 md:pr-[30vw] ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const ScrollSections = ({ product }: ScrollSectionProps) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

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

  return (
    <>
      {/* Section Hero */}
      <Section className="justify-center md:pr-0">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold"
          >
            {product?.node.title || "Nom du Produit"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            {product?.node.description || "Description placeholder du produit qui met en avant ses qualités et bénéfices principaux."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              onClick={handleDirectCheckout}
              disabled={isCheckingOut || !product}
              size="lg"
              className="text-lg px-8 py-6"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Redirection...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Acheter maintenant
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Section 1 - Avantages */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pourquoi choisir ce produit ?
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: Sparkles,
                title: "Qualité Premium",
                description: "Fabriqué avec les meilleurs matériaux pour une durabilité exceptionnelle et une finition irréprochable."
              },
              {
                icon: Shield,
                title: "Garantie 2 ans",
                description: "Notre engagement envers la qualité se traduit par une garantie complète de 2 ans sur tous nos produits."
              },
              {
                icon: Truck,
                title: "Livraison offerte",
                description: "Bénéficiez de la livraison gratuite sur toutes vos commandes, sans minimum d'achat requis."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-6"
          >
            <Button
              onClick={handleDirectCheckout}
              disabled={isCheckingOut || !product}
              size="lg"
              className="w-full md:w-auto"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Redirection...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Commander maintenant
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Section 2 - Caractéristiques */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Caractéristiques techniques
          </h2>
          <div className="space-y-4">
            {[
              "Matériau premium de haute qualité",
              "Design ergonomique et moderne",
              "Facile à utiliser et à entretenir",
              "Compatible avec tous les standards",
              "Certifié et testé en laboratoire"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-6"
          >
            <Button
              onClick={handleDirectCheckout}
              disabled={isCheckingOut || !product}
              size="lg"
              variant="outline"
              className="w-full md:w-auto"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Redirection...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Obtenir le produit
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Section 3 - Témoignages / Final CTA */}
      <Section>
        <div className="space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Rejoignez nos clients satisfaits
          </h2>
          <div className="space-y-4 max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 bg-muted/50 rounded-lg"
            >
              <p className="text-lg italic mb-4">
                "Un produit exceptionnel qui a dépassé toutes mes attentes. Je le recommande vivement !"
              </p>
              <p className="text-sm text-muted-foreground">— Client satisfait</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-6 bg-muted/50 rounded-lg"
            >
              <p className="text-lg italic mb-4">
                "Qualité irréprochable et service client au top. Un achat que je ne regrette absolument pas."
              </p>
              <p className="text-sm text-muted-foreground">— Client satisfait</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-8"
          >
            <Button
              onClick={handleDirectCheckout}
              disabled={isCheckingOut || !product}
              size="lg"
              className="text-lg px-12 py-6"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Redirection...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Acheter maintenant
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

