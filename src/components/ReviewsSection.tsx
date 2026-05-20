import { Star } from 'lucide-react';

const REVIEWS = [
  {
    role: "LOCAL GUIDE",
    text: `"Endlich wieder richtiger Yaprak in Berlin. Kein Hack-Gemisch, 100% Scheibenfleisch."`,
    rating: 5
  },
  {
    role: "NACHTSCHWÄRMER",
    text: `"Komme wegen der Knoblauch-Sauce, bleibe weil es der einzige Laden ist, der um 4 Uhr noch Qualität liefert."`,
    rating: 5
  },
  {
    role: "STAMMGAST",
    text: `"Besser als der Hype-Laden zwei Straßen weiter. Das Brot ist selbstgebacken und extrem krass."`,
    rating: 5
  }
];

export function ReviewsSection() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-12 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] flex justify-center border-t-[10px] border-black overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b-[4px] border-black pb-8 md:pb-12 mb-16 md:mb-24 gap-8">
          <div className="flex flex-col">
            <span className="font-mono text-sm md:text-base font-bold text-red-600 uppercase tracking-widest mb-4">
              Bewertung
            </span>
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] text-black uppercase tracking-tighter leading-[0.85]">
              KUNDEN<br />
              FEEDBACK.
            </h2>
          </div>
          
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            <div className="bg-red-600 text-white font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-4 md:px-6 py-3 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] whitespace-nowrap">
              4.9 / 5.0 GOOGLE
            </div>
            <div className="bg-white text-black font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-4 md:px-6 py-3 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] whitespace-nowrap">
              BEST KEBAP 2025
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12 mt-4">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="relative bg-neutral-50 border-[3px] border-black p-8 md:p-10 lg:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(220,38,38,1)] shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col"
            >
              {/* Brutalist Tape Effect */}
              <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 w-20 md:w-28 h-8 md:h-10 bg-neutral-300 border-[2px] border-black rotate-[-2deg] shadow-sm z-10" />
              
              {/* Card Header (Stars & Role) */}
              <div className="flex justify-between items-center mb-8 md:mb-12 pt-2">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 lg:w-5 lg:h-5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <span className="font-mono text-[10px] md:text-xs text-black/50 font-bold uppercase tracking-widest">
                  {review.role}
                </span>
              </div>
              
              {/* Quote */}
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tighter leading-[1.1] mb-6 flex-grow">
                {review.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
