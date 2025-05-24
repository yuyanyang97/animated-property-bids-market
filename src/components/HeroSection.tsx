
import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your Dream
            <span className="block bg-gradient-to-r from-property-400 to-auction-400 bg-clip-text text-transparent">
              Property Today
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover exclusive properties through our innovative auction platform and traditional sales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-property-600 hover:bg-property-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Browse Auctions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg transition-all duration-300"
            >
              View Properties
            </Button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-5xl mx-auto mb-12">
          <SearchBar />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center animate-float">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-property-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">$2.5B+</h3>
            <p className="text-gray-300">Properties Sold</p>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-auction-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50K+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-property-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
