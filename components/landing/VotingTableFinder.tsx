"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

type Student = { nro: number; nombreCompleto: string; ci: string };

const STUDENTS_PER_TABLE = 100;

export default function MesaVotacionSection() {
  const [students, setStudents] = useState<Student[]>([]);
  const [ci, setCi] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExcel = async () => {
      try {
        const response = await fetch("/lista.xlsx");
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<Record<string, string | number>>(sheet);

        const data = rows.map((row) => ({
          nro: Number(row["Nro"]),
          nombreCompleto: String(row["Nombre completo"] ?? "").trim(),
          ci: String(row["CI"] ?? "").trim(),
        })).filter((row) => row.nro && row.nombreCompleto && row.ci);

        setStudents(data);
      } finally {
        setLoading(false);
      }
    };

    loadExcel();
  }, []);

  const student = useMemo(() => {
    const value = ci.trim();
    if (!value) return null;
    return students.find((item) => item.ci === value) ?? null;
  }, [ci, students]);

  const mesa = student ? Math.ceil(student.nro / STUDENTS_PER_TABLE) : null;

  return (
    <section id="mesa" className="relative overflow-hidden bg-[#020817] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e933_0%,transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-blue-400/20 bg-white/[0.04] p-6 text-center shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-xl sm:p-8">
        <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">
          Consulta de mesa
        </span>

        <h2 className="mt-5 text-3xl font-black uppercase sm:text-5xl">
          Busca tu <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">mesa de votación</span>
        </h2>

        <p className="mt-4 text-slate-300">Ingresa tu CI para saber en qué mesa debes votar.</p>

        <div className="mx-auto mt-8 max-w-md">
          <input value={ci} onChange={(e) => setCi(e.target.value.replace(/\D/g, ""))} placeholder="Ingresa tu CI" className="w-full rounded-2xl border border-blue-400/20 bg-[#06142b] px-5 py-4 text-center text-lg font-bold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300" />
        </div>

        <div className="mt-8 rounded-2xl border border-blue-400/20 bg-[#06142b]/80 p-6">
          {loading && <p className="text-slate-400">Cargando lista...</p>}

          {!loading && ci && !student && <p className="font-bold text-red-300">No se encontró ningún estudiante con ese CI.</p>}

          {!loading && student && (
            <>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Resultado</p>
              <h3 className="mt-3 text-2xl font-black">{student.nombreCompleto}</h3>
              <p className="mt-2 text-slate-300">CI: {student.ci}</p>

              <div className="mx-auto mt-6 max-w-xs rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5 shadow-[0_0_35px_rgba(14,165,233,0.35)]">
                <p className="text-sm font-bold uppercase">Te toca votar en la</p>
                <p className="text-5xl font-black">Mesa {mesa}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}