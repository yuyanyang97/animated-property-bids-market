
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentProperties = () => {
  const newProjects = [
    {
      id: 1,
      title: "Luxury Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$2,500,000",
      image: "/placeholder.svg",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,500 sq ft",
      status: "New",
      date: "Added today"
    },
    {
      id: 2,
      title: "Modern Suburban Villa",
      location: "Beverly Hills, CA",
      price: "$1,850,000",
      image: "/placeholder.svg",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      status: "New",
      date: "Added yesterday"
    },
    {
      id: 3,
      title: "Waterfront Condo",
      location: "Miami Beach, FL",
      price: "$950,000",
      image: "/placeholder.svg",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,800 sq ft",
      status: "New",
      date: "Added 2 days ago"
    }
  ];

  const auctionProperties = [
    {
      id: 1,
      title: "Historic Mansion Estate",
      location: "San Francisco, CA",
      currentBid: "$850,000",
      image: "/placeholder.svg",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500 sq ft",
      timeLeft: "2d 14h 32m",
      bids: 23
    },
    {
      id: 2,
      title: "Modern Loft Apartment",
      location: "Chicago, IL",
      currentBid: "$420,000",
      image: "/placeholder.svg",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,200 sq ft",
      timeLeft: "1d 8h 15m",
      bids: 15
    },
    {
      id: 3,
      title: "Coastal Beach House",
      location: "Malibu, CA",
      currentBid: "$1,200,000",
      image: "/placeholder.svg",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
      timeLeft: "3d 2h 45m",
      bids: 31
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-background to-property-50/20 dark:to-gray-900/20">
      <div className="container mx-auto px-4">
        {/* New Projects Section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Properties</h2>
              <p className="text-muted-foreground">Discover our newest property listings</p>
            </div>
            <Link to="/new-project">
              <Button variant="outline" className="gap-2 mt-4 sm:mt-0">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProjects.map((property) => (
              <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
                    {property.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.date}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                    <span>{property.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-property-600">{property.price}</span>
                    <Button size="sm" className="bg-property-600 hover:bg-property-700">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Auction Properties Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Auctions</h2>
              <p className="text-muted-foreground">Bid on exclusive properties ending soon</p>
            </div>
            <Link to="/auctions">
              <Button variant="outline" className="gap-2 mt-4 sm:mt-0">
                View All Auctions <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auctionProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-auction-500 hover:bg-auction-600">
                    Live Auction
                  </Badge>
                  <div className="absolute top-3 right-3 bg-black/75 text-white px-2 py-1 rounded text-sm">
                    {property.bids} bids
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center text-auction-600 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{property.timeLeft} left</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                    <span>{property.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Bid</p>
                      <span className="text-2xl font-bold text-auction-600">{property.currentBid}</span>
                    </div>
                    <Button size="sm" className="bg-auction-600 hover:bg-auction-700">
                      Place Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProperties;
