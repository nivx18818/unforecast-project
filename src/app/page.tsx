import HeaderBar from "@/components/landing/HeaderBar";
import HeroSection from "@/components/landing/HeroSection";
import DiscoverySection from "@/components/landing/DiscoverySection";
import JourneySection from "@/components/landing/JourneySection";
import ScheduleSection from "@/components/landing/ScheduleSection";
import VenueSection from "@/components/landing/VenueSection";
import RSVPSection from "@/components/landing/RSVPSection";
import SecretMessagesSection from "@/components/landing/SecretMessagesSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center bg-background min-h-screen">
      <HeaderBar />
      <main className="w-full">
        <HeroSection />
        <DiscoverySection />
        <JourneySection />
        <ScheduleSection />
        <VenueSection />
        <RSVPSection />
        <SecretMessagesSection />
      </main>
      <Footer />
    </div>
  );
}
