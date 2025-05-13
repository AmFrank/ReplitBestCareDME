import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import Logo from "./ui/logo";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const scrollToSection = (id: string) => {
    closeMenu();
    // Only scroll if we're on the homepage
    if (location === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the homepage, navigate there first with the hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Logo className="h-10" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={cn(
                  "text-secondary hover:text-primary font-medium transition duration-150",
                  location === '/' && "text-primary"
                )}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-secondary hover:text-primary font-medium transition duration-150"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('motus-hand')}
                className="text-secondary hover:text-primary font-medium transition duration-150"
              >
                Motus Hand
              </button>
              <button 
                onClick={() => scrollToSection('motus-foot')}
                className="text-secondary hover:text-primary font-medium transition duration-150"
              >
                Motus Foot
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-secondary hover:text-primary font-medium transition duration-150"
              >
                Testimonials
              </button>
              <Link 
                href="/contact"
                className="text-secondary hover:text-primary font-medium transition duration-150"
              >
                Contact
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="text-gray-500 hover:text-primary focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Login/Admin Button */}
            <div className="hidden md:block">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <Link href="/admin">
                    <Button variant="ghost" className="text-secondary">Admin Panel</Button>
                  </Link>
                  <Button 
                    onClick={logout}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Admin Login
                </Button>
              )}
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('motus-hand')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Motus Hand
                </button>
                <button 
                  onClick={() => scrollToSection('motus-foot')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Motus Foot
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Testimonials
                </button>
                <Link 
                  href="/contact"
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link href="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary">
                      Admin Panel
                    </Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-secondary"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      closeMenu();
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary"
                  >
                    Admin Login
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;
