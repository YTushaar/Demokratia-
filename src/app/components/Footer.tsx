export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4">Demokratia <span className="text-blue-400">Youth Parliament</span></h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.instagram.com/demokratia.2026?igsh=MXgwcW5kbWd5OWY1Mg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          &copy; {new Date().getFullYear()} Demokratia Youth Parliament. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Website built by <a href="https://github.com/YTushaar" target="_blank" rel="noopener noreferrer" className="text-blue-400/60 hover:text-blue-400 transition-colors">Y.Tushaar</a> • <a href="https://linkedin.com/in/tushaar-yenduri-6b10a822b" target="_blank" rel="noopener noreferrer" className="text-blue-400/60 hover:text-blue-400 transition-colors">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
