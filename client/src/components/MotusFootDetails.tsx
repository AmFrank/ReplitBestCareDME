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
              An FDA-registered neuromuscular electrical stimulation (NMES) device specifically designed to improve foot drop and ankle function in stroke survivors, even years after their stroke.
            </p>
            
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://static.wixstatic.com/media/e9ea92_b5d3095303ae48bfb6c0175de193a0c0~mv2.jpg/v1/fill/w_671,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9ea92_b5d3095303ae48bfb6c0175de193a0c0~mv2.jpg" 
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
                      <h4 className="font-semibold">Advanced Neuro-Stimulation</h4>
                      <p className="text-gray-600">
                        FDA-registered neuromuscular electrical stimulation (NMES) system specifically designed for foot and ankle rehabilitation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Targeted Stimulation</h4>
                      <p className="text-gray-600">
                        Precisely targets ankle dorsiflexors to improve foot drop and gait abnormalities common after stroke.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Comprehensive Therapy Protocol</h4>
                      <p className="text-gray-600">
                        Complete system with customizable parameters for progressive rehabilitation to improve functional mobility.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">User-Friendly Design</h4>
                      <p className="text-gray-600">
                        Easy to use in clinical settings with intuitive controls and adaptable for home-based therapy programs.
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
                    <span>Improved dorsiflexion and foot positioning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Enhanced walking ability and gait symmetry</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Reduced risk of trips and falls</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Increased independence in daily mobility</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => window.location.href = '/contact'}
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
