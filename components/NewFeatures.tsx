import React from 'react';
import { Smartphone, Brain, MessageCircle, PenTool } from 'lucide-react';

const NewFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-aurea-blue text-white overflow-hidden relative">
       {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-20 -mb-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="font-title text-4xl md:text-6xl mb-4 leading-none">
              NOVIDADE <br/> 2026
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90">
              PACOTE INTELIGÊNCIA ÁUREA
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureItem icon={Smartphone} title="Plataforma Áurea Prime" />
            <FeatureItem icon={Brain} title="Sistema de Ensino Geekie One" />
            <FeatureItem icon={MessageCircle} title="WhatsApp Iara para assistência" />
            <FeatureItem icon={PenTool} title="Fala, Áurea (Redação e Atualidades)" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ icon: React.ElementType, title: string }> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
    <div className="p-2 bg-white text-aurea-blue rounded-lg">
      <Icon size={24} />
    </div>
    <span className="font-semibold">{title}</span>
  </div>
);

export default NewFeatures;