import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ITLI</h3>
          <p className="text-gray-400">
            Internet Technologies & Leading Integrations
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: contacto@itli.com</li>
            <li>Tel: +57 300 000 0000</li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contacto@itli.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ITLI. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};