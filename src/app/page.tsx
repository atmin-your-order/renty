import React from 'react';
import { Navbar } from '@/components/shared/navbar';
import { HeroSection } from '@/components/sections/hero';
import { AnalyticsSection } from '@/components/sections/analytics';
import { FlightBoardSection } from '@/components/sections/flight-board';
import { FeaturesSection } from '@/components/sections/features';
import { DestinationsSection } from '@/components/sections/destinations';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AnalyticsSection />
        <FlightBoardSection />
        <FeaturesSection />
        <DestinationsSection />
      </main>
      <Footer />
    </>
  );
}
