
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  CheckCircle, Award, Users, Briefcase,
  BarChart, ShieldCheck, ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-microsoft-blue" />,
      title: 'Trust',
      description: 'Building long-lasting relationships with our clients through transparency and reliability.'
    },
    {
      icon: <Award className="h-8 w-8 text-microsoft-blue" />,
      title: 'Excellence',
      description: 'Delivering exceptional solutions and service quality that exceed expectations.'
    },
    {
      icon: <Users className="h-8 w-8 text-microsoft-blue" />,
      title: 'Client-Focused',
      description: "Putting our clients' needs at the center of everything we do."
    },
    {
      icon: <BarChart className="h-8 w-8 text-microsoft-blue" />,
      title: 'Innovation',
      description: 'Continuously exploring new technologies to provide cutting-edge solutions.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Innovative Secure Technologies was established in Chandigarh.'
    },
    {
      year: '2012',
      title: 'Microsoft Partnership',
      description: 'Became an official Microsoft Partner with specialized competencies.'
    },
    {
      year: '2016',
      title: 'Regional Expansion',
      description: 'Expanded operations to serve clients across northern India.'
    },
    {
      year: '2020',
      title: 'Cloud Excellence',
      description: 'Achieved Microsoft Cloud Solutions Provider status.'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-microsoft-blue to-blue-700 py-16 text-white">
          <div className="container max-w-screen-xl">
            <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">
              Learn about Innovative Secure Technologies Private Limited and our commitment to excellence in Microsoft software solutions.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Our Company"
                  className="rounded-lg shadow-lg"
                  width="600"
                  height="400"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">Our Company</h2>
                <p className="text-lg">
                  Innovative Secure Technologies Private Limited (ISTPL) is a leading provider of Microsoft software solutions in India. Based in Chandigarh, we specialize in delivering comprehensive software solutions that help businesses improve productivity, enhance security, and achieve their goals.
                </p>
                <p className="text-lg">
                  As a certified Microsoft Partner, we offer expert guidance on Microsoft licensing, cloud migration, security implementations, and ongoing technical support. Our team of certified professionals ensures that each solution is tailored to meet the specific needs of our clients.
                </p>
                <p className="text-lg">
                  Led by our CEO, Mr. Aman Khullar, ISTPL is committed to providing exceptional service and building lasting relationships with our clients across various industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-microsoft-lightGray py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Our Core Values</h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
                These principles guide our work and define our commitment to our clients
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-microsoft-lightGray p-3">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/Milestones */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Our Journey</h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
                Key milestones in our company's history
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-microsoft-blue text-white text-xl font-bold py-2 px-4 rounded inline-block">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-microsoft-lightGray py-20">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Our Leadership</h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
                Meet the team behind Innovative Secure Technologies
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-32 w-32 rounded-full bg-microsoft-blue text-white text-4xl flex items-center justify-center">
                    AK
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Aman Khullar</h3>
                <p className="text-microsoft-blue font-medium mb-4">CEO & Founder</p>
                <p className="text-muted-foreground">
                  With extensive experience in Microsoft technologies and business management, Aman leads our company with a focus on innovation and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-microsoft-darkGray py-16 text-white">
          <div className="container max-w-screen-xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Work With Us?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Contact us today to discuss how our Microsoft software solutions can benefit your business.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-microsoft-blue hover:bg-microsoft-blue/90"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
