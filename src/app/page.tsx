import InstagramReels from "./components/InstagramReels";

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
            href="/contato"
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
          href="/sobre"
          className="text-palma-red font-bold hover:text-palma-red-medium transition-colors"
        >
          Descubra as vantagens de contar com a Palma →
        </a>
      </div>
    </section>
  );
}

// ─── Seção 3 – CTA Produtos ───────────────────────────────────────────────────

function CtaProdutosSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-maven font-black text-4xl text-palma-blue mb-6">
          Para cada preocupação, o melhor modelo de contratação
        </h2>
        <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
          Seja para proteger sua família ou o seu negócio, temos a solução certa.
          Conheça nosso portfólio completo de seguros.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/produtos"
            className="inline-block bg-palma-blue hover:bg-palma-blue-medium text-white font-bold px-10 py-4 rounded-full transition-colors"
          >
            Ver todos os produtos
          </a>
          <a
            href="/contato"
            className="inline-block border-2 border-palma-blue text-palma-blue hover:bg-palma-blue hover:text-white font-bold px-10 py-4 rounded-full transition-colors"
          >
            Fale com o Corretor
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InicioPage() {
  return (
    <>
      <HeroSection />
      <DiferenciaisSection />
      <CtaProdutosSection />
      <InstagramReels />
    </>
  );
}
