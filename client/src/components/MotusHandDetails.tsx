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
              A revolutionary hand rehabilitation device proven to improve motor function following neurological injuries such as stroke.
            </p>
            
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://static.wixstatic.com/media/e9ea92_62cd02b9c90a42d0bbe0c3f764abef24~mv2.jpg/v1/fill/w_671,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9ea92_62cd02b9c90a42d0bbe0c3f764abef24~mv2.jpg" 
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
                      <h4 className="font-semibold">Neuro-rehabilitation Technology</h4>
                      <p className="text-gray-600">
                        Patented, FDA-registered neuromuscular electrical stimulation hand rehabilitation system.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Evidence-Based Treatment</h4>
                      <p className="text-gray-600">
                        Clinically proven to improve motor function after stroke and other neurological injuries.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Adaptive Treatment Protocol</h4>
                      <p className="text-gray-600">
                        Customizable treatment parameters for individual patient needs and goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Comprehensive System</h4>
                      <p className="text-gray-600">
                        Complete rehabilitation solution with glove, stimulator, accessories, and software.
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
                    <span>Significantly improved hand function</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Reduced muscle spasticity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Increased range of motion</span>
                  </li>
                  <li className="flex items-center">
                    <div className="rounded-full bg-primary bg-opacity-10 p-1 mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Enhanced quality of life</span>
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
