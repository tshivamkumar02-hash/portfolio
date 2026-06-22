export default function Startup() {
  return (
    <section id="startup" className="py-24">
      <div className="container-custom">

        <div className="h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mb-12"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Thakur&apos;s Tech
          </h2>

          <p className="text-slate-400 mt-4">
            Finding Solutions Through Technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div
            className="
            bg-slate-900
            border
            border-cyan-400
            rounded-xl
            p-8
            shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              About Startup
            </h3>

            <p className="mt-4 text-slate-300">
              Founded in February 2026 by Shivam Kumar Thakur,
              Thakur&apos;s Tech focuses on software development,
              automation solutions, AI-powered systems,
              cloud technologies and network solutions.
            </p>

            <p className="mt-4 text-slate-300">
              Mission: Creating innovative software solutions
              for sports, healthcare and emerging technology
              sectors.
            </p>

            <a
              href="https://thakurstechnology.vercel.app/"
              target="_blank"
              className="
              inline-block
              mt-6
              bg-cyan-500
              text-black
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:scale-105
              transition-all
              "
            >
              Visit Website
            </a>
          </div>

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>✓ Web Development</li>
              <li>✓ App Development</li>
              <li>✓ AI Solutions</li>
              <li>✓ Automation Systems</li>
              <li>✓ Cloud Solutions</li>
              <li>✓ Network Solutions</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}