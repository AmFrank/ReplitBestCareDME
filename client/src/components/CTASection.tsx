import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const CTASection: React.FC = () => {
  return (
    <section className="bg-primary text-white section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Innovative Stroke Recovery Solutions
          </h2>
          <p className="text-xl mb-8">
            Our FDA-registered neuromuscular electrical stimulation devices are helping stroke survivors 
            regain their independence worldwide. Join the growing network of healthcare providers offering 
            this breakthrough technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Request More Information
            </Button>
            <Button 
              onClick={() => scrollToElement('products')}
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              View Clinical Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
