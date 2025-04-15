
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-microsoft-darkGray text-white">
      <div className="container max-w-screen-xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Innovative Secure Technologies Private Limited</h3>
            <p className="text-sm">
              Leading provider of Microsoft software solutions for businesses of all sizes.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-microsoft-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-microsoft-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-microsoft-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-microsoft-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 shrink-0 text-microsoft-blue" />
                <span className="text-sm">SCO 63, Second Floor, Sector 32C, Chandigarh-160030</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 shrink-0 text-microsoft-blue" />
                <span className="text-sm">0172-4641882, 9814004277</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 shrink-0 text-microsoft-blue" />
                <a href="mailto:ceo@istpl.org" className="text-sm hover:text-microsoft-blue transition-colors">
                  ceo@istpl.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 shrink-0 text-microsoft-blue" />
                <a href="mailto:amankhullar@istpl.org" className="text-sm hover:text-microsoft-blue transition-colors">
                  amankhullar@istpl.org
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-semibold">About ISTPL</h4>
            <p className="text-sm">
              Innovative Secure Technologies Private Limited is a trusted Microsoft Partner providing comprehensive software solutions to businesses across industries.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-xs">
            &copy; {new Date().getFullYear()} Innovative Secure Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
