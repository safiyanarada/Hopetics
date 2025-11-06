import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/mentions-legales" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
            <Link 
              to="/cgv" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CGV
            </Link>
            <Link 
              to="/cgu" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CGU
            </Link>
            <Link 
              to="/politique-confidentialite" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
