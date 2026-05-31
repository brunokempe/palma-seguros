"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="bg-palma-blue text-white">
        <div className="flex items-stretch w-full">
          <Link
            href="/"
            className="flex flex-col items-center justify-center px-6 py-4 border-r border-white/20 min-w-[180px] hover:bg-white/10 transition-colors"
          >
            <div className="font-maven font-black text-xl leading-tight text-center">
              Palma Seguros
            </div>
            <div className="text-xs opacity-70 leading-tight mt-0.5 text-center">
              A família corretora
            </div>
            <div className="text-xs opacity-50 leading-tight text-center">
              Associada ao grupo Exalt
            </div>
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-1 items-center justify-center py-4 text-sm font-medium border-r border-white/20 hover:bg-white/10 transition-colors text-center ${
                pathname === link.href ? "bg-white/15 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center justify-center px-6 py-4">
            <Link
              href="/contato"
              className="bg-palma-red hover:bg-palma-red-medium text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Fale com o Corretor
            </Link>
          </div>
        </div>
      </nav>

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
          <Link
            href="/contato"
            className="flex flex-1 items-center justify-center py-2 hover:bg-white/10 transition-colors"
          >
            Faça uma cotação
          </Link>
        </div>
      </div>
    </header>
  );
}
