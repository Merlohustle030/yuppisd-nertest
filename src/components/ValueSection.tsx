import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const VALUES = [
  {
    id: "01",
    title: "Hausgemachtes Brot",
    img: "https://i.ibb.co/tScvsVV/Professional-food-photography-of-a-202605201701.jpg"
  },
  {
    id: "02",
    title: "Signature Soßen",
    img: "https://i.ibb.co/JhFZNPZ/Professional-food-photography-of-so-en-202605201704.jpg"
  },
  {
    id: "03",
    title: "100% Halal Fleisch",
    img: "https://i.ibb.co/yBM9qV2d/Professional-food-photography-of-d-ner-202605201707.jpg"
  },
  {
    id: "04",
    title: "Lokaler Kiez Vibe",
    img: "https://i.ibb.co/Rkw2ZHMP/yuppiswide3.png"
  }
];

export function ValueSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal shift: 4 panels, so we slide up to -75% of container width
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  // Use a beautifully smooth spring to lock movement with natural deceleration feedback
  const x = useSpring(xTransform, {
    damping: 24,
    stiffness: 85,
    mass: 0.8,
    restDelta: 0.001
  });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050505] -mt-1">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Progress Bar at bottom */}
        <div className="absolute bottom-10 left-8 right-8 md:left-16 md:right-16 h-[2px] bg-white/10 z-50 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-red-600 rounded-full origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        <motion.div style={{ x }} className="flex w-[400vw] h-full relative z-10">
          {VALUES.map((val) => (
            <div key={val.id} className="w-screen h-full flex-shrink-0 flex flex-col items-center justify-center relative p-6 md:p-16">
              
              <div className="max-w-[1300px] w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 px-4 md:px-12">
                
                {/* Left Side: Editorial ID + Big Clean Title */}
                <div className="flex flex-col text-left max-w-2xl">
                  <h3 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white uppercase tracking-tighter leading-[0.9]">
                    {val.title}
                  </h3>
                </div>

                {/* Right Side: Elegant Compact Image Block */}
                <div className="shrink-0 flex justify-center items-center">
                   <div className="w-[260px] md:w-[360px] lg:w-[440px] aspect-square relative overflow-hidden bg-white/5 rounded-2xl shadow-2xl border border-white/5">
                     <img 
                        src={val.img} 
                        alt={val.title} 
                        className="absolute w-full h-full object-cover opacity-90 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105" 
                        loading="lazy"
                      />
                      {/* Subtlest red accent bar top center */}
                      <div className="absolute top-0 left-1/4 right-1/4 h-[3px] bg-red-600 rounded-full opacity-60" />
                   </div>
                </div>

              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
