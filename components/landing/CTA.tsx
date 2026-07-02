import { WHATSAPP_GROUP_LINK } from "@/app/constant/links";

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-black to-[#180303] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-red-500/50 bg-red-950/20 p-6 text-center shadow-xl shadow-red-950/40 sm:p-10">
        <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
          No estudies solo, crece acompañado
        </h2>

        <p className="mt-4 text-base text-zinc-300 sm:text-lg">
          Sé parte de una comunidad hecha por y para estudiantes de sistemas.
        </p>

        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-2xl bg-red-600 px-8 py-4 font-black transition hover:-translate-y-1 hover:bg-red-500 sm:px-10"
        >
          Unirme ahora
        </a>
      </div>
    </section>
  );
}