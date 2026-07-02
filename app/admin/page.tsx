import GamesSection from "@/components/landing/GamesSection";
import Navbar from "@/components/landing/Navbar";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#0b0202] text-white overflow-hidden">
      <Navbar />
      <GamesSection juegoId={1} />
    </main>
  );
}