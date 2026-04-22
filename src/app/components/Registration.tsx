export default function Registration() {
  return (
    <section className="py-24 bg-black relative" id="register">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Spot</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Join the most anticipated youth parliament event. Fill out the form below to register as a delegate or member of the executive board.
          </p>
        </div>
        
        <div className="relative group">
          {/* Form border glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-zinc-900/90 rounded-[2rem] p-1 border border-white/10 shadow-2xl overflow-hidden h-[800px] w-full backdrop-blur-xl">
            <iframe 
              src="https://forms.fillout.com/t/79X1cph98Xus" 
              width="100%" 
              height="100%" 
              className="rounded-[1.8rem] border-none"
              title="Registration Form"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
