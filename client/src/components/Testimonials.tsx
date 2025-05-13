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
            Our clinically-proven technology is making a real difference in rehabilitation outcomes.
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
              "The technology has been critical in the rehabilitation of our patients with upper extremity paresis post-stroke. I strongly endorse the use of this device in any stroke program due to its remarkable therapeutic capabilities."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold">Dr. Daniel C. Lu, MD, PhD</p>
                <p className="text-sm text-gray-500">Vice Chair of Neurosurgery, UCLA</p>
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
              "The system offers exceptional value to neurorehabilitation programs by enabling patients to gain greater function, independence, confidence, and autonomy in their daily activities, reducing the burden of care for both families and healthcare systems."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold">Timothy M. Scherer, DPT, MSPT</p>
                <p className="text-sm text-gray-500">Director of Physical Therapy, Washington Outpatient Rehab</p>
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
              "Our clinic has integrated this rehabilitation technology into our treatment protocols with impressive results. The neuromuscular stimulation approach offers substantive improvements in patients' motor recovery, even years after their stroke."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold">Dr. Elizabeth Hansen, MD</p>
                <p className="text-sm text-gray-500">Rehabilitation Medicine Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
