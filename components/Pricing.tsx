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
                  QUERO À VISTA
                </a>
                <a
                  href={card.paymentLinkInstallment || LINKS.RESERVATION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 rounded-xl text-center font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  QUERO PARCELADO
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Negociações Especiais */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5538999573075?text=Ol%C3%A1!%20Eu%20estava%20na%20p%C3%A1gina%20do%20%C3%81urea%20e%20gostaria%20de%20fazer%20uma%20negocia%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105 transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            NEGOCIAÇÕES ESPECIAIS CLIQUE AQUI
          </a>
        </div>

        {/* Reservation CTA Block */}
        <div className="mt-20 bg-aurea-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aurea-blue opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10">
            <h3 className="font-title text-3xl md:text-4xl text-white mb-4">
              Garanta sua vaga nas Turmas ENEM 2026
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Reserve sua vaga e garanta condições especiais para 2026.
            </p>
            <a
              href={LINKS.RESERVATION}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-aurea-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Reservar agora
              <ArrowRight size={20} className="text-aurea-orange" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;