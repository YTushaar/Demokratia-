const EVENTS = [
  {
    title: "AIPPM",
    desc: "A committee that simulates a national-level discussion among Indian political parties, focusing on pressing domestic issues. Unlike conventional MUNs, delegates represent specific Indian politicians (MPs/leaders), adopting their views to debate agendas like economic policy, security, or social reforms.",
    icon: "🎙️"
  },
  {
    title: "Lok Sabha",
    desc: "The Lok Sabha serves as the pivotal legislative and representative body of India, exercising primary authority over national governance and finance. Its core functions include law-making, where it debates and passes bills on subjects in the Union and Concurrent Lists, and financial control, as it holds the exclusive power to initiate \"Money Bills\" and approve the Union Budget. Crucially, the Lok Sabha ensures executive accountability.",
    icon: "🏛️"
  },
  {
    title: "National Press",
    desc: "The National Press Committee serves as the media backbone of our Youth Parliament, immersing participants in the dynamic role of journalists, photographers, and editorial cartoonists. Delegates observe and report on deliberations across all committees, including Lok Sabha, Rajya Sabha, and specialized working groups, capturing key debates, policy positions, and pivotal moments.",
    icon: "📰"
  }
];

export default function SubEvents() {
  return (
    <section className="py-24 bg-zinc-950 relative" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-blue-400">Committees</span></h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((evt, i) => (
            <div key={i} className="relative group p-8 rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-all"></div>
              <div className="text-4xl mb-6 relative z-10">{evt.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{evt.title}</h3>
              <p className="text-gray-400 relative z-10">{evt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
