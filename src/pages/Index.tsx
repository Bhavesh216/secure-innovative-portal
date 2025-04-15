
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, Shield, Headset, Award } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-microsoft-blue" />,
      title: 'Microsoft Security Solutions',
      description:
        'Comprehensive security solutions to protect your business data and infrastructure.',
    },
    {
      icon: <Headset className="h-10 w-10 text-microsoft-blue" />,
      title: 'Microsoft 365 Suite',
      description:
        'Boost productivity with the complete suite of Microsoft 365 applications and services.',
    },
    {
      icon: <Award className="h-10 w-10 text-microsoft-blue" />,
      title: 'Licensing Solutions',
      description:
        'Expert advice on Microsoft licensing options tailored to your business needs.',
    },
  ];

  const benefits = [
    'Official Microsoft Partner',
    'Certified Technical Support',
    'Flexible Payment Options',
    'Customized Solutions',
    'Ongoing Customer Support',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-microsoft-blue to-blue-700 py-20 text-white">
          <div className="container max-w-screen-xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Innovative Secure Technologies
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Your trusted partner for Microsoft software solutions and licensing.
                </p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-white text-microsoft-blue hover:bg-gray-100"
                  >
                    <Link to="/services">Our Services</Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/20"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Microsoft Solutions"
                  className="rounded-lg shadow-xl"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Our Microsoft Solutions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive Microsoft software solutions for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-border transition-all hover:border-primary">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-microsoft-lightGray p-3">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-microsoft-blue hover:bg-microsoft-blue/90">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-microsoft-lightGray py-20">
          <div className="container max-w-screen-xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Why Choose Us"
                  className="rounded-lg shadow-lg"
                  width="600" 
                  height="400"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">Why Choose ISTPL?</h2>
                <p className="text-lg text-muted-foreground">
                  As a certified Microsoft partner, we provide trusted solutions tailored to your business needs.
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-microsoft-green" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-microsoft-blue hover:bg-microsoft-blue/90">
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-microsoft-darkGray py-16 text-white">
          <div className="container max-w-screen-xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Contact us today to discuss how our Microsoft software solutions can help your business grow.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-microsoft-blue hover:bg-microsoft-blue/90"
            >
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
