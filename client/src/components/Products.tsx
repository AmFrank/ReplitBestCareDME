import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { scrollToElement } from "@/lib/utils";

const Products: React.FC = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Rehabilitation Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology for stroke recovery and rehabilitation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product 1: Motus Hand */}
          <div id="motus-hand" className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <img 
              src="https://pixabay.com/get/gcaa950b79c5da1036c407427294aa20ed81d21a4065c5a69e905fa843d5601ef867da25e3bdd12a50259ca3f9551e945d88bf961dc2cb27873e66af3ac3c5b75_1280.jpg" 
              alt="The Motus Hand device" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">The Motus Hand</h3>
                <Badge className="bg-primary bg-opacity-10 text-primary" variant="outline">
                  Bestseller
                </Badge>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced hand rehabilitation system designed to help stroke survivors regain hand and finger mobility through targeted therapeutic exercises.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Customizable resistance levels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Interactive therapy software</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Progress tracking dashboard</span>
                </li>
              </ul>
              <Button 
                onClick={() => scrollToElement('motus-hand-details')}
                className="btn-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Product 2: Motus Foot */}
          <div id="motus-foot" className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
              alt="The Motus Foot device" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">The Motus Foot</h3>
                <Badge className="bg-primary bg-opacity-10 text-primary" variant="outline">
                  New
                </Badge>
              </div>
              <p className="text-gray-600 mb-6">
                Innovative foot and ankle rehabilitation system that helps stroke survivors improve mobility, strength, and coordination in the lower extremities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Multiple exercise patterns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Adjustable resistance technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Gait analysis features</span>
                </li>
              </ul>
              <Button 
                onClick={() => scrollToElement('motus-foot-details')}
                className="btn-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
