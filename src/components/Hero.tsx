export function Hero() {
  return (
    <div className="relative w-full h-full flex flex-col bg-black overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('https://i.ibb.co/mVS6rqXD/yuppiswide1.png')" }}
      />
      
      {/* Soft Vignette & Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-[1800px] mx-auto px-4">
        
        <div className="flex flex-col items-center justify-center w-full relative">
          
          {/* Halal Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[80%] md:-translate-y-full md:left-auto md:right-[15%] md:translate-x-0 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex flex-col items-center justify-center -rotate-12 border-[5px] border-[#009e4f] z-20 shadow-[0_0_30px_rgba(0,158,79,0.3)]">
            <span className="text-[#009e4f] font-bold text-2xl md:text-4xl leading-none font-sans drop-shadow-sm pb-1">
              حلال
            </span>
            <span className="font-display text-[#009e4f] text-[10px] md:text-sm uppercase tracking-widest text-center leading-none">
              Halal
            </span>
          </div>

          {/* Main Massive Text */}
          <h1 className="w-full text-center font-display uppercase leading-[0.8] tracking-tighter select-none text-[22vw] md:text-[20vw]">
            <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]">YUP</span>
            <span className="text-white relative">
              PIS
            </span>
          </h1>
          
        </div>

        {/* Categories from the Sign */}
        <div className="mt-8 md:mt-12 lg:mt-16 border-y-2 border-red-600/50 py-4 w-full max-w-5xl">
          <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-2 text-white/90 uppercase text-xs sm:text-sm md:text-xl lg:text-2xl font-mono font-bold tracking-widest">
            <span className="hover:text-red-500 transition-colors cursor-default">Falafel</span>
            <span className="text-red-600">-</span>
            <span className="hover:text-red-500 transition-colors cursor-default">Halloumi</span>
            <span className="text-red-600">-</span>
            <span className="hover:text-red-500 transition-colors cursor-default">Schnitzel</span>
            <span className="text-red-600">-</span>
            <span className="hover:text-red-500 transition-colors cursor-default">Currywurst</span>
          </div>
        </div>

      </div>
    </div>
  );
}
