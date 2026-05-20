import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-x-4 bottom-4 md:inset-x-auto md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-auto md:w-full max-w-md bg-white border-[4px] border-black z-[101] shadow-[12px_12px_0_0_rgba(220,38,38,1)] flex flex-col p-8"
          >
            {/* Header Sticky */}
            <div className="flex justify-between items-start mb-8">
              <h2 className="font-display text-4xl md:text-5xl text-black uppercase tracking-tighter leading-none">
                JETZT<br/><span className="text-red-600">BESTELLEN.</span>
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex justify-center items-center border-[2px] border-black text-black hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>

            {/* Delivery Links */}
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.lieferando.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#FF8000] hover:bg-[#FF9933] text-white border-[3px] border-black p-6 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <span className="font-display text-3xl uppercase tracking-tighter group-hover:scale-105 transition-transform">Lieferando</span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1">Hier bestellen</span>
              </a>

              <a 
                href="https://wolt.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#00C2E8] hover:bg-[#33CEEB] text-white border-[3px] border-black p-6 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <span className="font-display text-3xl uppercase tracking-tighter group-hover:scale-105 transition-transform">Wolt</span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1">Hier bestellen</span>
              </a>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
