export default function Founder() {
  return (
    <section className="py-24 bg-zinc-950 relative" id="founder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
          
          <div className="w-full md:w-1/3 relative z-10">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-4">
              Founder's Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Empowering the Next Generation of Leaders</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              "We started Demokratia Youth Parliament with a simple belief: young people have the power to change the world. By providing a platform for debate, diplomacy, and collaboration, we aim to nurture the skills necessary to tackle tomorrow's global challenges."
            </p>
            <div>
              <p className="font-bold text-white text-xl">Jonathan Doe</p>
              <p className="text-indigo-400">Founder & Chairman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
