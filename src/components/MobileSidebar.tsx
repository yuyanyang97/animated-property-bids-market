
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, Home, Gavel, Plus, Info, LogIn, UserPlus, User, Heart } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-left">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-property-600 dark:text-property-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-property-600 to-property-800 bg-clip-text text-transparent">
                PropertyAuction
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Navigation
            </h3>
            <div className="space-y-1">
              <Link to="/" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/auctions" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <Gavel className="h-4 w-4" />
                <span>Auctions</span>
              </Link>
              <Link to="/new-project" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <Plus className="h-4 w-4" />
                <span>New Project</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
            </div>
          </div>

          <Separator />

          {/* Account Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Account
            </h3>
            <div className="space-y-1">
              <Link to="/user-account" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <User className="h-4 w-4" />
                <span>My Account</span>
              </Link>
              <div className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <Heart className="h-4 w-4" />
                <span>Saved Properties</span>
              </div>
              <Link to="/login" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
              <Link to="/register" className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-accent transition-colors">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>

          <Separator />

          {/* Settings at bottom */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Settings
            </h3>
            <div className="flex items-center justify-between p-2">
              <span className="text-sm">Dark Mode</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
