import AboutSection from "./components/AboutSection";
import BookingProcessSection from "./components/BookingProcessSection";
import ContactCTA from "./components/ContactCTA";
import EventsSection from "./components/EventsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-dst-ink text-stone-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EventsSection />
        <WhyChooseUsSection />
        <BookingProcessSection />
        <GallerySection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
