import React from "react";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Healthcare Professionals Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our rehabilitation technology is making a difference in clinical outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="text-primary flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5" fill="currentColor" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-600 italic mb-6">
              "The Motus Hand has revolutionized our stroke rehabilitation program. Patients are more engaged in their therapy and we're seeing measurable improvements in less time."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-500">Neurological Rehabilitation Center</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="text-primary flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5" fill="currentColor" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-600 italic mb-6">
              "As a physical therapist, I've worked with many rehabilitation devices, but the Motus Foot is exceptional. The adjustable resistance and real-time feedback have helped our patients regain mobility faster."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold">Michael Chen, DPT</p>
                <p className="text-sm text-gray-500">Regional Medical Center</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="text-primary flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5" fill="currentColor" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-600 italic mb-6">
              "The comprehensive data analytics provided by BestCare DME's products have been invaluable for tracking patient progress and adjusting treatment plans. Both the Motus Hand and Foot devices have become essential tools in our practice."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold">Dr. Robert Wilson</p>
                <p className="text-sm text-gray-500">Advanced Rehab Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
