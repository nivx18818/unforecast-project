import HeaderBar from "@/components/landing/header-bar";
import HeroSection from "@/components/landing/hero-section";
import DiscoverySection from "@/components/landing/discovery-section";
import JourneySection from "@/components/landing/journey-section";
import ScheduleSection from "@/components/landing/schedule-section";
import VenueSection from "@/components/landing/venue-section";
import RSVPSection from "@/components/landing/rsvp-section";
import SecretMessagesSection from "@/components/landing/secret-messages-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="bg-background relative flex min-h-screen flex-col items-center">
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
