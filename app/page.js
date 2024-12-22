import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnerSection from "./components/PartnerSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
   <div>
    <Header />
    <Hero />
    <Features />
    <PricingSection />
    <PartnerSection />
    <Footer />
   </div>
  );
}