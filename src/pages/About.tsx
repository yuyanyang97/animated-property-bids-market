
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Award, Users, Building, CheckCircle, Star, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Government Licensed",
      description: "Fully verified and licensed by government authorities with comprehensive insurance coverage."
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Award-winning property services with over 15 years of experience in real estate auctions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional real estate agents and auction specialists dedicated to your success."
    },
    {
      icon: Building,
      title: "Premium Properties",
      description: "Curated selection of high-quality residential and commercial properties."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Properties Sold" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "We believe in complete transparency in all our dealings, providing clear information about every property and auction process."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your investments are protected by our government license, insurance coverage, and secure transaction processes."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our clients' satisfaction and success are our top priorities. We go above and beyond to exceed expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-property-50 to-auction-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-property-600 to-auction-600 bg-clip-text text-transparent">
              About PropertyAuction
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Your trusted, government-licensed partner in property investment and real estate auctions. 
              We combine cutting-edge technology with regulatory compliance to deliver exceptional results.
            </p>
            <div className="flex items-center justify-center gap-4 text-green-600">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">Licensed & Regulated</span>
              <Award className="h-6 w-6" />
              <span className="font-semibold">Industry Leader</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-property-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PropertyAuction?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We provide a secure, transparent, and efficient platform for all your property needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-property-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-r from-property-50 to-auction-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              To revolutionize the property market by providing a trusted, government-backed platform 
              that connects buyers and sellers through innovative auction technology. We are committed 
              to transparency, security, and exceptional service in every transaction.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold">Government Licensed Agency</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                License #REA-2024-001234 | Fully Insured & Regulated
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <value.icon className="h-16 w-16 text-auction-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-property-600 to-auction-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who trust PropertyAuction for their real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/auctions" 
              className="bg-white text-property-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Auctions
            </a>
            <a 
              href="/new-project" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-property-600 transition-colors"
            >
              View New Projects
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
