import { useState } from 'react';
import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Culture } from './components/Culture';
import { MenuSection } from './components/MenuSection';
import { ValueSection } from './components/ValueSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <main className="relative bg-black font-sans pb-20 md:pb-24 overflow-clip">
      <div className="relative z-50">
        <Marquee />
      </div>
      <div className="h-[calc(100vh-48px)] relative">
        <Hero />
      </div>
      <div className="relative z-40 -mt-10 md:-mt-16">
        <Culture />
        <MenuSection onOpenMenu={() => setIsMenuOpen(true)} />
        <ValueSection />
        <ReviewsSection />
        <Footer />
      </div>
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} onOpenOrder={() => setIsOrderModalOpen(true)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </main>
  );
}
