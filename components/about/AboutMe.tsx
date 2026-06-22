export default function AboutMe() {
  return (
    <section 
      id="about"
      className="py-24">
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
            About Me
          </h2>

          <p className="text-slate-400 mt-4">
            Researcher, Developer, Entrepreneur and Educator
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            hover:border-cyan-400
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              IIT Patna
            </h3>

            <p className="mt-4 text-slate-300">
              Pursuing M.Tech in Computer Science &
              Engineering with research interests in
              Cybersecurity and Network Security.
            </p>
          </div>

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            hover:border-cyan-400
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              Thakur&apos;s Tech
            </h3>

            <p className="mt-4 text-slate-300">
              Founder of Thakur&apos;s Tech,
              delivering software development,
              automation, AI integration and
              technology consulting services.
            </p>
          </div>

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            hover:border-cyan-400
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              Teaching
            </h3>

            <p className="mt-4 text-slate-300">
              Teaching Mathematics, Science and
              Social Science to students of
              Classes 6–10 with 100+ students mentored.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}