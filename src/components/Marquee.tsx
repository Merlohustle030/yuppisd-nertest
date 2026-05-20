import { motion } from 'motion/react';

export function Marquee() {
  const content = (
    <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
      <span className="text-[#E04B26] font-mono text-sm md:text-base font-bold whitespace-nowrap">FUTURES ▼ -6.7%</span>
      <span className="text-[#20B038] font-mono text-sm md:text-base font-bold whitespace-nowrap">INFLATION ▲ +2.9%</span>
      <span className="text-red-600 font-mono text-sm md:text-base font-bold flex items-center gap-2 whitespace-nowrap">
        <span className="font-display italic tracking-[0.1em] text-lg leading-none">YUPPIS</span> PREISE +0.0%
      </span>
      <span className="text-black font-mono text-sm md:text-base tracking-tight whitespace-nowrap">MÄRKTE ÄNDERN SICH. UNSERE PREISE NICHT.</span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-[#FDFBF7] py-2 lg:py-3 border-b-2 border-black/10 select-none shadow-sm">
      <motion.div
        className="flex w-max"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        <div className="flex shrink-0">
          {content}
        </div>
        <div className="flex shrink-0">
          {content}
        </div>
      </motion.div>
    </div>
  );
}
