const TEAM = [
  { name: "Sangras Bhargav", role: "Chair AIPPM", image: "/team/Sangras Bhargav-Chair AIPPM.jpeg" },
  { name: "PVS Deepak", role: "Vice Chair AIPPM", image: "/team/PVS Deepak-Vice Chair AIPPM.jpeg" },
  { name: "Bilal Quadri", role: "Speaker Lok Sabha", image: "/team/Bilal Quadri-Speaker Lok Sanha.jpeg" },
  { name: "Sidha Sankalp", role: "Deputy Speaker Lok Sabha", image: "/team/Sidha Sankalp - Deputy Speaker Lok Sabha.jpeg" },
  { name: "Akshitha", role: "Rapporteur AIPPM", image: "/team/Akshitha-Rapporteur-AIPPM.jpeg" },
];

export default function ExecutiveBoard() {
  return (
    <section className="py-24 bg-zinc-950 relative" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Executive <span className="text-blue-400">Board</span></h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2rem)] max-w-sm flex flex-col items-center gap-6 p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 hover:bg-white/5 transition-all group cursor-pointer">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium px-4 py-1.5 rounded-full bg-blue-500/10 inline-block">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
