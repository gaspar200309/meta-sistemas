"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_GROUP_LINK } from "@/app/constant/links";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#020817] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e933_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#1d4ed866_0%,transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="text-center lg:text-left">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200 backdrop-blur lg:mx-0">
            Rumbo al centro de estudiantes
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl xl:text-7xl">
            META <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Sistemas</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl lg:mx-0">
            Una comunidad estudiantil organizada y comprometida con el crecimiento académico, tecnológico y representativo de Ingeniería de Sistemas.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <motion.a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.96 }} className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-center font-bold text-white shadow-[0_0_35px_rgba(14,165,233,0.35)] transition hover:shadow-[0_0_50px_rgba(14,165,233,0.55)]">
              Unirme al equipo
            </motion.a>

            <motion.a href="#propuestas" whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.96 }} className="rounded-2xl border border-blue-400/40 bg-white/5 px-8 py-4 text-center font-bold text-blue-100 backdrop-blur transition hover:bg-blue-500/10">
              Ver propuestas
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.88, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] rounded-[2rem] border border-blue-400/20 bg-white/[0.04] p-6 shadow-[0_0_80px_rgba(37,99,235,0.22)] backdrop-blur-xl">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-600/40 via-cyan-400/20 to-blue-900/40 blur-2xl" />
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
              <Image src="/meta-sistemas.png" alt="Logo META Sistemas" width={700} height={700} priority className="h-auto w-full rounded-3xl object-contain drop-shadow-[0_0_45px_rgba(56,189,248,0.45)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}