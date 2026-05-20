import { MapPin, Clock, ArrowUpRight, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 md:pt-32 pb-32 md:pb-40 px-4 md:px-8 lg:px-12 relative z-20">
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Brand & Address */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-6">
            YUPPIS<br />
            <span className="text-red-600">KEBAP</span>
          </h2>
          
          <p className="font-mono text-sm md:text-base text-white/60 leading-relaxed mb-10 max-w-sm">
            Echtes Handwerk, Premium Fleisch und selbstgebackenes Brot. Der authentische Geschmack der Berliner Straßenkultur.
          </p>

          <a 
             href="https://maps.google.com/?q=Oranienstraße+123,+10999+Berlin" 
             target="_blank" 
             rel="noopener noreferrer"
             className="group flex flex-col items-start gap-4 p-6 border-[3px] border-white/10 hover:border-red-600 transition-colors duration-300 max-w-sm bg-[#0a0a0a]"
          >
            <div className="flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-[#888] text-xs">
              <MapPin className="w-4 h-4 text-red-500 group-hover:animate-bounce" />
              Location
            </div>
            <p className="font-sans text-xl md:text-2xl font-medium leading-tight group-hover:text-red-500 transition-colors">
              Oranienstraße 123<br />
              10999 Berlin
            </p>
            <div className="font-mono text-xs font-bold bg-white text-black px-4 py-2 mt-2 uppercase tracking-widest flex items-center gap-2 group-hover:bg-red-600 group-hover:text-white transition-colors cursor-pointer">
              Route öffnen
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Opening Hours & Links */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 pt-2 md:pt-4">
          
          {/* Hours */}
          <div className="flex flex-col">
             <div className="flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-white/50 text-xs mb-8 border-b-[2px] border-white/10 pb-4">
              <Clock className="w-4 h-4 text-red-500" />
              Öffnungszeiten
            </div>
            
            <ul className="flex flex-col gap-5 font-sans text-base md:text-lg">
              <li className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-white/60">Mo - Do</span>
                <span className="font-mono font-bold">11:00 - 02:00</span>
              </li>
              <li className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-white/60">Freitag</span>
                <span className="font-mono font-bold text-red-500">11:00 - 05:00</span>
              </li>
              <li className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-white/60">Samstag</span>
                <span className="font-mono font-bold text-red-500">12:00 - 05:00</span>
              </li>
              <li className="flex justify-between items-end pb-2">
                <span className="text-white/60">Sonntag</span>
                <span className="font-mono font-bold">12:00 - 00:00</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col">
             <div className="flex items-center gap-3 font-mono font-bold uppercase tracking-widest text-white/50 text-xs mb-8 border-b-[2px] border-white/10 pb-4">
              <Instagram className="w-4 h-4 text-red-500" />
              Socials
            </div>
            
            <ul className="flex flex-col gap-6 font-mono uppercase tracking-widest text-sm font-bold">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors flex items-center justify-between group text-white/80">
                  Instagram
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-500" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors flex items-center justify-between group text-white/80">
                  TikTok
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-500" />
                </a>
              </li>
              <li>
                <a href="mailto:hallo@yuppis-kebab.com" className="hover:text-red-500 transition-colors flex items-center justify-between group text-white/80">
                  Kontakt
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-16 text-white/30 font-mono text-[10px] md:text-xs uppercase tracking-widest border-t border-white/10 pt-6">
        <span>© {new Date().getFullYear()} YUPPIS KEBAP BERLIN</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
