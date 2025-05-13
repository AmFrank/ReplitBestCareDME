import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import MotusHandDetails from "@/components/MotusHandDetails";
import MotusFootDetails from "@/components/MotusFootDetails";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Products />
        <MotusHandDetails />
        <MotusFootDetails />
        <Testimonials />
        <CTASection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
