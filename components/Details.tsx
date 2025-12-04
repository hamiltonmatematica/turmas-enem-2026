import React from 'react';
import { SCHEDULE_ITEMS } from '../constants';
import { Check, CalendarDays, Clock } from 'lucide-react';

const Details: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Schedules */}
          <div className="lg:w-1/2">
            <h2 className="font-title text-4xl text-aurea-dark mb-8">DETALHES DAS TURMAS</h2>
            
            <div className="space-y-6">
              <div className="bg-aurea-gray p-6 rounded-xl border-l-4 border-aurea-blue">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Clock className="text-aurea-blue" size={20}/> Matutino
                </h3>
                <p className="text-gray-600 ml-7">08h às 11h (segunda à sexta)</p>
              </div>

              <div className="bg-aurea-gray p-6 rounded-xl border-l-4 border-aurea-orange">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Clock className="text-aurea-orange" size={20}/> Vespertino
                </h3>
                <p className="text-gray-600 ml-7">14h às 17h (segunda à sexta)</p>
              </div>

              <div className="bg-aurea-gray p-6 rounded-xl border-l-4 border-aurea-dark">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Laptop className="text-aurea-dark" size={20}/> Online ao vivo
                </h3>
                <p className="text-gray-600 ml-7">Opção Matutino ou Vespertino</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <CalendarDays className="text-aurea-blue shrink-0" />
                <div>
                  <span className="block font-bold text-aurea-dark">Diagnóstico Áurea</span>
                  <span className="text-gray-600 text-sm">26 a 30 de janeiro</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <CalendarDays className="text-aurea-orange shrink-0" />
                <div>
                  <span className="block font-bold text-aurea-dark">Início das aulas</span>
                  <span className="text-gray-600 text-sm">2 de fevereiro</span>
                </div>
              </div>
            </div>
            
             <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-800 font-medium text-sm">
                  <span className="font-bold">Revisa ENEM:</span> Gratuito nas duas semanas que antecedem a prova do Enem.
                </p>
              </div>
          </div>

          {/* Benefits List */}
          <div className="lg:w-1/2">
            <h3 className="font-title text-3xl text-aurea-dark mb-8">O QUE ESTÁ INCLUSO</h3>
            <ul className="space-y-4">
              {SCHEDULE_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-aurea-blue/10 flex items-center justify-center group-hover:bg-aurea-blue transition-colors">
                    <Check size={14} className="text-aurea-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple Laptop icon component for this file
const Laptop = ({ className, size }: { className?: string, size?: number }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
);

export default Details;