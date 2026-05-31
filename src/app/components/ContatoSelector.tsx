"use client";
import { useState } from "react";
import Image from "next/image";

type Contato = {
  nome: string;
  titulo?: string;
  telefone: string;
  whatsapp?: string;
  foto?: string;
};

type Departamento = {
  label: string;
  contatos: Contato[];
};

const departamentos: Departamento[] = [
  {
    label: "Comercial",
    contatos: [
      {
        nome: "Josi",
        titulo: "Palma Seguros",
        telefone: "+55 19 3056-2810",
        whatsapp: "551930562810",
        foto: "/equipe/josi.png",
      },
      {
        nome: "Karol",
        titulo: "Palma Seguros",
        telefone: "+55 19 3056-6897",
        whatsapp: "551930566897",
        foto: "/equipe/karol.png",
      },
      {
        nome: "Valmir",
        titulo: "Palma Seguros",
        telefone: "+55 19 3623-6044",
        whatsapp: "551936236044",
        foto: "/equipe/valmir.png",
      },
    ],
  },
  {
    label: "Sinistros",
    contatos: [
      {
        nome: "Jéssica",
        titulo: "Depto. de Sinistros",
        telefone: "+55 19 97600-4117",
        whatsapp: "5519976004117",
      },
    ],
  },
];

function phoneTel(phone: string) {
  return "tel:" + phone.replace(/[\s\-().]/g, "");
}

function Avatar({ foto, nome }: { foto?: string; nome: string }) {
  if (foto) {
    return (
      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-palma-blue-lighter">
        <Image
          src={foto}
          alt={nome}
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  const iniciais = nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-14 h-14 rounded-full bg-palma-blue-lighter flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-lg">{iniciais}</span>
    </div>
  );
}

export default function ContatoSelector() {
  const [ativo, setAtivo] = useState(0);
  const { contatos } = departamentos[ativo];

  return (
    <div>
      {/* Seletor de departamento */}
      <div className="flex gap-2 mb-8">
        {departamentos.map((dep, i) => (
          <button
            key={dep.label}
            onClick={() => setAtivo(i)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
              ativo === i
                ? "bg-palma-blue text-white"
                : "border-2 border-palma-blue text-palma-blue hover:bg-palma-blue hover:text-white"
            }`}
          >
            {dep.label}
          </button>
        ))}
      </div>

      {/* Cards de contato */}
      <div className="flex flex-col gap-4">
        {contatos.map((c) => (
          <div
            key={c.telefone}
            className="flex items-center gap-4 bg-gray-50 rounded-2xl px-5 py-4"
          >
            <Avatar foto={c.foto} nome={c.nome} />

            <div className="flex-1 min-w-0">
              <p className="font-maven font-bold text-palma-blue text-base leading-tight">
                {c.nome}
              </p>
              {c.titulo && (
                <p className="text-gray-400 text-xs mt-0.5">{c.titulo}</p>
              )}
              <p className="text-gray-500 text-sm mt-1">{c.telefone}</p>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              <a
                href={phoneTel(c.telefone)}
                title="Ligar"
                className="w-10 h-10 flex items-center justify-center bg-palma-blue hover:bg-palma-blue-medium text-white rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.06 6.06l1.84-1.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              </a>

              {c.whatsapp && (
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="w-10 h-10 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
