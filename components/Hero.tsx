import React from 'react';
import { LINKS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-aurea-dark text-white flex items-center justify-center overflow-hidden">
      {/* Abstract Background Shapes mimicking the Golden Ratio circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-aurea-blue rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-aurea-orange rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-aurea-orange/20 text-aurea-orange font-semibold text-sm tracking-wide uppercase border border-aurea-orange/30">
          Matrículas Abertas 2026
        </span>
        
        <h1 className="font-title text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          TURMAS ENEM <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            2026 ÁUREA
          </span>
        </h1>
        
        <h2 className="text-xl md:text-3xl font-light text-gray-300 mb-8 max-w-3xl">
          A preparação que une o melhor dos dois mundos.
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-12">
          Turmas presenciais, online ao vivo e com aulas gravadas, todas com planejamento inteligente, 
          materiais completos e tecnologia a serviço da sua aprovação.
        </p>
        
        <a 
          href={LINKS.RESERVATION} 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-aurea-orange text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,91,5,0.4)]"
        >
          Reservar minha vaga com o desconto especial
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;