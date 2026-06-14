import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Results } from '@/components/sections/Results';
import { Benefits } from '@/components/sections/Benefits';
import { Masterclass } from '@/components/sections/Masterclass';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FollowUs, Footer } from '@/components/sections/FollowUs';
import { LenisProvider } from '@/lib/lenis-provider';

export function LandingPage() {
  return (
    <LenisProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Results />
          <Benefits />
          <Masterclass />
          <Pricing />
          <Testimonials />
          <FAQ />
          <FollowUs />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
