import type { Metadata } from "next";
import FAQ from "../components/FAQ";
import ContatoSelector from "../components/ContatoSelector";

export const metadata: Metadata = {
  title: "Contato – Palma Seguros",
  description:
    "Entre em contato com a Palma Seguros. Fale com nossos corretores e tire todas as suas dúvidas.",
};

// ─── Seção – Contato ──────────────────────────────────────────────────────────

function ContatoSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-maven font-black text-5xl text-palma-blue text-center mb-6">
          Fale com o Corretor
        </h1>
        <p className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Nossa equipe está pronta para te atender com o cuidado e a atenção que
          só uma empresa familiar pode oferecer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Formulário */}
          <div className="bg-gray-50 p-10 rounded-3xl">
            <h2 className="font-maven font-bold text-2xl text-palma-blue mb-8">
              Envie sua mensagem
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-palma-blue-lighter transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-palma-blue-lighter transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(XX) XXXXX-XXXX"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-palma-blue-lighter transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Assunto
                </label>
                <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-palma-blue-lighter transition-colors bg-white text-gray-500">
                  <option value="">Selecione um assunto</option>
                  <option>Cotação de seguro</option>
                  <option>Dúvidas sobre apólice</option>
                  <option>Aviso de sinistro</option>
                  <option>2ª via de boleto</option>
                  <option>Outro assunto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Como podemos te ajudar?"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-palma-blue-lighter transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-palma-red hover:bg-palma-red-medium text-white font-bold py-4 rounded-full transition-colors text-sm"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h2 className="font-maven font-bold text-2xl text-palma-blue mb-6">
                Fale com nossa equipe
              </h2>
              <ContatoSelector />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-palma-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">E-mail</p>
                <p className="text-gray-500 text-sm">contato@palmaseguros.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-palma-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Endereço</p>
                <p className="text-gray-500 text-sm">R. Floriano Peixoto, 11 - Centro</p>
                <p className="text-gray-500 text-sm">São João da Boa Vista - SP, 13870-060</p>
              </div>
            </div>

            <div className="bg-palma-blue text-white p-8 rounded-3xl">
              <h3 className="font-maven font-bold text-xl mb-3">Horário de atendimento</h3>
              <p className="text-white/80 text-sm">Segunda a Sexta: 8h às 12h / 13h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContatoPage() {
  return (
    <>
      <ContatoSection />
      <FAQ />
    </>
  );
}
