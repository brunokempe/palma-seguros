const reels = [
  "https://www.instagram.com/reel/DYm0sgkOMnD/",
  "https://www.instagram.com/reel/DYe5jDXNK09/",
  "https://www.instagram.com/reel/DXbxfu_jbBr/",
];

export default function InstagramReels() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-14 gap-4">
          <div>
            <h2 className="font-maven font-black text-4xl text-palma-blue">
              Acompanhe a Palma
            </h2>
            <p className="text-gray-500 mt-2">
              Novidades, dicas e histórias no nosso Instagram
            </p>
          </div>
          <a
            href="https://www.instagram.com/palmaseg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-palma-blue hover:bg-palma-blue-medium text-white font-bold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @palmaseg
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reels.map((url) => (
            <div key={url} className="rounded-3xl overflow-hidden bg-black">
              <iframe
                src={`${url}embed/`}
                className="w-full block"
                style={{ height: 740, border: "none" }}
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
