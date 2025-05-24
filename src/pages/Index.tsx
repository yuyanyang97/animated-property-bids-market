
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AuctionListings from '@/components/AuctionListings';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AuctionListings showBidButton={false} />
      <Footer />
    </div>
  );
};

export default Index;
