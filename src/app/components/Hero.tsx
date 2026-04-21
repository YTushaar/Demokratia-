export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-black to-yellow-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px]" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <img 
          src="/team/logo.jpeg" 
          alt="Demokratia Logo" 
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-[0_0_50px_rgba(79,70,229,0.4)] border-2 border-indigo-500/30 animate-fade-in-up" 
        />
        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-sm font-medium tracking-wide uppercase mb-4 animate-fade-in-up">
          The Future of Democracy Starts Here
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
          Demokratia <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-yellow-400">Youth Parliament</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Step into the shoes of leaders, draft impactful policies, and experience the intensity of diplomatic negotiations. Are you ready to shape the future?
        </p>
        <div className="pt-8">
          <a href="#register" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-[0_0_40px_rgba(79,70,229,0.4)]">
            Register Now
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
