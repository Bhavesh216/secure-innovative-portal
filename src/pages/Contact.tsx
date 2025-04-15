
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We will get back to you soon.');
      // Clear form
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setSubject('General Inquiry');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-microsoft-blue to-blue-700 py-16 text-white">
          <div className="container max-w-screen-xl">
            <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">
              Get in touch with our team for information about our Microsoft software solutions and services.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container max-w-screen-xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions about our Microsoft software solutions? Contact us using the information below or fill out the form.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-microsoft-blue" />
                    <div>
                      <h3 className="text-lg font-semibold">Office Address</h3>
                      <p className="text-muted-foreground">SCO 63, Second Floor, Sector 32C, Chandigarh-160030</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-microsoft-blue" />
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-muted-foreground">0172-4641882, 9814004277</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-microsoft-blue" />
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-muted-foreground mb-1">
                        <a href="mailto:ceo@istpl.org" className="hover:text-microsoft-blue transition-colors">
                          ceo@istpl.org
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:amankhullar@istpl.org" className="hover:text-microsoft-blue transition-colors">
                          amankhullar@istpl.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-microsoft-blue" />
                    <div>
                      <h3 className="text-lg font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Your Phone Number" 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        value={company} 
                        onChange={(e) => setCompany(e.target.value)} 
                        placeholder="Your Company" 
                      />
                    </div>
                    
                    <div>
                      <Label>Inquiry Type</Label>
                      <RadioGroup value={subject} onValueChange={setSubject} className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="General Inquiry" id="general" />
                          <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Sales" id="sales" />
                          <Label htmlFor="sales" className="cursor-pointer">Sales</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Support" id="support" />
                          <Label htmlFor="support" className="cursor-pointer">Technical Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Partnership" id="partnership" />
                          <Label htmlFor="partnership" className="cursor-pointer">Partnership</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="How can we help you?" 
                        rows={5} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-microsoft-blue hover:bg-microsoft-blue/90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-microsoft-lightGray">
          <div className="container max-w-screen-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Our Location</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Visit us at our office in Chandigarh
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1669808047388!2d76.8013111!3d30.7075293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee57ae4baa5d%3A0x6a643c797c6bc180!2sSector%2032C%2C%20Chandigarh%2C%20160030!5e0!3m2!1sen!2sin!4v1681385658747!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Innovative Secure Technologies Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
