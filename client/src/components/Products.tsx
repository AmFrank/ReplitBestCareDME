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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FDA-Registered Stroke Recovery Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced neuromuscular electrical stimulation (NMES) technology proven to help stroke survivors regain function and independence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product 1: Motus Hand */}
          <div id="motus-hand" className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <img 
              src="https://static.wixstatic.com/media/e9ea92_62cd02b9c90a42d0bbe0c3f764abef24~mv2.jpg/v1/fill/w_671,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9ea92_62cd02b9c90a42d0bbe0c3f764abef24~mv2.jpg" 
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
                FDA-registered neuromuscular electrical stimulation (NMES) device clinically proven to help stroke survivors regain hand and wrist function, even years after their stroke.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Clinically validated NMES technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Non-invasive, portable design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Easy to use at home or clinic</span>
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
              src="https://static.wixstatic.com/media/e9ea92_b5d3095303ae48bfb6c0175de193a0c0~mv2.jpg/v1/fill/w_671,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9ea92_b5d3095303ae48bfb6c0175de193a0c0~mv2.jpg" 
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
                FDA-registered neuromuscular stimulation device designed to improve foot drop and ankle function for stroke survivors and individuals with neurological conditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Targets dorsiflexion and plantar flexion</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Improves gait and reduces foot drop</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Complements traditional physical therapy</span>
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
