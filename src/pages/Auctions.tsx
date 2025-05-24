
import React from 'react';
import Header from '@/components/Header';
import AuctionListings from '@/components/AuctionListings';
import SearchBar from '@/components/SearchBar';

const Auctions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-property-50 to-auction-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-property-600 to-auction-600 bg-clip-text text-transparent">
              Property Auctions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Bid on premium properties in real-time auctions. Find your perfect home or investment opportunity.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
      
      <AuctionListings />
    </div>
  );
};

export default Auctions;
