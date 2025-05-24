
import React from 'react';
import { Shield, Phone, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Government License Banner */}
        <div className="bg-gradient-to-r from-property-600/20 to-auction-600/20 rounded-lg p-6 mb-8 border border-property-300/20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="h-8 w-8 text-property-400" />
            <Award className="h-8 w-8 text-auction-400" />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Government Verified & Licensed</h3>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            PropertyAuction is a fully licensed and government-verified property agency. 
            We operate under strict regulatory oversight to ensure complete transparency, 
            legal compliance, and protection for all our clients. Your property transactions 
            are secured by official government backing and insurance coverage.
          </p>
          <div className="flex justify-center mt-4">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              License #: REA-2024-001234
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PropertyAuction</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property through innovative auction technology and government-backed security.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Shield className="h-4 w-4" />
              <span>Licensed & Insured</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/auctions" className="hover:text-white transition-colors">Auctions</a></li>
              <li><a href="/new-project" className="hover:text-white transition-colors">New Projects</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Property Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@propertyauction.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PropertyAuction. All rights reserved. Licensed Real Estate Agency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
