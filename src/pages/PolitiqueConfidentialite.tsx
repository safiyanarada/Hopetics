import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
            <p className="text-muted-foreground">
              Nous collectons des informations lorsque vous vous inscrivez sur notre site, passez une commande ou remplissez un formulaire. Les informations recueillies incluent votre nom, votre adresse e-mail et/ou numéro de téléphone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
            <p className="text-muted-foreground">
              Les informations que nous collectons peuvent être utilisées pour :<br />
              - Personnaliser votre expérience<br />
              - Améliorer notre site web<br />
              - Améliorer le service client<br />
              - Traiter vos transactions<br />
              - Envoyer des e-mails périodiques
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Protection des informations</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Vos données sont protégées conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p className="text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
            <p className="text-muted-foreground">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à [email de contact].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Modifications de la politique</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
