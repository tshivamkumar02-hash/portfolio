export default function Education() {
  const educationData = [
    {
      year: "2026 - 2028",
      degree: "M.Tech in Computer Science & Engineering",
      institute: "IIT Patna",
      details: "Research Areas: Cybersecurity & Network Security",
      highlight: true,
    },

    {
      year: "2021 - 2025",
      degree: "B.Tech in Information Technology",
      institute: "NIST University",
      details: "CGPA: 8.3",
      highlight: false,
    },

    {
      year: "2021",
      degree: "Class XII",
      institute: "Gyansthali School (CBSE)",
      details: "Percentage: 71%",
      highlight: false,
    },

    {
      year: "2019",
      degree: "Class X",
      institute: "St. Thomas English School (ICSE)",
      details: "Percentage: 92%",
      highlight: false,
    },
  ];

  return (
    <section id="education" className="py-24">
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
            Education
          </h2>

          <p className="text-slate-400 mt-4">
            My academic journey from school to advanced research.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">

          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-500"></div>

          {educationData.map((item) => (
            <div
              key={item.degree}
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
                  {item.degree}
                </h3>

                <p className="mt-2 text-slate-300">
                  {item.institute}
                </p>

                <p className="mt-2 text-slate-400">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}