import Hero from "@/app/components/Hero"; 
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import AIPlanner from "@/app/components/AIPlanner";
import HostJourney from "@/app/components/HostJourney";
import Stats from "@/app/components/Stats";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
  <>
    <Hero />
    <About />
    <Services />
    <AIPlanner />
    <HostJourney />
    <Stats />
    <CTA />
    <Footer />
  </>
);
}
