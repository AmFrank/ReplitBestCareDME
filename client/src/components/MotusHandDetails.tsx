import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const MotusHandDetails: React.FC = () => {
  return (
    <section id="motus-hand-details" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Motus Hand</h2>
            <p className="text-xl text-gray-600 mb-8">
              An advanced hand rehabilitation device designed specifically for stroke survivors and individuals with neurological impairments.
            </p>
            
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762" 
                  alt="Motus Hand detailed view" 
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
                      <h4 className="font-semibold">Customizable Therapy Programs</h4>
                      <p className="text-gray-600">
                        Adjustable resistance and exercise protocols tailored to each patient's specific needs and recovery stage.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Interactive Feedback System</h4>
                      <p className="text-gray-600">
                        Real-time feedback and progress tracking to motivate patients and optimize therapy outcomes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ergonomic Design</h4>
                      <p className="text-gray-600">
                        Comfortable, adjustable fit for patients of all sizes with easy-to-clean materials for clinical settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Analytics Platform</h4>
                      <p className="text-gray-600">
                        Comprehensive reporting tools for clinicians to track patient progress and optimize treatment plans.
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
                    <span>Increased hand strength and dexterity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Improved fine motor control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Enhanced coordination and proprioception</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Increased patient engagement in therapy</span>
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

export default MotusHandDetails;
