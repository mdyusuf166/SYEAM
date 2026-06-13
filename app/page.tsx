"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "AGI Researcher",
  "AI Developer",
  "Robotics Enthusiast",
  "Future MIT Student"
];

const projects = [
  {
    title: "AGI System Development",
    description: "Designing a foundational AGI research pipeline with symbolic reasoning, reinforcement learning, and interpretability modules.",
    tech: ["Python", "PyTorch", "Reinforcement Learning"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI vs AI Battle Game",
    description: "A tactical arena where autonomous agents compete using adaptive strategies and adversarial play to evolve behavior.",
    tech: ["Unity", "C#", "Neural Networks"],
    demo: "#",
    github: "#"
  },
  {
    title: "Quantum Cancer Research Platform",
    description: "Exploring quantum-inspired models for early cancer diagnostics and biomedical data analysis.",
    tech: ["Quantum ML", "Python", "Bioinformatics"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI-Powered Code Mentor",
    description: "An intelligent mentor system that gives personalized coding guidance, debugging hints, and learning pathways.",
    tech: ["Node.js", "React", "NLP"],
    demo: "#",
    github: "#"
  },
  {
    title: "Cybersecurity Training Platform",
    description: "Building a hands-on training environment for ethical hacking, threat simulation, and defensive strategy practice.",
    tech: ["Web Security", "JavaScript", "CTF"],
    demo: "#",
    github: "#"
  },
  {
    title: "Robotics Research Project",
    description: "Developing robotic perception and control systems for autonomy, manipulation, and human-centered interaction.",
    tech: ["ROS", "C++", "Computer Vision"],
    demo: "#",
    github: "#"
  }
];

const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 92 },
      { name: "C++", level: 85 },
      { name: "C#", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 78 }
    ]
  },
  {
    category: "AI & Data Science",
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 88 },
      { name: "Computer Vision", level: 82 },
      { name: "NLP", level: 80 }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "React", level: 86 },
      { name: "Node.js", level: 80 },
      { name: "HTML", level: 94 },
      { name: "CSS", level: 92 },
      { name: "Tailwind CSS", level: 84 }
    ]
  },
  {
    category: "Other",
    items: [
      { name: "Cybersecurity", level: 76 },
      { name: "Robotics", level: 84 },
      { name: "Competitive Programming", level: 88 },
      { name: "Research", level: 90 }
    ]
  }
];

const researchInterests = [
  "AGI",
  "Robotics",
  "Brain Computer Interface",
  "Quantum Computing",
  "Biomedical AI",
  "Cancer Treatment Technology"
];

const achievements = [
  "CSE Student",
  "Competitive Programmer",
  "Research Enthusiast",
  "Future MIT Applicant"
];

const timeline = [
  {
    year: "2025",
    items: ["AGI Development", "SAT Preparation"]
  },
  {
    year: "2026",
    items: ["MIT Application", "Advanced Research Projects"]
  },
  {
    year: "2027+",
    items: ["AGI Research", "Robotics Innovation", "Biomedical Technology Research"]
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[index % titles.length];
      const nextText = deleting ? current.slice(0, typed.length - 1) : current.slice(0, typed.length + 1);
      setTyped(nextText);

      if (!deleting && nextText === current) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && nextText === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, deleting ? 90 : 120);

    return () => clearTimeout(timeout);
  }, [typed, deleting, index]);

  const skillBlocks = useMemo(
    () =>
      skills.map((skill) => (
        <div key={skill.category} className="glass-card rounded-3xl p-6 shadow-panel border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
          <div className="space-y-4">
            {skill.items.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" style={{ width: `${item.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )),
    []
  );

  return (
    <main className="relative overflow-hidden px-6 sm:px-10 lg:px-14 py-8 text-slate-100">
      <div className="mx-auto container">
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs font-semibold">Future Research Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">M D Yousuf</h1>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
            {['About', 'Skills', 'Projects', 'Research', 'Achievements', 'Timeline', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-300 transition">{item}</a>
            ))}
          </nav>
        </header>

        <section className="relative rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_35%),_linear-gradient(180deg,rgba(15,23,42,0.9),rgba(6,8,15,0.95))] p-8 shadow-panel mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-75"></div>
          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.95fr] items-center">
            <div className="space-y-6">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Bangladesh · CSE Student · Future MIT Applicant</p>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Building tomorrow's intelligence with research, code, and ambitious vision.</h2>
                <p className="text-slate-300 max-w-2xl leading-8">
                  I am a self-driven learner from Bangladesh pursuing computer science excellence and advanced research. My mission is to shape responsible AGI, robotics, and biomedical technologies that empower humanity.
                </p>
              </div>
              <div className="inline-flex flex-wrap gap-3 items-center">
                <span className="rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100">{typed}<span className="blinking-cursor">|</span></span>
                <a href="#contact" className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition">Contact Me</a>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-panel flex flex-col items-center text-center">
              <div className="relative mb-6 h-56 w-56 rounded-full border border-cyan-300/25 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 shadow-glow overflow-hidden flex items-center justify-center">
                <span className="text-7xl">🧠</span>
              </div>
              <div className="space-y-3">
                <p className="text-slate-300">Professional photo placeholder</p>
                <div className="grid grid-cols-2 gap-3 text-left text-sm sm:text-base">
                  <div className="rounded-3xl bg-white/5 p-4">AGI Researcher</div>
                  <div className="rounded-3xl bg-white/5 p-4">AI Developer</div>
                  <div className="rounded-3xl bg-white/5 p-4">Robotics Enthusiast</div>
                  <div className="rounded-3xl bg-white/5 p-4">Future MIT Student</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">About Me</p>
            <h2 className="text-3xl font-semibold text-white mt-4">A research-driven technologist with a human-centered mission.</h2>
          </motion.div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
            <p className="leading-8 text-slate-300 mb-6">
              My passion is solving difficult scientific problems with elegant, ethical systems. I study AGI, robotics, cybersecurity, and quantum research because I believe technology should extend human potential while safeguarding people. Growing up in Bangladesh taught me to pursue every opportunity with curiosity, discipline, and a strong sense of purpose.
            </p>
            <p className="leading-8 text-slate-300">
              Today I am building toward MIT and beyond as a self-motivated learner, blending academic rigor with hands-on engineering. I aim to contribute to humanity through responsible AI, biomedical discovery, and the next wave of computing breakthroughs.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <div className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Skills</p>
            <h2 className="text-3xl font-semibold text-white mt-4">Technical strengths across research, development, and systems engineering.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">{skillBlocks}</div>
        </section>

        <section id="projects" className="mb-16">
          <div className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Projects</p>
            <h2 className="text-3xl font-semibold text-white mt-4">Modern research and engineering initiatives with impact.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} whileHover={{ y: -10 }} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-panel transition-transform duration-300">
                <div className="h-40 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-slate-900 flex items-center justify-center text-4xl text-cyan-300 mb-5">{index + 1}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 leading-7 mb-5">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-950/80 px-3 py-1 text-xs text-slate-200 uppercase tracking-[0.15em]">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.github} className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/10 transition">GitHub</a>
                  <a href={project.demo} className="rounded-full border border-violet-400/20 px-4 py-2 text-sm text-violet-200 hover:bg-violet-400/10 transition">Live Demo</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="research" className="mb-16">
          <div className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Research</p>
            <h2 className="text-3xl font-semibold text-white mt-4">Areas I am exploring at the frontier of science and AI.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((interest) => (
              <div key={interest} className="glass-card rounded-3xl border border-white/10 p-5 shadow-panel flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 text-lg">•</span>
                <p className="text-white font-medium">{interest}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="mb-16">
          <div className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Achievements</p>
            <h2 className="text-3xl font-semibold text-white mt-4">Milestones that reflect curiosity, competition, and research drive.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement} className="glass-card rounded-3xl border border-white/10 p-6 text-center shadow-panel">
                <p className="text-cyan-300 text-sm uppercase tracking-[0.35em] mb-3">{achievement}</p>
                <p className="text-white text-xl font-semibold">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="mb-16">
          <div className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Roadmap</p>
            <h2 className="text-3xl font-semibold text-white mt-4">An animated timeline of focus, ambition, and research milestones.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {timeline.map((stage) => (
              <motion.div key={stage.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[2rem] border border-white/10 p-7 shadow-panel">
                <p className="text-cyan-300 text-sm uppercase tracking-[0.35em] mb-4">{stage.year}</p>
                <ul className="space-y-3 text-slate-300">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <div className="mb-8">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Contact</p>
            <h2 className="text-3xl font-semibold text-white mt-4">Let's connect for research, internships, or collaborative innovation.</h2>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Email", value: "mailto:mdyousuf@example.com" },
                { label: "GitHub", value: "https://github.com/mdyusuf166" },
                { label: "LinkedIn", value: "https://www.linkedin.com/in/mdyusuf166" },
                { label: "Facebook", value: "https://www.facebook.com/mdyusuf166" },
                { label: "ResearchGate", value: "https://www.researchgate.net/profile/M_D_Yousuf" }
              ].map((contact) => (
                <a key={contact.label} href={contact.value} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-300/40 hover:bg-slate-900/80">
                  <p className="text-sm text-cyan-300 uppercase tracking-[0.35em] mb-2">{contact.label}</p>
                  <p className="text-sm text-slate-200 break-all">{contact.value.replace(/^https?:\/\//, "")}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-center text-slate-500 text-sm">
          Crafted for a future AGI researcher, MIT applicant, and research-driven technologist.
        </footer>
      </div>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1px;
          background: currentColor;
          animation: blink 1.2s infinite;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </main>
  );
}
