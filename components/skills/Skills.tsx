export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C",
        "C++",
        "JavaScript",
        "TypeScript",
      ],
    },

    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "React",
        "Next.js",
        "Node.js",
      ],
    },

    {
      title: "Cybersecurity",
      skills: [
        "Network Security",
        "Linux",
        "Wireshark",
        "Cryptography",
        "Digital Forensics",
        "Ethical Hacking",
      ],
    },

    {
      title: "AI & Automation",
      skills: [
        "Prompt Engineering",
        "OpenAI APIs",
        "AI Agents",
        "Workflow Automation",
        "Chatbot Development",
      ],
    },

    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Google Cloud",
        "IBM Cloud",
        "Git",
        "GitHub",
      ],
    },

    {
      title: "Databases",
      skills: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
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
            Skills & Technologies
          </h2>

          <p className="text-slate-400 mt-4">
            Technologies I use to build solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
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
              <h3 className="text-2xl font-semibold text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    bg-slate-800
                    border
                    border-slate-700
                    px-3
                    py-2
                    rounded-lg
                    text-sm
                    hover:border-cyan-400
                    hover:text-cyan-400
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}