import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-muted-foreground">
              Les présentes conditions générales d'utilisation ont pour objet de définir les modalités et conditions d'utilisation du site [nom du site].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Accès au site</h2>
            <p className="text-muted-foreground">
              L'accès au site est gratuit. Les coûts d'accès et d'utilisation du réseau de télécommunication sont à la charge de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Inscription</h2>
            <p className="text-muted-foreground">
              L'utilisation de certains services du site peut nécessiter une inscription. L'utilisateur s'engage à fournir des informations exactes et à les maintenir à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Responsabilité</h2>
            <p className="text-muted-foreground">
              L'éditeur du site ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              Tous les éléments du site sont et restent la propriété intellectuelle et exclusive de l'éditeur. Toute reproduction est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Liens hypertextes</h2>
            <p className="text-muted-foreground">
              Le site peut contenir des liens vers d'autres sites. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGU;
