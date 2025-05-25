
import React from 'react';
import { Home, Heart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-property-600 dark:text-property-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-property-600 to-property-800 bg-clip-text text-transparent">
              PropertyAuction
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-property-600 transition-colors">
            Home
          </Link>
          <Link to="/auctions" className="text-sm font-medium hover:text-property-600 transition-colors">
            Auctions
          </Link>
          <Link to="/new-project" className="text-sm font-medium hover:text-property-600 transition-colors">
            New Project
          </Link>
          <a href="#" className="text-sm font-medium hover:text-property-600 transition-colors">
            Sell
          </a>
          <Link to="/about" className="text-sm font-medium hover:text-property-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Heart className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="hidden md:flex">
              Sign Up
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
