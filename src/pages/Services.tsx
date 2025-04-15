
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Shield, Database, Cloud, Headset, 
  Server, Users, LayoutDashboard, FileCode,
  ArrowRight, CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-microsoft-blue" />,
      title: 'Microsoft Security Solutions',
      description:
        'Comprehensive protection with Microsoft Defender, Microsoft Sentinel, and advanced threat protection services to safeguard your business data.',
    },
    {
      icon: <Headset className="h-12 w-12 text-microsoft-blue" />,
      title: 'Microsoft 365',
      description:
        'Complete productivity suite including Office applications, email, cloud storage, and collaboration tools for businesses of all sizes.',
    },
    {
      icon: <Cloud className="h-12 w-12 text-microsoft-blue" />,
      title: 'Azure Cloud Services',
      description:
        'Scalable cloud infrastructure with Azure Virtual Machines, App Services, and Storage solutions to power your business applications.',
    },
    {
      icon: <Database className="h-12 w-12 text-microsoft-blue" />,
      title: 'Database Solutions',
      description:
        'Microsoft SQL Server and Azure SQL Database implementations, optimization, and management services.',
    },
    {
      icon: <Server className="h-12 w-12 text-microsoft-blue" />,
      title: 'Windows Server',
      description:
        'Full range of Windows Server solutions including deployment, maintenance, and security compliance.',
    },
    {
      icon: <LayoutDashboard className="h-12 w-12 text-microsoft-blue" />,
      title: 'Dynamics 365',
      description:
        'CRM and ERP solutions with Microsoft Dynamics 365 to streamline your business operations and improve customer relationships.',
    },
    {
      icon: <Users className="h-12 w-12 text-microsoft-blue" />,
      title: 'Microsoft Teams',
      description:
        'Collaboration and communication solutions with Microsoft Teams, including advanced features for enterprise-level businesses.',
    },
    {
      icon: <FileCode className="h-12 w-12 text-microsoft-blue" />,
      title: 'SharePoint Solutions',
      description:
        'Document management, intranet portals, and business process automation with Microsoft SharePoint.',
    },
  ];

  const features = [
    'Microsoft Certified Professionals',
    'Tailored Licensing Options',
    'Technical Support and Maintenance',
    'Cloud Migration Services',
    'Security Implementation',
    'Training and Knowledge Transfer'
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-microsoft-blue to-blue-700 py-16 text-white">
          <div className="container max-w-screen-xl">
            <h1 className="text-4xl font-bold md:text-5xl">Our Microsoft Solutions</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">
              Comprehensive Microsoft software products and services to help your business operate efficiently and securely.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="border-2 transition-all hover:border-microsoft-blue">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-microsoft-lightGray p-3 inline-flex">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-microsoft-lightGray py-20">
          <div className="container max-w-screen-xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">What We Offer</h2>
                <p className="text-lg text-muted-foreground">
                  As a Microsoft Partner, we provide end-to-end services to ensure you get the most out of your software investment.
                </p>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-microsoft-green" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="bg-microsoft-blue hover:bg-microsoft-blue/90">
                  <Link to="/contact">
                    Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Microsoft Services"
                  className="rounded-lg shadow-lg"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-microsoft-darkGray py-16 text-white">
          <div className="container max-w-screen-xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Need a Custom Solution?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Our team of Microsoft experts can design a tailored solution to address your specific business requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-microsoft-blue hover:bg-microsoft-blue/90"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
