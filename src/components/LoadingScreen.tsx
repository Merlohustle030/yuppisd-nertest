import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after a delay to allow page rendering/loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-black border-[12px] md:border-[20px] border-red-600 flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          {/* Grain Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

          {/* Clean Type Logo Loader */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h1 className="font-display text-7xl md:text-9xl text-white uppercase tracking-tighter leading-none flex overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] inline-block"
              >
                YUP
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                PIS
              </motion.span>
            </h1>
            
            <div className="w-full max-w-[200px] h-[3px] bg-white/20 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                className="w-full h-full bg-red-600"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="font-mono text-xs md:text-sm text-white/50 uppercase tracking-widest font-bold"
            >
              Lädt Erfahrung...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
