import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aurea-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="font-logo text-4xl font-bold mb-2 tracking-tight">
              áurea
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              O primeiro passo pra sua aprovação.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-aurea-blue transition-colors text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-aurea-blue transition-colors text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-aurea-blue transition-colors text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Áurea Pré Vestibular. Todos os direitos reservados.</p>
          <p className="font-title text-white text-lg tracking-wide">
            ÁUREA 2026 • O MELHOR DOS DOIS MUNDOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;