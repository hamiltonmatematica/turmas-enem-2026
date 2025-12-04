import React from 'react';
import { CONTACTS } from '../constants';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-title text-4xl text-aurea-dark mb-4">FALE CONOSCO</h2>
          <p className="text-gray-600">Nossa equipe está pronta para tirar suas dúvidas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACTS.map((contact, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-aurea-dark mb-4">
                  {contact.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg text-aurea-dark leading-tight mb-1">{contact.name}</h3>
                <span className="inline-block px-2 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded mb-3">
                  {contact.role}
                </span>
                <p className="text-sm text-gray-500 leading-snug min-h-[40px]">
                  {contact.desc}
                </p>
              </div>
              
              <a 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-green-50 text-green-700 rounded-xl font-medium hover:bg-green-100 transition-colors"
              >
                <MessageCircle size={18} />
                <span className="text-sm">{contact.btnText}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;