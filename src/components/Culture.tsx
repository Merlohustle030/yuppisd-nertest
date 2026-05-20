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
  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-20 px-4 md:px-8 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] flex justify-center border-t-[10px] border-black">
      <div className="w-full max-w-[1600px] flex flex-col">
        
        {/* Editorial Header */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between border-b-[4px] border-black pb-8 md:pb-12 mb-12">
          
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

        {/* Newspaper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[4px] border-black bg-black gap-[4px]">
          {EVENTS.map((item, i) => (
            <div key={i} className="flex flex-col bg-white group cursor-pointer overflow-hidden relative">
              
              {/* Top Text / Meta */}
              <div className="p-4 md:p-6 border-b-[4px] border-black flex flex-col gap-2 min-h-[140px] justify-between relative z-10 bg-white transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <div className="flex items-center justify-between font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/50 group-hover:text-white/80">
                  <span>{item.category}</span>
                  <span className="font-sans text-lg leading-none">{String(i + 1).padStart(2, '0')}</span>
                </div>
                
                <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-black group-hover:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Image Frame */}
              <div className="w-full aspect-[3/4] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />
              </div>

              {/* Footer Location */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 flex justify-between items-center">
                <span className="bg-black text-white font-mono text-xs uppercase font-bold py-2 px-4">
                  {item.location}
                </span>
                <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
