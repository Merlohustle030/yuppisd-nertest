import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenMenu?: () => void;
  onOpenOrder?: () => void;
}

export function Navbar({ onOpenMenu, onOpenOrder }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed z-50 left-0 right-0 flex justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? 'bottom-4 md:bottom-8 pointer-events-none px-4' 
          : 'bottom-0 pointer-events-auto px-0'
      }`}
    >
      <div 
        className={`w-full flex items-center justify-between pointer-events-auto transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom ${
          scrolled 
            ? 'max-w-[1100px] bg-black/85 backdrop-blur-xl px-6 md:px-10 py-2.5 rounded-full border border-white/10 shadow-[0_25px_50px_rgba(220,38,38,0.25)] ring-1 ring-white/10'
            : 'max-w-full bg-black border-t-[3px] border-red-600 px-4 md:px-8 py-3 rounded-none border-x-0 border-b-0 shadow-none ring-0'
        }`}
      >
        
        {/* Left Side: Logo & Menu Icon */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <span className={`font-display text-2xl md:text-3xl tracking-widest uppercase leading-none transition-colors duration-[800ms] ${scrolled ? 'text-white' : 'text-red-600'}`}>
            Yuppis
          </span>
          <span className={`hidden md:inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-[800ms] ${scrolled ? 'bg-red-500 shadow-[0_0_12px_rgba(220,38,38,0.8)]' : 'bg-red-600'}`}></span>
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[10px] md:text-xs font-bold leading-none translate-y-[-1px]">
            <button className={`px-2 py-1 transition-all ${scrolled ? 'text-black bg-white hover:bg-white/80 rounded-full' : 'text-black bg-white hover:bg-white/80'}`}>DE</button>
            <span className="text-white/30 font-light">/</span>
            <button className="text-white/50 hover:text-white transition-colors px-2 py-1">EN</button>
          </div>
        </div>

        {/* Center: Links (Hidden on mobile) */}
        <div className={`hidden lg:flex items-center gap-6 font-mono text-xs md:text-sm uppercase tracking-widest transition-colors duration-[800ms] ${scrolled ? 'text-white/90' : 'text-white/80'}`}>
          <button onClick={onOpenMenu} className="hover:text-red-500 transition-colors uppercase cursor-pointer">Menü</button>
          <button onClick={onOpenOrder} className="hover:text-red-500 transition-colors uppercase cursor-pointer">Bestellen</button>
          <a href="https://maps.google.com/?q=Oranienstraße+123,+10999+Berlin" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Standorte</a>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex items-center gap-4 shrink-0">
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`text-white hover:text-red-500 transition-colors ${scrolled ? 'mr-1' : ''} md:hidden`}>
            <Menu className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </button>
          <button onClick={onOpenOrder} className={`hidden md:block font-mono uppercase tracking-widest text-xs md:text-sm font-bold px-5 md:px-6 py-2 transition-all duration-500 ${
            scrolled
              ? 'bg-red-600 text-white rounded-full hover:bg-red-500 border border-transparent shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-105 active:scale-95'
              : 'bg-red-600 hover:bg-white hover:text-red-600 text-white border-2 border-red-600 hover:border-white'
          }`}>
            Jetzt Bestellen
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-2 md:hidden">
          <div className="mx-4 bg-black border border-white/20 p-4 flex flex-col gap-4 font-mono font-bold uppercase tracking-widest text-sm text-center border-t-4 border-t-red-600">
            <button onClick={() => { onOpenMenu?.(); setMobileOpen(false); }} className="text-white hover:text-red-500 py-2">Menü</button>
            <button onClick={() => { onOpenOrder?.(); setMobileOpen(false); }} className="text-white hover:text-red-500 py-2">Bestellen</button>
            <a href="https://maps.google.com/?q=Oranienstraße+123,+10999+Berlin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 py-2" onClick={() => setMobileOpen(false)}>Standorte</a>
          </div>
        </div>
      )}
    </div>
  );
}
