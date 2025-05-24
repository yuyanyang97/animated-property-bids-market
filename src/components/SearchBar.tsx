
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  return (
    <Card className="p-6 shadow-lg animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search properties, neighborhoods, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full sm:w-[200px] h-12">
              <MapPin className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="houston">Houston</SelectItem>
              <SelectItem value="phoenix">Phoenix</SelectItem>
              <SelectItem value="philadelphia">Philadelphia</SelectItem>
              <SelectItem value="san-antonio">San Antonio</SelectItem>
              <SelectItem value="san-diego">San Diego</SelectItem>
              <SelectItem value="dallas">Dallas</SelectItem>
              <SelectItem value="austin">Austin</SelectItem>
            </SelectContent>
          </Select>

          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-full sm:w-[180px] h-12">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Auction Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="next-week">Next Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="next-month">Next Month</SelectItem>
            </SelectContent>
          </Select>

          <Button size="lg" className="h-12 px-8 bg-property-600 hover:bg-property-700 transition-all duration-300 hover:scale-105">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
          
          <Button variant="outline" size="lg" className="h-12 px-4">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SearchBar;
