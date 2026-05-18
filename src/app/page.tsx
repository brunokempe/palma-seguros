import FAQ from "./components/FAQ";

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header>
      {/* Linha 1 – Navegação principal (4 seções + busca) */}
      <nav className="bg-palma-blue text-white">
        <div className="flex items-stretch w-full">
          {/* Seção 1 – Identidade */}
          <div className="flex flex-1 flex-col items-center justify-center py-4 border-r border-white/20">
            <div className="font-maven font-black text-xl leading-tight text-center">
              Palma Seguros
            </div>
            <div className="text-xs opacity-70 leading-tight mt-0.5 text-center">
              A família corretora
            </div>
            <div className="text-xs opacity-50 leading-tight text-center">
              Associada ao grupo Exalt
            </div>
          </div>

          {/* Seção 2 – Produtos */}
          <a
            href="#produtos"
            className="flex flex-1 items-center justify-center py-4 text-sm font-medium border-r border-white/20 hover:bg-white/10 transition-colors text-center"
          >
            Produtos
          </a>

          {/* Seção 3 – Fale Conosco */}
          <a
            href="#contato"
            className="flex flex-1 items-center justify-center py-4 text-sm font-medium border-r border-white/20 hover:bg-white/10 transition-colors text-center"
          >
            Fale Conosco
          </a>

          {/* Seção 4 – Conheça a Família Palma */}
          <a
            href="#sobre"
            className="flex flex-1 items-center justify-center py-4 text-sm font-medium border-r border-white/20 hover:bg-white/10 transition-colors text-center leading-snug"
          >
            Conheça a<br />Família Palma
          </a>

          {/* Busca */}
          <div className="flex items-center justify-center px-6 py-4 border-l border-white/20">
            <button
              aria-label="Buscar"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/15 active:bg-white/25 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Linha 2 – Atalhos rápidos */}
      <div className="bg-palma-red text-white">
        <div className="flex w-full text-sm font-medium">
          <a
            href="#"
            className="flex flex-1 items-center justify-center py-2 border-r border-white/30 hover:bg-white/10 transition-colors"
          >
            2ª Via – Boleto
          </a>
          <a
            href="#"
            className="flex flex-1 items-center justify-center py-2 border-r border-white/30 hover:bg-white/10 transition-colors"
          >
            Aviso de Sinistro
          </a>
          <a
            href="#cotacao"
            className="flex flex-1 items-center justify-center py-2 hover:bg-white/10 transition-colors"
          >
            Faça uma cotação
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Seção 1 – Hero ───────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-palma-blue text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h1 className="font-maven font-black text-5xl md:text-6xl leading-tight mb-10">
            Conte com o melhor seguro e o apoio de uma família inteira
          </h1>
          <a
            href="#contato"
            className="inline-block bg-palma-red hover:bg-palma-red-medium text-white font-bold px-10 py-4 rounded-full transition-colors text-lg"
          >
            Converse conosco
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md aspect-[4/3] bg-palma-blue-light rounded-3xl flex items-center justify-center opacity-40">
            <span className="text-white text-lg font-medium">Imagem Principal</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Seção 2 – Diferenciais ───────────────────────────────────────────────────

const diferenciais = [
  "40 anos de mercado",
  "Atendimento humanizado",
  "Contato fácil",
  "Apoio em cada imprevisto",
  "Transparência na contratação",
];

function DiferenciaisSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-maven font-black text-4xl text-palma-blue mb-12">
          Quem tem Família, tem tudo.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {diferenciais.map((item) => (
            <span
              key={item}
              className="bg-palma-blue text-white font-medium px-6 py-3 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href="#sobre"
          className="text-palma-red font-bold hover:text-palma-red-medium transition-colors"
        >
          Descubra as vantagens de contar com a Palma →
        </a>
      </div>
    </section>
  );
}

// ─── Seção 3 – Produtos ───────────────────────────────────────────────────────

function ProdutosSection() {
  return (
    <section id="produtos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-maven font-black text-4xl text-palma-blue text-center mb-14">
          Para cada preocupação, o melhor modelo de contratação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-palma-blue text-white p-10 rounded-3xl hover:bg-palma-blue-medium transition-colors cursor-pointer group">
            <h3 className="font-maven font-bold text-2xl mb-4">
              Seguros para mim
            </h3>
            <p className="opacity-75 leading-relaxed">
              Proteção personalizada para você e sua família, com coberturas
              que atendem cada necessidade da sua vida.
            </p>
          </div>
          <div className="bg-palma-red text-white p-10 rounded-3xl hover:bg-palma-red-medium transition-colors cursor-pointer group">
            <h3 className="font-maven font-bold text-2xl mb-4">
              Seguros para minha empresa
            </h3>
            <p className="opacity-75 leading-relaxed">
              Soluções completas para proteger o seu negócio com o suporte de
              quem entende do mercado há 40 anos.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            id="cotacao"
            href="#contato"
            className="inline-block bg-palma-blue hover:bg-palma-blue-medium text-white font-bold px-10 py-4 rounded-full transition-colors"
          >
            Quero uma solução personalizada
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Seção 4 – Sobre / História ───────────────────────────────────────────────

function SobreSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-maven font-black text-4xl text-palma-blue text-center mb-16">
          3 gerações cuidando do seu seguro
        </h2>
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

// ─── Seção 5 – Equipe ─────────────────────────────────────────────────────────

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

// ─── Seção 6 – Palma & Grupo Exalt ───────────────────────────────────────────

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

// ─── Rodapé ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contato" className="bg-palma-blue-medium text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="font-maven font-black text-2xl mb-4">
            Palma Seguros
          </div>
          <p className="text-white/70 leading-relaxed text-sm">
            Há mais de 40 anos protegendo famílias com atendimento humanizado,
            transparência e o cuidado genuíno que só uma empresa familiar pode
            oferecer.
          </p>
        </div>
        <div>
          <h4 className="font-maven font-bold text-lg mb-4">Contato & Endereço</h4>
          <div className="space-y-2 text-white/70 text-sm">
            <p>contato@palmaseguros.com.br</p>
            <p>(XX) XXXX-XXXX</p>
            <p>Endereço, Cidade – Estado</p>
          </div>
        </div>
        <div>
          <h4 className="font-maven font-bold text-lg mb-4">Redes Sociais</h4>
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Palma Seguros. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <ProdutosSection />
      <SobreSection />
      <EquipeSection />
      <ExaltSection />
      <FAQ />
      <Footer />
    </main>
  );
}
