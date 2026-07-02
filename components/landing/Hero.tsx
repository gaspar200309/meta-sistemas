"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import { WHATSAPP_GROUP_LINK } from "@/app/constant/links";

type Student = { nro: number; nombreCompleto: string; ci: string };

const STUDENTS_TOTAL = 4000;
const STUDENTS_PER_TABLE = 100;

export default function Hero() {
  const [students, setStudents] = useState<Student[]>([]);
  const [ci, setCi] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const response = await fetch("/lista.xlsx");
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<Record<string, string | number>>(sheet);
        setStudents(rows.map((row) => ({ nro: Number(row["Nro"]), nombreCompleto: String(row["Nombre completo"] ?? "").trim(), ci: String(row["CI"] ?? "").trim() })).filter((row) => row.nro && row.nombreCompleto && row.ci));
      } finally {
        setLoading(false);
      }
    };

    loadStudents();
  }, []);

  const student = useMemo(() => {
    const value = ci.trim();
    if (!value) return null;
    return students.find((item) => item.ci === value) ?? null;
  }, [ci, students]);

  const mesa = student ? Math.ceil(student.nro / STUDENTS_PER_TABLE) : null;

  const handleSearch = () => {
    if (!ci.trim()) return;
    setIsModalOpen(true);
  };

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

          <div className="mt-6 rounded-[1.5rem] border border-blue-400/20 bg-white/[0.04] p-5 backdrop-blur-xl">
            <p className="mt-2 text-slate-300">Ingresa tu CI y consulta en qué mesa votas.</p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input value={ci} onChange={(e) => setCi(e.target.value.replace(/\D/g, ""))} onKeyDown={(e) => e.key === "Enter" && handleSearch()} placeholder="Pon tu CI" className="w-full rounded-2xl border border-blue-400/20 bg-[#06142b] px-5 py-4 text-center font-bold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 sm:text-left" />
              <button type="button" onClick={handleSearch} disabled={loading || !ci.trim()} className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-black text-white shadow-[0_0_35px_rgba(14,165,233,0.35)] transition hover:shadow-[0_0_50px_rgba(14,165,233,0.55)] disabled:cursor-not-allowed disabled:opacity-50">
                Buscar mesa
              </button>
            </div>
          </div>

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

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-md rounded-[2rem] border border-blue-400/25 bg-[#06142b] p-6 text-center shadow-[0_0_70px_rgba(14,165,233,0.3)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Resultado de búsqueda</p>

            {student ? (
              <>
                <h3 className="mt-4 text-2xl font-black text-white">{student.nombreCompleto}</h3>
                <p className="mt-2 text-slate-300">CI: {student.ci}</p>
                <div className="mx-auto mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5">
                  <p className="text-sm font-bold uppercase">Te toca votar en la</p>
                  <p className="text-5xl font-black">Mesa {mesa}</p>
                </div>
              </>
            ) : (
              <p className="mt-5 font-bold text-red-300">No se encontró ningún estudiante con ese CI.</p>
            )}

            <button type="button" onClick={() => setIsModalOpen(false)} className="mt-6 rounded-2xl border border-blue-400/30 px-6 py-3 font-bold text-blue-100 transition hover:bg-blue-500/10">
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}