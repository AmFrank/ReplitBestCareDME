import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const MotusFootDetails: React.FC = () => {
  return (
    <section id="motus-foot-details" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Motus Foot</h2>
            <p className="text-xl text-gray-600 mb-8">
              Revolutionary foot and ankle rehabilitation system that helps restore mobility and strength after stroke or neurological injury.
            </p>
            
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://pixabay.com/get/g420584b281a7a435274f5c05c305b23244afcd309616da9fa0753205658343f5abeb8231903f84ee9888fc3b79de3dc3aeb7ba28b7fb8c33f21505f3713e80b1_1280.jpg" 
                  alt="Motus Foot detailed view" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Multi-Axis Movement</h4>
                      <p className="text-gray-600">
                        Supports dorsiflexion, plantarflexion, inversion, and eversion exercises for comprehensive rehabilitation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Progressive Resistance Technology</h4>
                      <p className="text-gray-600">
                        Adjustable resistance levels that adapt as patients gain strength and mobility throughout recovery.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Gait Training Simulation</h4>
                      <p className="text-gray-600">
                        Emulates natural walking patterns to help rebuild neural pathways and improve ambulation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Adaptive Fit System</h4>
                      <p className="text-gray-600">
                        Accommodates different foot sizes and shapes with quick-adjust straps and padding for comfort.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4">Clinical Benefits</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Improved ankle stability and strength</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Enhanced gait pattern and walking confidence</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Reduced risk of falls and injuries</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Greater independence in daily activities</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => scrollToElement('contact')}
                  className="btn-primary"
                >
                  Request More Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotusFootDetails;
