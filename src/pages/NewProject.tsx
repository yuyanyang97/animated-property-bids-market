
import React from 'react';
import Header from '@/components/Header';
import AuctionListings from '@/components/AuctionListings';
import SearchBar from '@/components/SearchBar';
import PropertyFilters from '@/components/PropertyFilters';

const NewProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-property-50 to-auction-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-property-600 to-auction-600 bg-clip-text text-transparent">
              New Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover exciting new property developments and investment opportunities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
      
      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <PropertyFilters />
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="lg:w-3/4">
            <AuctionListings showBidButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
