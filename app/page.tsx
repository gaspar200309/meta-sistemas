import Benefits from "@/components/landing/Benefits";
import Hero from "@/components/landing/Hero";
import InfoSection from "@/components/landing/InfoSection";
import Navbar from "@/components/landing/Navbar";
import ProposalsSection from "@/components/landing/ProposalsSection";
import VotingTableFinder from "@/components/landing/VotingTableFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0202] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <VotingTableFinder />
      <ProposalsSection />

    </main>
  );
}