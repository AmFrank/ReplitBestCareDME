import React from "react";
import { FlaskRound, Clock, Shield } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BestCare DME</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide innovative, evidence-based solutions for stroke recovery and rehabilitation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <FlaskRound className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clinically Validated</h3>
            <p className="text-gray-600">
              Our rehabilitation devices are backed by extensive clinical research and proven results in improving motor function.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accelerated Recovery</h3>
            <p className="text-gray-600">
              Our technology helps patients recover faster through targeted therapy and personalized treatment protocols.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
            <p className="text-gray-600">
              State-of-the-art devices designed with the latest rehabilitation science and engineering principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
