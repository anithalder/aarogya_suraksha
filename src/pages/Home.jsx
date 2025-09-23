import React from "react";

import {
    HeroSection,
    HowItWorksSection,
    FeaturesSection,
    TestimonialsSection,
    OurDoctorsSection,
} from "@/components/home";

import { Header, Footer } from "@/components/layout";

// Main Homepage Component
export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
            <Header />
            <main>
                <HeroSection />
                <HowItWorksSection />
                <FeaturesSection />
                <TestimonialsSection />
                <OurDoctorsSection />
            </main>
            <Footer />
        </div>
    );
}
