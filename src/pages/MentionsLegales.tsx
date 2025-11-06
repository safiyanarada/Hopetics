import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p className="text-muted-foreground">
              [Nom de l'entreprise]<br />
              [Forme juridique]<br />
              [Adresse complète]<br />
              [Numéro de téléphone]<br />
              [Adresse e-mail]<br />
              Capital social : [montant]<br />
              RCS : [ville] [numéro]<br />
              SIRET : [numéro]<br />
              TVA intracommunautaire : [numéro]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Directeur de la publication</h2>
            <p className="text-muted-foreground">
              [Nom et prénom du directeur de publication]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p className="text-muted-foreground">
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              [Téléphone de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
