type InfoSectionProps = {
  id: string;
  title: string;
  text: string;
};

export default function InfoSection({ id, title, text }: InfoSectionProps) {
  return (
    <section id={id} className="bg-[#070101] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-red-500/20 bg-zinc-950/70 p-6 sm:p-10">
        <h2 className="text-3xl font-black uppercase sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-300">
          {text}
        </p>
      </div>
    </section>
  );
}