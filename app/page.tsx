import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/home/Stats";
import AboutMe from "@/components/about/AboutMe";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Achievements from "@/components/achievements/Achievements";
import Startup from "@/components/startup/Startup";
import Teaching from "@/components/teaching/Teaching";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollProgress from "@/components/navbar/ScrollProgress";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Education/>
      <Experience/>
      <Achievements/>
      <Startup/>
      <Teaching/>
      <Contact/>
      <Footer/>
      <ScrollProgress/>
    </main>
  );
}

// import Navbar from "@/components/navbar/Navbar";
// import Hero from "@/components/hero/Hero";
// import Stats from "@/components/home/Stats";
// import AboutMe from "@/components/about/AboutMe";
// import Projects from "@/components/projects/Projects";
// import Skills from "@/components/skills/Skills";
// import Startup from "@/components/startup/Startup";
// import Teaching from "@/components/teaching/Teaching";
// import Contact from "@/components/contact/Contact";
// import Footer from "@/components/footer/Footer";
// import Experience from "@/components/experience/Experience";
// import Achievements from "@/components/achievements/Achievements";
// import Education from "@/components/education/Education";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-slate-950 text-white">
//       <button
//   onClick={() => alert("PAGE BUTTON")}
//   className="fixed top-4 right-4 z-[99999] bg-green-500 p-4"
// >
//   PAGE TEST
// </button>
//       <Navbar />

//       <Hero />
//       <Stats />
//       <AboutMe />
//       <Projects />
//       <Skills />
//       <Education/>
//       <Experience/>
//       <Achievements/>
//       <Startup />
//       <Teaching />
//       <Contact />
      
      

//       <Footer />
//     </main>
//   );
// }