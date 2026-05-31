import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-palma-blue-medium text-white py-16 px-6">
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
          <h4 className="font-maven font-bold text-lg mb-4">
            Contato & Endereço
          </h4>
          <div className="space-y-2 text-white/70 text-sm">
            <p>contato@palmaseguros.com.br</p>
            <p>+55 19 3623-6044</p>
            <p>+55 19 97600-4117</p>
            <p>R. Floriano Peixoto, 11 - Centro</p>
            <p>São João da Boa Vista - SP, 13870-060</p>
          </div>
        </div>
        <div>
          <h4 className="font-maven font-bold text-lg mb-4">Redes Sociais</h4>
          <div className="flex gap-4 text-sm">
            <a
              href="https://www.instagram.com/palmaseg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/palmaseguros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://br.linkedin.com/company/palmaseguros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-8">
            <Link
              href="/contato"
              className="inline-block bg-palma-red hover:bg-palma-red-medium text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Fale com o Corretor
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Palma Seguros. Todos os direitos reservados.
      </div>
    </footer>
  );
}
