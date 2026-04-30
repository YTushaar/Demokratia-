export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Demokratia <span className="text-blue-400">Youth Parliament</span></h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="https://www.instagram.com/demokratia.2026?igsh=MXgwcW5kbWd5OWY1Mg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-lg">
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/demokratia-youth-parliament/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-lg">
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

        <div className="mt-12 flex flex-col items-center">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-400 text-sm md:text-base">Designed & Developed with ❤️ by</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/YTushaar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-bold text-lg hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-xs uppercase tracking-wider">Lead Dev</span>
                  Tushaar Yenduri
                </a>
                <span className="text-gray-600 hidden md:block">|</span>
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/tushaar-yenduri-6b10a822b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://github.com/YTushaar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-gray-600 text-sm italic">
            &copy; {new Date().getFullYear()} Demokratia Youth Parliament. Empowering future diplomats.
          </p>
        </div>
      </div>
    </footer>
  );
}
