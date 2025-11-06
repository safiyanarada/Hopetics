import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDisplay } from "@/components/ProductDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <ProductDisplay />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
