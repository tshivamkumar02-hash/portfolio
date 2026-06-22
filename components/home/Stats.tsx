export default function Stats() {
  const stats = [
    {
      number: "300+",
      label: "Students Mentored",
    },

    {
      number: "5+",
      label: "Projects",
    },

    {
      number: "1",
      label: "Startup",
    },

    {
      number: "2026",
      label: "Founded",
    },
  ];

  return (
    <section 
    id="stats"
    className="py-20">
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        grid
        md:grid-cols-4
        gap-6
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            text-center
            hover:border-cyan-400
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >
            <h3
              className="
              text-4xl
              font-bold
              text-cyan-400
              "
            >
              {item.number}
            </h3>

            <p className="mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}