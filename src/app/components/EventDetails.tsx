export default function EventDetails() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="about">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Event <span className="text-blue-400">Details</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Date Card */}
          <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Date</h3>
            <p className="text-gray-300 mb-8 text-lg">
              May 9th &amp; 10th, 2026
            </p>

            <a 
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Demokratia+Youth+Parliament+2026&dates=20260509/20260511&details=2+Days+of+debate,+diplomacy,+and+leadership&location=Ashoka+School+of+Business,+Greater+Hyderabad,+Yadadri,+near+Ramoji+Film+City,+Bhuvanagiri,+Telangana+508252&sf=true&output=xml"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 px-6 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              Add to Calendar
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" /></svg>
            </a>
          </div>
          
          {/* Venue Card */}
          <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-500/20 text-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-500/30 transition-all duration-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Venue</h3>
            <div className="mb-8">
              <p className="text-white font-medium mb-1">Ashoka School of Business</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Greater Hyderabad, Yadadri, near Ramoji Film City, Bhuvanagiri, Telangana 508252
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Ashoka+School+of+Business,+Greater+Hyderabad,+Yadadri,+near+Ramoji+Film+City,+Bhuvanagiri,+Telangana+508252" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 px-6 rounded-xl bg-yellow-600/10 border border-yellow-500/30 text-yellow-400 font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              Open in Maps
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          
          {/* Overview Card */}
          <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Overview</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              2 Days of intensive debate, diplomatic negotiations, and leadership excellence.
            </p>
            <a 
              href="mailto:Demokratia.official@gmail.com"
              className="mt-auto text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
            >
              Reach out to us at: Demokratia.official@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

