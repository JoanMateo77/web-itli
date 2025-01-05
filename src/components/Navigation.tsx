import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/f815e504-8122-4618-b5fd-de922f17dcef.png"
              alt="ITLI Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl tracking-wider font-['Orbitron']" translate="no">ITLI</span>
          </a>

          {isMobile ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          ) : (
            <div className="flex space-x-8 text-lg tracking-wide">
              <a href="#inicio" className="text-white hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-white hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#marketing" className="text-white hover:text-primary transition-colors">
                Planes
              </a>
              <a href="#contacto" className="text-white hover:text-primary transition-colors">
                Contacto
              </a>
            </div>
          )}
        </div>

        {isMobile && isOpen && (
          <div className="bg-black/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 py-4">
              <a
                href="#inicio"
                className="text-white hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-white hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#marketing"
                className="text-white hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Planes
              </a>
              <a
                href="#contacto"
                className="text-white hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};