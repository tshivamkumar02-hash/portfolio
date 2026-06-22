export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-slate-800
      py-12
      mt-12
      "
    >
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              Shivam Kumar Thakur
            </h3>

            <p className="mt-4 text-slate-400">
              M.Tech CSE @ IIT Patna
            </p>

            <p className="text-slate-400">
              Founder @ Thakur&apos;s Tech
            </p>

            <p className="text-slate-400">
              Educator & Mentor
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-cyan-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 mt-4">
              <a href="#home" className="hover:text-cyan-400">
                Home
              </a>

              <a href="#projects" className="hover:text-cyan-400">
                Projects
              </a>

              <a href="#skills" className="hover:text-cyan-400">
                Skills
              </a>

              <a href="#contact" className="hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-cyan-400">
              Connect
            </h3>

            <div className="mt-4 space-y-2 text-slate-400">

              <a
                href="mailto:tshivamkumar.02@gmail.com"
                className="block hover:text-cyan-400"
              >
                📧 Email
              </a>

              <a
                href="https://wa.me/919572786630"
                target="_blank"
                className="block hover:text-cyan-400"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/in/shivamkumarthakur/"
                target="_blank"
                className="block hover:text-cyan-400"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@SKTC_CLASSES"
                target="_blank"
                className="block hover:text-cyan-400"
              >
                ▶️ YouTube
              </a>

            </div>
          </div>

        </div>

        <div
          className="
          h-px
          bg-linear-to-r
          from-transparent
          via-cyan-500
          to-transparent
          my-8
          "
        ></div>

        <div className="text-center text-slate-400">
          <p>
            © 2026 Shivam Kumar Thakur. All Rights Reserved.
          </p>

          <p className="mt-2">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}