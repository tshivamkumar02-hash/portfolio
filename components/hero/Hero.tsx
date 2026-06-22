import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-[85vh]
      flex
      items-center
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* Left Side */}

        <div>
          <div
              className="
              inline-block
              bg-cyan-500/20
              text-cyan-400
              px-4
              py-2
              rounded-full
              mb-6
              "
            >
              Finding Solutions Through Technology
            
            </div>
          <p className="text-cyan-400">
            
           Hello, I&apos;m
          </p>

          <h1
            className="
            text-4xl 
            sm:text-5xl 
            md:text-7xl
            font-bold
            mt-3
            "
          >
            {profile.name}
          </h1>

          <h2
            className="
            mt-4
            text-2xl
            text-cyan-400
            "
          >
            {profile.title}
          </h2>

          <p
            className="
            mt-6
            text-slate-300
            "
          >
            {profile.tagline}
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-8
            "
          >
            <a
              href="#projects"
              className="
              bg-cyan-500
              text-black
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              border
              border-cyan-500
              px-6
              py-3
              rounded-lg
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="
              border
              border-green-500
              px-6
              py-3
              rounded-lg
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Downlaod Resume
            </a>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={350}
            height={350}
            priority
            className="
            rounded-full
            border-4
            border-cyan-400
            object-cover
            "
          />
        </div>
        
      </div>
    </section>
  );
}