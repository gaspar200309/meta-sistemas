"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const proposals = [
  {
    title: "Cursos Gratuitos",
    description:
      "Impulsaremos cursos y talleres de programación, inteligencia artificial, bases de datos, redes, desarrollo web y tecnologías emergentes para fortalecer la formación profesional.",
    image: "/propuestas/cursos.png",
  },
  {
    title: "Banco de Recursos",
    description:
      "Crearemos una biblioteca digital con libros, exámenes, prácticas, guías y material organizado por semestre para todos los estudiantes.",
    image: "/propuestas/banco.png",
  },
  {
    title: "Apoyo Estudiantil",
    description:
      "Brindaremos acompañamiento académico y orientación para resolver dudas, trámites universitarios y dificultades durante la carrera.",
    image: "/propuestas/apoyo.png",
  },
  {
    title: "Eventos Tecnológicos",
    description:
      "Organizaremos hackathons, competencias, ferias tecnológicas, conferencias y actividades que impulsen el aprendizaje práctico.",
    image: "/propuestas/eventos.png",
  },
  {
    title: "Bolsa de Oportunidades",
    description:
      "Publicaremos constantemente pasantías, becas, empleos y convocatorias para facilitar el crecimiento profesional de los estudiantes.",
    image: "/propuestas/bolsa.png",
  },
    {
    title: "Implementacion de toma corrientes",
    description:
      "Conexión a la corriente eléctrica en los laboratorios de computación para que los estudiantes puedan cargar sus dispositivos mientras trabajan en proyectos y tareas.",
    image: "/propuestas/tomacorrientes.png",
  },
  {
    title: "Librería en el centro de estudiantes",
    description:
      "Creación de una librería en el centro de estudiantes para que los estudiantes puedan acceder a libros y materiales de estudio de manera más conveniente.",
    image: "/propuestas/libreria.png",
  },
  {
    title: "Clases de reforzamiento",
    description:
      "Ofrecer clases adicionales de reforzamiento para ayudar a los estudiantes a comprender mejor los conceptos difíciles antes de los examenes.",
    image: "/propuestas/reforzamiento.png",
  },
  {
    title: "Instalación de sistemas de ventilación",
    description:
      "Instalación de sistemas de ventilación en los ambientes del centro de estudiantes para mantener un mejor ambiente.",
    image: "/propuestas/ventilacion.png",
  },
    {
    title: "Buzón de sugerencias fisico y virtual",
    description:
      "Implementación de un buzón de sugerencias físico y virtual para que los estudiantes puedan enviar sus ideas y comentarios sobre la carrera y el centro de estudiantes.",
    image: "/propuestas/buzon.png",
    
  },
  {
    title: "Campeonatos deportivos y de e-sports",
    description:
      "Organización de campeonatos deportivos y de e-sports para fomentar la actividad física y la competencia amistosa entre los estudiantes.",
    image: "/propuestas/deportivo.png",
  },
  {
    title: "Celebración del dia del estudiante",
    description:
      "Organización de eventos y actividades para celebrar el día del estudiante, para divertirse y fortalecer la comunidad estudiantil.",
    image: "/propuestas/celebracion.png",
  },
  {
    title: "Organizacion de una chocolatada o refrigerio en fechas especiales",
    description: "Organización de una chocolatada o refrigerio en fechas especiales para que los estudiantes puedan disfrutar de un momento agradable y compartir con sus compañeros.", 
    image: "/propuestas/refrigerio.png",
  }
  

];

export default function ProposalsSection() {
  return (
    <section
      id="propuestas"
      className="relative overflow-hidden bg-[#020817] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb22_0%,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[.25em] text-cyan-300">
            Nuestras propuestas
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase text-white md:text-6xl">
            Construyendo una
            <span className="block bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
              mejor Ingeniería de Sistemas
            </span>
          </h2>
        </motion.div>

        <div className="space-y-28">
          {proposals.map((proposal, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={proposal.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: .3 }}
                  className="overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900 shadow-[0_0_40px_rgba(37,99,235,.2)]"
                >
                  <Image src={proposal.image} alt={proposal.title} width={1536} height={864} className="aspect-video w-full object-cover transition duration-700 hover:scale-110" />
                </motion.div>

                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-2xl font-black text-white">
                    {index + 1}
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    {proposal.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    {proposal.description}
                  </p>

                  <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}