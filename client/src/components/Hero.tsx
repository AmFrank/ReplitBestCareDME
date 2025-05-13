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
              Breakthrough Stroke Recovery Solutions
            </h1>
            <p className="text-xl mb-8">
              BestCare DME offers FDA-registered neuromuscular electrical stimulation devices proven to help stroke survivors regain hand and foot function.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToElement('contact')}
                variant="outline" 
                className="btn-secondary"
              >
                Request Information
              </Button>
              <Button 
                onClick={() => scrollToElement('products')}
                className="btn-primary bg-secondary"
              >
                Discover Our Technology
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://static.wixstatic.com/media/e9ea92_1bd4c35e63b44b0b99e329e73c3f63dd~mv2.jpg/v1/fill/w_689,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e9ea92_1bd4c35e63b44b0b99e329e73c3f63dd~mv2.jpg" 
              alt="Advanced neuromuscular stimulation devices for stroke rehabilitation" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
