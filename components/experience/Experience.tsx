export default function Experience() {
  const experiences = [
    {
      year: "Feb 2026 - Present",
      title: "Founder & CEO | Software Developer",
      company: "Thakur's Tech",
      description:
        "Founded and leading Thakur's Tech. Responsible for software development, automation solutions, AI integrations, web and app development, cloud solutions, and network-based services.",
      highlight: true,
    },

    {
      year: "Mar 2026 - Present",
      title: "Mathematics Faculty",
      company: "Paathshala Institute",
      description:
        "Teaching Mathematics to students of Classes 7-10 and helping them build strong conceptual understanding and problem-solving skills.",
      highlight: false,
    },

    {
      year: "May 2025 - Present",
      title: "Teacher & Mentor",
      company: "Private Tuition",
      description:
        "Teaching Mathematics, Science, Social Science, and Computer Science. Mentored 300+ students with multiple students achieving 90%+ marks.",
      highlight: false,
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container-custom">

        <div
          className="
          h-px
          bg-linear-to-r
          from-transparent
          via-cyan-500
          to-transparent
          mb-12
          "
        ></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Experience
          </h2>

          <p className="text-slate-400 mt-4">
            Professional, entrepreneurial, and teaching journey.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">

          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-500"></div>

          {experiences.map((item) => (
            <div
              key={item.title}
              className="relative pl-16 mb-12"
            >
              <div
                className="
                absolute
                left-0
                top-4
                w-8
                h-8
                rounded-full
                bg-cyan-500
                border-4
                border-slate-950
                "
              />

              <div
                className={`
                bg-slate-900
                border
                rounded-xl
                p-6
                transition-all
                duration-300
                ${
                  item.highlight
                    ? "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                    : "border-slate-800 hover:border-cyan-400"
                }
                `}
              >
                <p className="text-cyan-400 font-semibold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-300 font-medium">
                  {item.company}
                </p>

                <p className="mt-3 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}