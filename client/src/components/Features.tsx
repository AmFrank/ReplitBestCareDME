import React from "react";
import { FlaskRound, Clock, Shield, Star } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BestCare DME</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our FDA-registered neuromuscular electrical stimulation (NMES) technology is revolutionizing stroke recovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <FlaskRound className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clinically Proven</h3>
            <p className="text-gray-600">
              Our technology is backed by multiple clinical studies demonstrating significant improvements in hand and foot function.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">FDA-Registered</h3>
            <p className="text-gray-600">
              All our rehabilitation devices are FDA-registered, ensuring safety and quality in stroke recovery treatment.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Non-Invasive</h3>
            <p className="text-gray-600">
              Our neuromuscular stimulation technology is completely non-invasive, comfortable, and easy to administer.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md card-hover">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Our team provides comprehensive training and ongoing support for healthcare professionals and patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
