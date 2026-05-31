import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre – Palma Seguros",
  description:
    "Conheça a história da Palma Seguros, 3 gerações de uma família dedicada a proteger outras famílias há mais de 40 anos.",
};

// ─── Seção – História ─────────────────────────────────────────────────────────

function HistoriaSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-maven font-black text-5xl text-palma-blue text-center mb-16">
          3 gerações cuidando do seu seguro
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-16 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              A Palma Seguros nasceu do compromisso de uma família com a
              proteção de outras famílias. Ao longo de mais de 40 anos,
              construímos uma trajetória sólida baseada em confiança,
              transparência e atendimento humanizado.
            </p>
            <p>
              De geração em geração, transmitimos os mesmos valores: dedicação,
              ética e o genuíno cuidado com cada cliente. Não somos apenas uma
              corretora — somos parceiros que entendem que cada apólice
              representa a segurança de uma família.
            </p>
            <p>
              Hoje, associados ao Grupo Exalt, ampliamos nossa capacidade de
              oferecer as melhores soluções do mercado, mantendo sempre o calor
              e a atenção que só uma empresa familiar pode oferecer.
            </p>
          </div>
          <div className="bg-palma-blue-lighter rounded-3xl flex items-center justify-center min-h-64 aspect-video">
            <span className="text-white opacity-60 font-medium">
              Vídeo Manifesto
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-palma-blue-lighter p-8 rounded-3xl">
            <h3 className="font-maven font-bold text-xl text-palma-blue mb-4">
              Missão
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Oferecer proteção genuína com atendimento humanizado e soluções
              que transformam a experiência do seguro.
            </p>
          </div>
          <div className="bg-palma-blue text-white p-8 rounded-3xl">
            <h3 className="font-maven font-bold text-xl mb-4">Visão</h3>
            <p className="opacity-80 leading-relaxed">
              Ser a corretora de seguros mais recomendada pelas famílias
              brasileiras, reconhecida pela excelência e confiança.
            </p>
          </div>
          <div className="border-2 border-palma-blue-lighter p-8 rounded-3xl">
            <h3 className="font-maven font-bold text-xl text-palma-blue mb-4">
              Valores
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Família, transparência, ética, inovação e compromisso com o
              bem-estar dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Seção – Equipe ───────────────────────────────────────────────────────────

const membros = [
  { nome: "Nome do Membro", funcao: "Função", iniciais: "NM" },
  { nome: "Nome do Membro", funcao: "Função", iniciais: "NM" },
  { nome: "Nome do Membro", funcao: "Função", iniciais: "NM" },
];

function EquipeSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-maven font-black text-4xl text-palma-blue text-center mb-16">
          Cuidar é coisa de família. Conheça quem cuida da sua segurança.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membros.map((membro, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl text-center shadow-sm"
            >
              <div className="w-24 h-24 bg-palma-blue-lighter rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {membro.iniciais}
                </span>
              </div>
              <h3 className="font-maven font-bold text-xl text-palma-blue mb-2">
                {membro.nome}
              </h3>
              <p className="text-gray-500">{membro.funcao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SobrePage() {
  return (
    <>
      <HistoriaSection />
      <EquipeSection />
    </>
  );
}
