import { motion } from 'motion/react';
import { ArrowUpRight, Flame } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: "01",
    name: "Yuppis Premium Döner",
    tags: ["Bestseller", "100% Kalbs- & Rindfleisch", "Signature Sauce"],
    price: "8,50 €",
    desc: "Knuspriges, frisch gebackenes Sesambrot gefüllt mit unserem erstklassigen, hauchdünn geschnittenen Kalbs- und Rindfleisch. Verfeinert mit einem Bouquet aus frischen Wildkräutern, knackigem Rotkohl, Zwiebeln und vollendet mit unserer geheimen Haus-Knoblauchsauce.",
    spicy: true
  },
  {
    id: "02",
    name: "Kaiser Falafel im Kiezbrot",
    tags: ["Vegan / Vegetarisch", "Hausgemacht", "Glutenfrei Option"],
    price: "7,00 €",
    desc: "Vier goldbraune, täglich frisch gepresste Kichererbsentaler nach hauseigenem Rezept. Serviert in warmem Fladenbrot auf cremigem Hummusbett, knackigen Salatvariationen, sauren Gurken-Pickles und samtiger Sesam-Tahinisauce.",
    spicy: false
  },
  {
    id: "03",
    name: "Gegrillter Halloumi Spezial",
    tags: ["Vegetarisch", "Premium Qualität", "Frische Minze"],
    price: "7,50 €",
    desc: "Zart gegrillter zypriotischer Halloumi, begleitet von herrlich spritziger Granatapfel-Vinaigrette. Angerichtet mit frischen Minzblättern, saftigem Tomaten-Gurken-Schnitt und aromatischem Rucola in unserem Signature-Bread.",
    spicy: false
  },
  {
    id: "04",
    name: "Döner Box with Triple Fries",
    tags: ["Kiez Favorit", "Steak Meat", "Extra Crispy"],
    price: "9,00 €",
    desc: "Unsere beliebte Comfort-Box gefüllt bis obenhin mit krossem Premium-Dönerfleisch nach Wahl, serviert auf extra knusprigen, golden-braun frittierten Kartoffelspalten und abgerundet mit zwei hausgemachten Saucen.",
    spicy: true
  },
  {
    id: "05",
    name: "Premium Currywurst & Fritten",
    tags: ["Mundvoll Berliner Kult", "Klassiker"],
    price: "6,50 €",
    desc: "Erstklassige, gebratene Berliner Rindswurst nach Originalrezeptur. Übergossen mit unserer warmen, pikanten Currysauce aus eigener Manufaktur und serviert mit frisch zubereiteten, knusprigen Pommes Frites.",
    spicy: true
  }
];

interface MenuSectionProps {
  onOpenMenu?: () => void;
}

export function MenuSection({ onOpenMenu }: MenuSectionProps) {
  return (
    <section className="bg-white pb-36 pt-24 md:pt-32 lg:pt-40 px-4 md:px-8 lg:px-12 relative z-20 flex justify-center -mt-2">
      <div className="w-full max-w-[1600px] flex flex-col">
        
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b-[4px] border-black pb-12 mb-16 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-red-600 font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              <Flame className="w-4 h-4 animate-pulse fill-red-600" />
              Unsere Empfehlungen
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-black uppercase tracking-tighter leading-none">
              AUSZUG DER <br />
              <span className="text-red-600">SPEISEKARTE</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-tight text-black font-bold leading-normal">
              — Echtes Handwerk, keine industriellen Abkürzungen. Wir marinieren unser Fleisch täglich selbst und backen unsere Brote frisch im Ofen. Schau dir an, was die Community am meisten feiert.
            </p>
          </div>
        </div>

        {/* Vertical Editorial Menu List */}
        <div className="flex flex-col border-b-[4px] border-black">
          {MENU_ITEMS.map((item, index) => {
            const isLast = index === MENU_ITEMS.length - 1;
            
            return (
              <div 
                key={item.id}
                className={`relative group border-t-[4px] border-black py-10 md:py-14 transition-all duration-300 ${
                  isLast 
                    ? '' 
                    : 'hover:bg-neutral-50'
                }`}
              >
                {/* Visual Content Wrapper with Blur Filter for the last element */}
                <div 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start transition-all duration-[600ms] ease-out ${
                    isLast ? 'blur-[8px] opacity-25 select-none pointer-events-none' : ''
                  }`}
                >
                  
                  {/* Left Column: Number Marker */}
                  <div className="lg:col-span-1 flex lg:flex-col justify-between items-baseline lg:items-start">
                    <span className="font-mono text-lg md:text-xl font-bold text-red-600">
                      [{item.id}]
                    </span>
                    {item.spicy && (
                      <span className="bg-red-50 text-red-600 border border-red-200 font-mono text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded tracking-widest mt-1">
                        Scharf 🌶️
                      </span>
                    )}
                  </div>

                  {/* Middle Column Left: Name and Ingredient Tags */}
                  <div className="lg:col-span-5 flex flex-col">
                    <h3 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-black uppercase tracking-tight leading-none mb-4 group-hover:text-red-600 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-black text-[#F5F5F7] font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 border-[2px] border-black group-hover:bg-white group-hover:text-black transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column Right: Detailed Description */}
                  <div className="lg:col-span-4 lg:pt-2">
                    <p className="font-sans text-sm md:text-base text-black/75 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right Column: Giant Price Tag */}
                  <div className="lg:col-span-2 text-left lg:text-right flex lg:justify-end lg:pt-1">
                    <span className="font-mono text-3xl md:text-4xl font-extrabold text-black tracking-tight bg-neutral-100 lg:bg-transparent px-3 py-1.5 rounded lg:p-0">
                      {item.price}
                    </span>
                  </div>

                </div>

                {/* Overlaid Elegant Action Block for the Last Item */}
                {isLast && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-30">
                    <div className="max-w-[500px] flex flex-col items-center">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#000000]/60 font-bold mb-1">
                        Appetit auf mehr handgemachte Kiez-Snacks?
                      </span>
                      
                      <h4 className="font-display text-3xl md:text-4xl uppercase tracking-tighter text-black leading-none mb-6">
                        Die komplette Yuppis Karte
                      </h4>
                      
                      <button onClick={onOpenMenu} className="bg-black hover:bg-red-600 text-white font-mono uppercase tracking-widest text-xs md:text-sm font-bold py-4 px-8 border-[3px] border-black shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 cursor-pointer pointer-events-auto">
                        Ganze Karte ansehen
                        <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
