import React from "react";
import Logo from "./ui/logo";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" className="h-10 mb-4" />
            <p className="text-gray-300 mb-4">
              Innovative rehabilitation solutions for improved patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToElement('home')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('products')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('testimonials')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('contact')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToElement('motus-hand')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  The Motus Hand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('motus-foot')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  The Motus Foot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('contact')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Request a Demo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('contact')}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Pricing Information
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Medical Plaza Dr.<br />
                  Suite 456<br />
                  San Diego, CA 92101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">(800) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">info@bestcaredme.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} BestCare DME Medical Supplies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
