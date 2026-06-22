import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
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
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4">
            Projects and research work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-8
              hover:border-cyan-400
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div
                className="
                flex
                justify-between
                items-center
                "
              >
                <h3
                  className="
                  text-2xl
                  font-semibold
                  "
                >
                  {project.title}
                </h3>

                <span
                  className="
                  text-xs
                  bg-cyan-500/20
                  text-cyan-400
                  px-3
                  py-1
                  rounded-full
                  "
                >
                  {project.status}
                </span>
              </div>

              <p
                className="
                mt-4
                text-slate-300
                "
              >
                {project.description}
              </p>

              <div
                className="
                flex
                flex-wrap
                gap-2
                mt-6
                "
              >
                {project.technologies.map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-slate-800
                      px-3
                      py-1
                      rounded-md
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}