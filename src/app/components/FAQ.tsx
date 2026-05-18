"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Como funciona a contratação de um seguro?",
    resposta:
      "A contratação é simples e transparente. Entre em contato conosco para uma cotação personalizada, escolha a cobertura ideal para o seu perfil e finalize com nossa equipe especializada.",
  },
  {
    pergunta: "Quais tipos de seguro a Palma oferece?",
    resposta:
      "Oferecemos seguros para pessoas físicas e jurídicas, incluindo seguro de vida, saúde, automóvel, residencial, empresarial, entre outros. Fale com nossa equipe para descobrir a melhor opção para você.",
  },
  {
    pergunta: "Como acionar o seguro em caso de sinistro?",
    resposta:
      "Em caso de sinistro, utilize o atalho 'Aviso de Sinistro' no menu do site ou entre em contato diretamente com nossa equipe. Iremos orientá-lo em cada etapa do processo de forma humanizada e eficiente.",
  },
  {
    pergunta: "Como emitir a 2ª via do boleto?",
    resposta:
      "Você pode emitir a 2ª via do boleto pelo atalho rápido '2ª Via – Boleto' no menu do site, ou entrando em contato com nossa equipe de atendimento pelo telefone ou e-mail.",
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-maven font-black text-4xl text-palma-blue text-center mb-16">
          Dúvidas que você pode ter
        </h2>
        <div className="space-y-4">
          {perguntas.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between font-maven font-medium text-palma-blue hover:bg-gray-50 transition-colors"
                onClick={() => setAberto(aberto === i ? null : i)}
              >
                <span className="pr-4">{item.pergunta}</span>
                <span className="text-palma-red font-bold text-2xl leading-none shrink-0">
                  {aberto === i ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  aberto === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
