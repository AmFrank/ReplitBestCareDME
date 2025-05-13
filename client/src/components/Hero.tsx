import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary to-teal-500 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Advanced Stroke Recovery Technology
            </h1>
            <p className="text-xl mb-8">
              Discover BestCare DME's innovative medical devices designed to enhance rehabilitation outcomes for stroke survivors.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToElement('contact')}
                variant="outline" 
                className="btn-secondary"
              >
                Contact Us
              </Button>
              <Button 
                onClick={() => scrollToElement('products')}
                className="btn-primary bg-secondary"
              >
                Explore Products
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" 
              alt="Advanced medical rehabilitation equipment" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
