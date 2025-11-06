import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "h-16 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo central */}
          <div className="flex-1" />
          
          <a
            href="/"
            className={`transition-all duration-400 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-400 ${
                isScrolled ? "h-10 w-10" : "h-14 w-14"
              }`}
            />
          </a>

          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Cart - always visible when scrolled */}
            <div className={`transition-all duration-400 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}>
              <CartDrawer />
            </div>
            
            {/* Hamburger menu button (visible on scroll) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-all duration-400 ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-400 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            {/* Placeholder menu items - ready for content */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
