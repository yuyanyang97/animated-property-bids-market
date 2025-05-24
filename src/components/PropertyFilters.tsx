
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Home, Building, MapPin, DollarSign, Bed, Bath, Square, Search } from 'lucide-react';

const PropertyFilters = () => {
  const [searchText, setSearchText] = useState('');
  const [priceRange, setPriceRange] = useState([100000, 5000000]);
  const [areaRange, setAreaRange] = useState([1000, 5000]);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          Property Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Properties
          </label>
          <Input
            placeholder="Search by location, keywords..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Building className="h-4 w-4" />
            Property Type
          </label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
          </label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={10000000}
            min={50000}
            step={50000}
            className="w-full"
          />
        </div>

        {/* Area Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium flex items-center gap-2">
            <Square className="h-4 w-4" />
            Area (sqft): {areaRange[0]} - {areaRange[1]}
          </label>
          <Slider
            value={areaRange}
            onValueChange={setAreaRange}
            max={10000}
            min={500}
            step={100}
            className="w-full"
          />
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Bed className="h-4 w-4" />
            Bedrooms
          </label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4">4 Bedrooms</SelectItem>
              <SelectItem value="5">5+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Bath className="h-4 w-4" />
            Bathrooms
          </label>
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Select bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bathroom</SelectItem>
              <SelectItem value="2">2 Bathrooms</SelectItem>
              <SelectItem value="3">3 Bathrooms</SelectItem>
              <SelectItem value="4">4+ Bathrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full bg-property-600 hover:bg-property-700">
          Apply Filters
        </Button>

        {/* Clear Filters Button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setSearchText('');
            setPriceRange([100000, 5000000]);
            setAreaRange([1000, 5000]);
            setBedrooms('');
            setBathrooms('');
            setPropertyType('');
          }}
        >
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyFilters;
