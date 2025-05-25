
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RecentProperties from '@/components/RecentProperties';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <RecentProperties />
      <Footer />
    </div>
  );
};

export default Index;
