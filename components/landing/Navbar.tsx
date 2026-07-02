import { WHATSAPP_GROUP_LINK } from "@/app/constant/links";
import Image from "next/image";

const navItems = [
  { label: "Propuestas", href: "#propuestas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Beneficios", href: "#beneficios" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-400/20 bg-[#020817]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="rounded-2xl border border-blue-400/25 bg-white/5 p-1 shadow-[0_0_25px_rgba(14,165,233,0.25)] transition group-hover:border-cyan-300/50">
            <Image src="/meta-sistemas.png" alt="Logo META Sistemas" width={52} height={52} priority className="h-10 w-10 rounded-xl object-contain sm:h-12 sm:w-12" />
          </div>

          <span className="hidden text-lg font-black tracking-wide text-white sm:block">
            META <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">SISTEMAS</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-bold text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>

        <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-black text-white shadow-[0_0_25px_rgba(14,165,233,0.35)] transition hover:shadow-[0_0_35px_rgba(14,165,233,0.55)] sm:px-5">
          Unirme
        </a>
      </nav>
    </header>
  );
}