export default function EventDetails() {
  return (
    <section className="py-24 bg-black relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Event <span className="text-blue-400">Details</span></h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(65,105,225,0.1)] transition-all duration-300">
            <a 
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Demokratia+Youth+Parliament+2026&dates=20260509/20260511&details=2+Days+of+debate,+diplomacy,+and+leadership&location=Ashoka+School+of+Business,+Greater+Hyderabad,+Yadadri,+near+Ramoji+Film+City,+Bhuvanagiri,+Telangana+508252&sf=true&output=xml"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Date</h3>
              <p className="text-gray-400 group-hover:text-blue-400 transition-colors">
                May 9th and May 10th 2026
              </p>
            </a>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 hover:border-yellow-500/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)] transition-all duration-300">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Ashoka+School+of+Business,+Greater+Hyderabad,+Yadadri,+near+Ramoji+Film+City,+Bhuvanagiri,+Telangana+508252" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Venue</h3>
              <div className="flex flex-col items-center">
                <span className="text-white font-medium group-hover:text-yellow-400 transition-colors mb-1">
                  Ashoka School of Business
                </span>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Greater Hyderabad, Yadadri, near Ramoji Film City,<br />Bhuvanagiri, Telangana 508252
                </span>
              </div>
            </a>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(65,105,225,0.1)] transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Overview</h3>
            <p className="text-gray-400">2 Days of debate, diplomacy, and leadership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
