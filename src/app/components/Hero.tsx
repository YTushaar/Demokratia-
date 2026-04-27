export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-yellow-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/30 rounded-full blur-[120px]" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div className="animate-fade-in-up">
          <img 
            src="/team/logo.jpeg" 
            alt="Demokratia Logo" 
            className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-[0_0_50px_rgba(79,70,229,0.4)] border-2 border-blue-500/30" 
          />
        </div>
        
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-xs md:text-sm font-medium tracking-wide uppercase animate-fade-in-up">
          The Future of Democracy Starts Here
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight animate-fade-in-up">
          Demokratia <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Youth Parliament</span>
        </h1>
        
        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4">
          Step into the shoes of leaders, draft impactful policies, and experience the intensity of diplomatic negotiations. Are you ready to shape the future?
        </p>
        
        <div className="pt-4 md:pt-8 animate-fade-in-up">
          <a href="#register" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-[0_0_40px_rgba(79,70,229,0.4)]">
            Register Now
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

