
import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Gavel } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AuctionTimer from './AuctionTimer';
import PropertyDetailModal from './PropertyDetailModal';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currentBid?: number;
  availableSlots?: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  gallery?: string[];
  coordinates?: { lat: number; lng: number };
  isAuction: boolean;
  auctionEndTime?: Date;
  status: 'live' | 'upcoming' | 'sold';
  showBidButton?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  currentBid,
  availableSlots,
  bedrooms,
  bathrooms,
  area,
  image,
  gallery,
  coordinates,
  isAuction,
  auctionEndTime,
  status,
  showBidButton = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Card 
        className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer flex flex-col h-full"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {isAuction && (
              <Badge variant="destructive" className="animate-pulse-glow">
                <Gavel className="h-3 w-3 mr-1" />
                {status === 'live' ? 'Live Auction' : status === 'upcoming' ? 'Upcoming' : 'Sold'}
              </Badge>
            )}
            {!isAuction && availableSlots && (
              <Badge variant="secondary">
                {availableSlots} slots available
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              // Handle favorite logic here
            }}
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 group-hover:text-property-600 transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span className="text-sm">{bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span className="text-sm">{bathrooms}</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span className="text-sm">{area} sq ft</span>
              </div>
            </div>
          </div>

          {isAuction && auctionEndTime && status === 'live' && (
            <div className="mb-4 w-full">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg w-full">
                <AuctionTimer endTime={auctionEndTime} className="w-full" />
              </div>
            </div>
          )}

          <div className="mt-auto flex items-end justify-between">
            <div className="flex-grow">
              {isAuction ? (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Current Bid</p>
                  <p className="text-2xl font-bold text-auction-600 dark:text-auction-400">
                    ${currentBid?.toLocaleString() || 'No bids yet'}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
                  <p className="text-2xl font-bold text-property-600 dark:text-property-400">
                    ${price.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
            <div className="ml-4">
              {(isAuction && showBidButton) && (
                <Button 
                  className="bg-auction-600 hover:bg-auction-700 transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick();
                  }}
                >
                  Place Bid
                </Button>
              )}
              {!isAuction && (
                <Button 
                  className="bg-property-600 hover:bg-property-700 transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick();
                  }}
                >
                  View Details
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <PropertyDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={{
          id,
          title,
          location,
          price,
          availableSlots,
          bedrooms,
          bathrooms,
          area,
          image,
          gallery,
          coordinates,
        }}
      />
    </>
  );
};

export default PropertyCard;
