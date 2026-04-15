import BlurryBlobs from "@/components/BlurryBlobs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosSection from "@/components/LogosSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303]">
      {/* Background Effects */}
      <BlurryBlobs />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <LogosSection />
        <AboutSection />
        <PlansSection />
        <TestimonialsSection />
        <Footer />
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
