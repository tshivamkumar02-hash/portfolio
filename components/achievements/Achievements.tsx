export default function Achievements() {
  const achievements = [
    {
      title: "M.Tech at IIT Patna",
      description:
        "Pursuing M.Tech in Computer Science & Engineering with specialization in Cybersecurity and Network Security.",
      icon: "🎓",
    },

    {
      title: "Founder of Thakur's Tech",
      description:
        "Founded Thakur's Tech in 2026 to provide software development, automation, AI, cloud, and networking solutions.",
      icon: "🚀",
    },

    {
      title: "300+ Students Mentored",
      description:
        "Guided more than 300 students through private tuition and coaching classes.",
      icon: "👨‍🏫",
    },

    {
      title: "90%+ Student Results",
      description:
        "Multiple students achieved more than 90% marks in subjects taught by me.",
      icon: "🏆",
    },

    {
      title: "Software Development Projects",
      description:
        "Worked on web development, automation, AI, networking, and research-oriented projects.",
      icon: "💻",
    },

    {
      title: "Cybersecurity Research Enthusiast",
      description:
        "Focused on cybersecurity, network security, ethical hacking, and secure system design.",
      icon: "🔐",
    },
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="container-custom">

        <div className="h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mb-12"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Achievements
          </h2>

          <p className="text-slate-400 mt-4">
            Milestones and accomplishments throughout my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-8
              hover:border-cyan-400
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
              "
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}