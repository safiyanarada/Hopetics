import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-muted-foreground">
              Les présentes conditions générales de vente régissent les ventes de produits effectuées sur le site [nom du site].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Prix</h2>
            <p className="text-muted-foreground">
              Les prix sont indiqués en euros toutes taxes comprises. Nous nous réservons le droit de modifier nos prix à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Commande</h2>
            <p className="text-muted-foreground">
              Toute commande implique l'acceptation sans réserve des présentes conditions générales de vente. Le client reconnaît avoir pris connaissance de l'ensemble des présentes conditions générales de vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Livraison</h2>
            <p className="text-muted-foreground">
              Les délais de livraison sont donnés à titre indicatif. En cas de retard de livraison, une pénalité de retard pourra être appliquée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Droit de rétractation</h2>
            <p className="text-muted-foreground">
              Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Garanties</h2>
            <p className="text-muted-foreground">
              Tous nos produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
