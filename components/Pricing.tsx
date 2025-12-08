import React from 'react';
import { PRICING_CARDS, LINKS } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl text-aurea-dark mb-4">TABELA DE INVESTIMENTOS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Investimento transparente e flexível para o seu futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {PRICING_CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col h-full ${card.recommended
                  ? 'border-2 border-aurea-blue shadow-xl scale-100 xl:scale-105 z-10'
                  : 'border border-gray-100 shadow-lg hover:shadow-xl'
                }`}
            >
              {card.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aurea-blue text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-aurea-dark mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">
                  {card.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-aurea-dark mb-1">{card.priceCash}</div>
                <div className="text-sm font-medium text-gray-400">À vista</div>
                <div className="mt-3 text-lg font-semibold text-aurea-blue">{card.priceInstallment}</div>
                <div className="text-xs text-gray-400">Parcelado</div>
              </div>

              {/* Features List */}
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="mt-0.5 min-w-[16px]">
                        <Check size={16} className="text-aurea-orange" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mt-auto">
                <a
                  href={card.paymentLinkCash || LINKS.RESERVATION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-xl text-center font-bold transition-colors ${card.recommended
                      ? 'bg-aurea-blue text-white hover:bg-blue-700'
                      : 'bg-aurea-dark text-white hover:bg-gray-800'
                    }`}
                >
                  Quero à vista
                </a>
                <a
                  href={card.paymentLinkInstallment || LINKS.RESERVATION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 rounded-xl text-center font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Quero parcelar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation CTA Block */}
        <div className="mt-20 bg-aurea-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aurea-blue opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <h3 className="font-title text-3xl md:text-4xl text-white mb-4">
              Garanta sua vaga nas Turmas ENEM 2026
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Reserve sua vaga até 31 de dezembro e garanta descontos especiais para 2026.
            </p>
            <ul className="text-gray-300 text-xl mb-10 space-y-1">
              <li>30% de desconto até 31/12 para alunos novos</li>
            </ul>
            <a
              href={LINKS.RESERVATION}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-aurea-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Reservar agora com desconto
              <ArrowRight size={20} className="text-aurea-orange" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;