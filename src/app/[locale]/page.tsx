import HeaderBar from "@/components/landing/header-bar";
import HeroSection from "@/components/landing/hero-section";
import ProjectPhasesSection from "@/components/landing/project-phases-section";
import PostEventSection from "@/components/landing/post-event-section";
import DiscoverySection from "@/components/landing/discovery-section";
import JourneySection from "@/components/landing/journey-section";
import ScheduleSection from "@/components/landing/schedule-section";
import VenueSection from "@/components/landing/venue-section";
import Footer from "@/components/landing/footer";
import SectionDotNav from "@/components/landing/section-dot-nav";

export default function Home() {
  return (
    <div className="bg-background relative flex min-h-screen flex-col items-center">
      <HeaderBar />
      <SectionDotNav />
      <main className="w-full">
        <HeroSection />
        <ProjectPhasesSection />
        <PostEventSection />
        <ScheduleSection />
        <VenueSection />
        <DiscoverySection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}
