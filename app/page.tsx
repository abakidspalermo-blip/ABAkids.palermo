import Hero from "./components/Hero"
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import WhoWeHelp from "./components/WhoWeHelp";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Map from "./components/Map";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50">

      <Hero />

      <Services />

      <WhoWeHelp />

<About />
  
<WhyChooseUs />

<HowItWorks />

      <CallToAction />
<Map />
      <Footer />

      <WhatsAppButton />

    </main>
  );
}