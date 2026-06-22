export default function Teaching() {
  const stats = [
    {
      value: "300+",
      label: "Students Mentored",
    },

    {
      value: "90%+",
      label: "Top Results",
    },

    {
      value: "2025",
      label: "Teaching Since",
    },

    {
      value: "4",
      label: "Subjects",
    },
  ];

  return (
    <section id="teaching" className="py-24">
      <div className="container-custom">

        <div className="h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mb-12"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Teaching & Mentorship
          </h2>

          <p className="text-slate-400 mt-4">
            Helping students achieve academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

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
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
          mt-12
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-8
          "
        >
          <h3 className="text-2xl font-bold text-cyan-400">
            Subjects Taught
          </h3>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Mathematics",
              "Science",
              "Social Science",
              "Computer Science",
            ].map((subject) => (
              <span
                key={subject}
                className="
                bg-slate-800
                px-4
                py-2
                rounded-lg
                "
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}