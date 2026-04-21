const PERKS = [
  { title: "Certification", desc: "Certificate from Ministry of Parliamentary Affairs." },
  { title: "Networking", desc: "Networking opportunity with peers from different schools all over Hyderabad." },
  { title: "Exposure", desc: "Interaction opportunity with high level politicians." },
  { title: "Awards", desc: "Awards and Cash Prizes." },
];

export default function Perks() {
  return (
    <section className="py-24 bg-black relative" id="perks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Participant <span className="text-blue-400">Perks</span></h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((perk, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-blue-500/40 hover:scale-105 hover:shadow-[0_0_30px_rgba(65,105,225,0.1)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-400">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
