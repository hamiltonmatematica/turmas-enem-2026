import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

const WelcomeModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (!isOpen) return;

        const duration = 15000; // 15 seconds
        const interval = 50; // Update every 50ms
        const decrement = (100 / duration) * interval;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    setIsOpen(false);
                    return 0;
                }
                return prev - decrement;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative bg-gradient-to-br from-aurea-dark via-gray-900 to-aurea-dark rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl border border-aurea-blue/30 animate-scaleIn">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-aurea-blue opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurea-orange opacity-20 rounded-full blur-3xl"></div>

                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                    aria-label="Fechar"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-aurea-orange/20 p-3 rounded-full">
                            <Sparkles size={32} className="text-aurea-orange" />
                        </div>
                    </div>

                    <h2 className="font-title text-3xl md:text-4xl text-white mb-4 leading-tight">
                        Seletiva por<br />
                        Desempenho das<br />
                        <span className="text-aurea-orange">Notas Enem</span>
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        A sua nota no Enem pode te ajudar a garantir uma bolsa de até <span className="text-aurea-blue font-bold">80%</span> nas nossas turmas do Áurea em 2026!
                    </p>

                    <a
                        href="https://delicategiantpanda-n8n.cloudfy.live/form/3d4c98de-ad6c-49ec-ac52-1a984cd83bfe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-aurea-blue to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-600 hover:to-aurea-blue transition-all duration-300 shadow-lg hover:shadow-aurea-blue/30 hover:scale-105 transform"
                    >
                        FAÇA JÁ SUA SIMULAÇÃO
                        <ArrowRight size={20} />
                    </a>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-3xl overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-aurea-orange to-aurea-blue transition-all duration-50"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default WelcomeModal;
