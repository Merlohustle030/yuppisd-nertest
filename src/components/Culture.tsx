import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const EVENTS = [
  {
    category: "Zutaten",
    location: "Yuppis",
    title: "Salat Frisch",
    image: "https://i.ibb.co/23x9pxPB/yuppis.png"
  },
  {
    category: "Qualität",
    location: "Yuppis",
    title: "Fleisch Saftig",
    image: "https://i.ibb.co/23fJgnc4/yuppis6.png"
  },
  {
    category: "Handwerk",
    location: "Yuppis",
    title: "Profis am Werk",
    image: "https://i.ibb.co/JjK4nJnh/yuppis9.png"
  },
  {
    category: "Erfrischung",
    location: "Yuppis",
    title: "Frische Getränke",
    image: "https://i.ibb.co/LzTzcjKb/yuppis4.png"
  }
];

export function Culture() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-20 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] flex justify-center border-t-[10px] border-black overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col px-4 md:px-8">
        
        {/* Editorial Header */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between border-b-[4px] border-black pb-8 md:pb-12 mb-8 md:mb-12">
          
          <div className="flex flex-col">
            <h2 className="font-display text-[12vw] md:text-8xl lg:text-[7rem] text-black uppercase tracking-tighter leading-[0.8]">
              DIE YUPPIS <br /> 
              <span className="text-red-600">KULTUR.</span>
            </h2>
          </div>
          
          <p className="font-mono text-sm md:text-base font-bold text-black max-w-md mt-6 lg:mt-0 uppercase tracking-tight">
            Wir pushen die Szene. Echtes Kiez-Feeling, das Farbe in den Alltag bringt, Relevanz schafft und unsere Community formt.
          </p>
          
        </div>

        {/* Mobile controls */}
        <div className="flex justify-end gap-2 mb-4 md:hidden px-2">
          <button onClick={scrollLeft} className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors">
            <ChevronLeft strokeWidth={3} />
          </button>
          <button onClick={scrollRight} className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors">
            <ChevronRight strokeWidth={3} />
          </button>
        </div>

        {/* Newspaper Grid Layout */}
        <div className="-mx-4 md:mx-0 px-4 md:px-0">
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 border-y-[4px] md:border-[4px] border-black bg-black gap-[4px] overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {EVENTS.map((item, i) => (
              <div key={i} className="flex flex-col bg-white group cursor-pointer overflow-hidden relative shrink-0 w-[85vw] md:w-auto snap-center shadow-lg md:shadow-none mr-4 md:mr-0 border-[4px] border-black md:border-none">
                
                {/* Top Text / Meta */}
                <div className="p-4 md:p-6 border-b-[4px] border-black flex flex-col gap-2 min-h-[140px] justify-between relative z-10 bg-red-600 md:bg-white transition-colors duration-300 md:group-hover:bg-red-600 text-white md:text-black md:group-hover:text-white">
                  <div className="flex items-center justify-between font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 md:text-black/50 md:group-hover:text-white/80">
                    <span>{item.category}</span>
                    <span className="font-sans text-lg leading-none">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-white md:text-black md:group-hover:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Image Frame */}
                <div className="w-full aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Footer Location */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-0 opacity-100 md:translate-y-[150%] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out z-10 flex justify-between items-center">
                  <span className="bg-black text-white font-mono text-xs uppercase font-bold py-2 px-4 shadow-md">
                    {item.location}
                  </span>
                  <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-md z-20 md:group-hover:scale-110 transition-transform">
                    <span className="text-black font-bold">→</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
