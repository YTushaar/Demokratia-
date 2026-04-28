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

        <p className="text-gray-600 text-base mb-3">
          &copy; {new Date().getFullYear()} Demokratia Youth Parliament. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm font-semibold">
          Website built by <a href="https://github.com/YTushaar" target="_blank" rel="noopener noreferrer" className="text-blue-400/80 hover:text-blue-400 transition-colors">Y.Tushaar</a> • <a href="https://linkedin.com/in/tushaar-yenduri-6b10a822b" target="_blank" rel="noopener noreferrer" className="text-blue-400/80 hover:text-blue-400 transition-colors">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
