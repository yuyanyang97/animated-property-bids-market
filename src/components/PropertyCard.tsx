
import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Gavel } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AuctionTimer from './AuctionTimer';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currentBid?: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  isAuction: boolean;
  auctionEndTime?: Date;
  status: 'live' | 'upcoming' | 'sold';
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  currentBid,
  bedrooms,
  bathrooms,
  area,
  image,
  isAuction,
  auctionEndTime,
  status,
}) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
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
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <CardContent className="p-6">
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
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <AuctionTimer endTime={auctionEndTime} />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
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
          <Button 
            className={`${
              isAuction 
                ? 'bg-auction-600 hover:bg-auction-700' 
                : 'bg-property-600 hover:bg-property-700'
            } transition-all duration-300 hover:scale-105`}
          >
            {isAuction ? 'Place Bid' : 'View Details'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
