export default function Registration() {
  return (
    <section className="py-24 bg-black relative" id="register">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to <span className="text-blue-400">Join?</span></h2>
          <p className="text-gray-400 text-lg">Secure your spot in the most anticipated youth parliament event of the year.</p>
        </div>
        
        <div className="bg-zinc-900 rounded-3xl p-2 md:p-4 border border-white/10 shadow-2xl overflow-hidden h-[600px] w-full flex items-center justify-center relative">
          {/* Iframe Placeholder */}
          <iframe 
            src="https://demo.fillout.com/t/placeholder" 
            width="100%" 
            height="100%" 
            className="rounded-2xl border-none absolute inset-0"
            title="Registration Form"
          ></iframe>
          
          {/* Fallback overlay in case iframe fails to load or is just a placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/80 backdrop-blur-sm pointer-events-none">
            <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">Fillout Form Embed</h3>
            <p className="text-gray-400">Replace iframe src with your actual Fillout form URL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
