const GUESTS = [
  { name: "K Venkata Ramana Reddy", designation: "MLA (Kamareddy)", intro: "Member of Legislative Assembly representing Kamareddy constituency.", image: "/team/K Venkata Ramana Reddy -MLA (Kamareddy).jpeg" },
  { name: "Raghunandan Rao", designation: "Member of Parliament (Medak)", intro: "Member of Parliament representing the Medak constituency.", image: "/team/Raghunandan Rao-Member of Parliment(Medak).jpeg" },
  { name: "Ramchander Rao", designation: "President, BJP Telangana State unit", intro: "President of the Bharatiya Janata Party, Telangana State unit.", image: "/team/Ramchander Rao-President,BJP Telangana State unit.jpeg" },
  { name: "Sambit Patra", designation: "MP and National Spokesperson", intro: "Member of Parliament and National Spokesperson of the Bharatiya Janata Party.", image: "/team/Sambit Patra MP and national spokesperson.jpeg" },
  { name: "Sri Ram Karri", designation: "Director of Media and Communications", intro: "Director of Media and Communications, Telangana Government.", image: "/team/Sri ram karri - director of media and communications telangana govt.jpeg" },
  { name: "Rahul Saridena", designation: "BJP State Spokesperson", intro: "State Spokesperson for the Bharatiya Janata Party.", image: "/team/Rahul Saridena - BJP State Spokesperson.jpeg" },
  { name: "Ramani Varanasi", designation: "Principal, Akshara International School", intro: "Principal of Akshara International School, holds an MA in English Literature.", image: "/team/Ramani varnasi Principal Akshara International School MA English Literature.jpeg" }
];

export default function ChiefGuests() {
  return (
    <section className="py-24 bg-black relative" id="guests">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Chief <span className="text-yellow-400">Guests</span></h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative flex overflow-hidden group">
          <div className="flex gap-6 pr-6 animate-marquee min-w-max hover:[animation-play-state:paused]">
            {[...GUESTS, ...GUESTS].map((guest, i) => (
              <div key={i} className="flex-none w-[280px] sm:w-[320px] group/card relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer hover:border-yellow-500/50 transition-colors">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={guest.image} 
                    alt={guest.name} 
                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{guest.name}</h3>
                  <p className="text-yellow-400 font-medium mb-2">{guest.designation}</p>
                  <p className="text-gray-300 text-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 line-clamp-3">{guest.intro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
