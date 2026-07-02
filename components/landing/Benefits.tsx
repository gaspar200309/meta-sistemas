const benefits = [
  ["💬", "Ayuda entre compañeros", "Resuelve dudas y comparte conocimientos."],
  ["💻", "Recursos útiles", "Material, herramientas, plantillas y recomendaciones."],
  ["🚀", "Crecimiento", "Participa en retos, proyectos y talleres."],
  ["🤝", "Networking", "Conecta con otros estudiantes de sistemas."],
  ["📢", "Oportunidades", "Entérate de eventos, prácticas y novedades."],
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-black uppercase sm:text-4xl md:text-5xl">
          ¿Qué encontrarás en la comunidad?
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
          {benefits.map(([icon, title, text]) => (
            <article
              key={title}
              className="rounded-3xl border border-red-500/30 bg-zinc-950 p-6 text-center transition hover:-translate-y-2 hover:border-red-500"
            >
              <div className="mb-4 text-4xl">{icon}</div>
              <h3 className="text-lg font-black">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}