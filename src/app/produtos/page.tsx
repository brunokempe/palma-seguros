import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos – Palma Seguros",
  description:
    "Conheça o portfólio completo da Palma Seguros: seguros para pessoas físicas, empresas e muito mais.",
};

// ─── Seção – Produtos ─────────────────────────────────────────────────────────

function ProdutosSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-maven font-black text-5xl text-palma-blue text-center mb-6">
          Para cada preocupação, o melhor modelo de contratação
        </h1>
        <p className="text-gray-600 text-center text-lg mb-14 max-w-2xl mx-auto leading-relaxed">
          Seja para proteger você, sua família ou o seu negócio, temos a solução
          certa com o suporte de quem entende do mercado há 40 anos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-palma-blue text-white p-10 rounded-3xl hover:bg-palma-blue-medium transition-colors cursor-pointer">
            <h3 className="font-maven font-bold text-2xl mb-4">
              Seguros para mim
            </h3>
            <p className="opacity-75 leading-relaxed mb-6">
              Proteção personalizada para você e sua família, com coberturas
              que atendem cada necessidade da sua vida.
            </p>
            <ul className="space-y-2 text-sm opacity-70">
              <li>→ Seguro de Vida</li>
              <li>→ Seguro Residencial</li>
              <li>→ Seguro de Automóvel</li>
              <li>→ Seguro Viagem</li>
            </ul>
          </div>
          <div className="bg-palma-red text-white p-10 rounded-3xl hover:bg-palma-red-medium transition-colors cursor-pointer">
            <h3 className="font-maven font-bold text-2xl mb-4">
              Seguros para minha empresa
            </h3>
            <p className="opacity-75 leading-relaxed mb-6">
              Soluções completas para proteger o seu negócio com o suporte de
              quem entende do mercado há 40 anos.
            </p>
            <ul className="space-y-2 text-sm opacity-70">
              <li>→ Seguro Empresarial</li>
              <li>→ Seguro de Responsabilidade Civil</li>
              <li>→ Seguro Frota</li>
              <li>→ Seguro de Vida em Grupo</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/contato"
            className="inline-block bg-palma-blue hover:bg-palma-blue-medium text-white font-bold px-10 py-4 rounded-full transition-colors"
          >
            Quero uma solução personalizada
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Seção – Palma & Grupo Exalt ─────────────────────────────────────────────

const destaques = [
  "XX anos de parceria",
  "Produtos exclusivos",
  "Rede consolidada de parceiros",
  "Suporte técnico de excelência",
  "Gestão completa de seguros",
];

function ExaltSection() {
  return (
    <section className="py-20 px-6 bg-palma-blue text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-maven font-black text-4xl text-center mb-12">
          Palma & Grupo Exalt
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {destaques.map((item) => (
            <span
              key={item}
              className="border border-white/30 text-white font-medium px-6 py-3 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-palma-blue-medium rounded-3xl flex items-center justify-center min-h-52 aspect-video"
            >
              <span className="text-white opacity-50 font-medium">
                Vídeo Depoimento {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProdutosPage() {
  return (
    <>
      <ProdutosSection />
      <ExaltSection />
    </>
  );
}
