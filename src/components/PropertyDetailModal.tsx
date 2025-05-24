
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Map } from 'lucide-react';

interface PropertyDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    availableSlots?: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    gallery?: string[];
    coordinates?: { lat: number; lng: number };
  };
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  isOpen,
  onClose,
  property,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const gallery = property.gallery || [property.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{property.title}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gallery Section */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={gallery[currentImageIndex]}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              {gallery.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail gallery */}
            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded cursor-pointer transition-opacity ${
                      index === currentImageIndex ? 'opacity-100 ring-2 ring-property-600' : 'opacity-60'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Price</p>
                <p className="text-3xl font-bold text-property-600 dark:text-property-400">
                  ${property.price.toLocaleString()}
                </p>
              </div>
              {property.availableSlots && (
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {property.availableSlots} slots available
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span>{property.area} sq ft</span>
              </div>
            </div>

            {/* Map Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowMap(!showMap)}
              className="w-full"
            >
              <Map className="h-4 w-4 mr-2" />
              {showMap ? 'Hide Map' : 'View on Map'}
            </Button>

            {/* Simple Map Placeholder */}
            {showMap && (
              <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">Map view</p>
                  <p className="text-sm text-gray-500">
                    {property.coordinates ? 
                      `${property.coordinates.lat}, ${property.coordinates.lng}` : 
                      property.location
                    }
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-property-600 hover:bg-property-700">
                Contact Agent
              </Button>
              <Button variant="outline" className="flex-1">
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailModal;
