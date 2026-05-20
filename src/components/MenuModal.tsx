import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

const FULL_MENU = [
  {
    category: "DÖNER & CO",
    items: [
      { name: "Yuppis Premium Döner", price: "8,50 €", desc: "Kalbs- & Rindfleisch, frisches Brot, Signature Sauce" },
      { name: "Döner Teller", price: "12,90 €", desc: "Premium Fleisch, Pommes oder Reis, frischer Salat, Tzatziki" },
      { name: "Döner Box", price: "9,00 €", desc: "Premium Fleisch, knusprige Fries, zwei Saucen" },
      { name: "Dürüm Döner", price: "9,50 €", desc: "Frisch gebackenes Fladenbrot, eingerollt mit Fleisch und Salat" },
      { name: "Yuppis Spezial Sandwich", price: "10,50 €", desc: "Beef, gegrilltes Gemüse, Halloumi, Kräuter-Sauce" }
    ]
  },
  {
    category: "VEGGIE & VEGAN",
    items: [
      { name: "Kaiser Falafel im Kiezbrot", price: "7,00 €", desc: "4 Falafel, Hummus, Salat, Sesam-Tahinisauce (Vegan)" },
      { name: "Gegrillter Halloumi Spezial", price: "7,50 €", desc: "Halloumi, Granatapfel-Vinaigrette, Rucola (Vegetarisch)" },
      { name: "Vegan Dürüm", price: "8,50 €", desc: "Plant-based Kebab, frisches Gemüse, vegane Knoblauchsauce" },
      { name: "Falafel Teller", price: "11,50 €", desc: "6 Falafel, Hummus, gemischter Salat, warmes Brot" }
    ]
  },
  {
    category: "BERLIN CLASSICS",
    items: [
      { name: "Premium Currywurst & Fritten", price: "6,50 €", desc: "Berliner Rindswurst, pikante Currysauce, knusprige Pommes" },
      { name: "Pommes Groß", price: "4,50 €", desc: "Knusprige dicke Fritten mit Ketchup oder Mayo" },
      { name: "Süßkartoffel Pommes", price: "5,50 €", desc: "Mit unserer Signature Trüffel-Mayo" }
    ]
  },
  {
    category: "DRINKS",
    items: [
      { name: "Ayran", price: "2,00 €", desc: "Klassisch, kühl & erfrischend" },
      { name: "Club Mate", price: "3,00 €", desc: "0.5l Berliner Lebenselixier" },
      { name: "Fritz Kola / Limo", price: "3,00 €", desc: "Verschiedene Sorten (0.33l)" },
      { name: "Spezi Energy", price: "3,50 €", desc: "Koffeinhaltige Limonade" }
    ]
  }
];

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-12 md:top-24 bg-white border-t-[8px] border-black z-[101] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Header Sticky */}
            <div className="flex justify-between items-center p-6 md:p-10 border-b-[4px] border-black shrink-0 bg-white shadow-xl z-20">
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-black uppercase tracking-tighter leading-none">
                SPEISE<span className="text-red-600">KARTE.</span>
              </h2>
              <button 
                onClick={onClose}
                className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center border-[3px] border-black bg-black text-white hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-16 custom-scrollbar bg-white relative">
              <div className="max-w-5xl mx-auto space-y-20 pb-20">
                
                {FULL_MENU.map((section, sId) => (
                  <div key={sId} className="flex flex-col relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                      <h3 className="font-display text-3xl md:text-5xl text-black uppercase tracking-tighter">
                        {section.category}
                      </h3>
                      <div className="h-[4px] flex-grow bg-black mt-2" />
                    </div>
                    
                    <div className="flex flex-col gap-8 md:gap-10">
                      {section.items.map((item, iId) => (
                        <div key={iId} className="flex justify-between items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                          <div className="flex flex-col flex-grow max-w-2xl">
                            <h4 className="font-display text-2xl md:text-4xl text-black uppercase tracking-tighter mb-2 group-hover:text-red-600 transition-colors">
                              {item.name}
                            </h4>
                            <p className="font-mono text-sm md:text-base text-black/60 font-medium">
                              {item.desc}
                            </p>
                          </div>
                          
                          <div className="shrink-0 font-display text-2xl md:text-4xl text-red-600 bg-red-50 px-3 md:px-4 py-1 md:py-2 border-[2px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
