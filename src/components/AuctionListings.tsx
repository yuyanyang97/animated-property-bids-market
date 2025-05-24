
import React from 'react';
import PropertyCard from './PropertyCard';

const AuctionListings = () => {
  // Sample data for properties
  const properties = [
    {
      id: '1',
      title: 'Modern Downtown Penthouse',
      location: 'Manhattan, New York',
      price: 2500000,
      currentBid: 2100000,
      bedrooms: 3,
      bathrooms: 2,
      area: 2500,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isAuction: true,
      auctionEndTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      status: 'live' as const,
    },
    {
      id: '2',
      title: 'Luxury Beachfront Villa',
      location: 'Malibu, California',
      price: 5200000,
      currentBid: 4800000,
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isAuction: true,
      auctionEndTime: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours from now
      status: 'live' as const,
    },
    {
      id: '3',
      title: 'Historic Brownstone',
      location: 'Brooklyn, New York',
      price: 1800000,
      currentBid: 1650000,
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isAuction: true,
      auctionEndTime: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
      status: 'live' as const,
    },
    {
      id: '4',
      title: 'Contemporary Glass House',
      location: 'Austin, Texas',
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 2800,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isAuction: false,
      status: 'live' as const,
    },
    {
      id: '5',
      title: 'Mountain Retreat Cabin',
      location: 'Aspen, Colorado',
      price: 3200000,
      currentBid: 2950000,
      bedrooms: 4,
      bathrooms: 3,
      area: 3500,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isAuction: true,
      auctionEndTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      status: 'upcoming' as const,
    },
    {
      id: '6',
      title: 'Urban Loft Apartment',
      location: 'Chicago, Illinois',
      price: 850000,
      currentBid: 820000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isAuction: true,
      auctionEndTime: new Date(Date.now() + 45 * 60 * 1000), // 45 minutes from now
      status: 'live' as const,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-property-600 to-auction-600 bg-clip-text text-transparent">
            Featured Auction Properties
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover exclusive properties available through our live auction platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionListings;
