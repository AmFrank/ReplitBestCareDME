import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const CTASection: React.FC = () => {
  return (
    <section className="bg-primary bg-opacity-10 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Rehabilitation Program?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn more about our innovative stroke recovery technology and how it can benefit your patients.
          </p>
          <Button 
            onClick={() => scrollToElement('contact')}
            className="btn-primary"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
