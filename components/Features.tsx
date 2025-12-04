import React from 'react';
import { DIFFERENTIALS, BENEFITS } from '../constants';
import { Check } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <>
      {/* SECTION 2: WHY AUREA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl text-aurea-dark mb-4">
              POR QUE O ÁUREA 2026 É DIFERENTE?
            </h2>
            <div className="w-24 h-1 bg-aurea-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DIFFERENTIALS.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-aurea-blue/10 rounded-full flex items-center justify-center mb-6 text-aurea-blue">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-aurea-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS */}
      <section className="py-20 bg-aurea-gray">
        <div className="container mx-auto px-6">
          <h2 className="font-title text-4xl md:text-5xl text-aurea-dark mb-12 text-center">
            BENEFÍCIOS PARA TODOS OS MATRICULADOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 text-aurea-orange">
                  <benefit.icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-aurea-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;