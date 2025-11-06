import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSticky } from "@/components/ProductSticky";
import { ScrollSections } from "@/components/ScrollSections";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";

const Index = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProducts(1);
        if (data?.data?.products?.edges && data.data.products.edges.length > 0) {
          setProduct(data.data.products.edges[0]);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      
      {/* Produit sticky qui se déplace avec le scroll */}
      <ProductSticky product={product} loading={loading} />
      
      {/* Sections scrollables */}
      <main className="relative z-0 pt-20">
        <ScrollSections product={product} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
