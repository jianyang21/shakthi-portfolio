"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/* ---------------------------------- TYPES --------------------------------- */

type Project = {
  title: string;
  desc: string;
  href: string;
  tags: string[];
};

/* ---------------------------------- DATA ---------------------------------- */

const links = {
  email: "mailto:shakthid303@gmail.com",
  emailText: "shakthid303@gmail.com",
  phoneText: "+91 8778445852",
  linkedin: "https://www.linkedin.com/in/shakthi-saravanan-d-17953a240/",
  github: "https://github.com/jianyang21",
};

const aiProjects: Project[] = [
  {
    title: "DraftPilot",
    desc: "An AI agent that pilots email drafting from intent to delivery.",
    href: "https://github.com/jianyang21/DraftPilot",
    tags: ["AI Agent", "Email"],
  },
  {
    title: "StyleRecommender",
    desc: "React-based style recommender using RAG for personalized fashion recommendations.",
    href: "https://github.com/jianyang21/Stylerecommender",
    tags: ["React", "RAG"],
  },
  {
    title: "PromptQL",
    desc: "Local AI agent converting natural language into SQL or NoSQL queries.",
    href: "https://github.com/jianyang21/PromptQL",
    tags: ["SQL", "NoSQL"],
  },
  {
    title: "SkillSeeker",
    desc: "AI-powered resume analysis and enhancement system.",
    href: "https://github.com/jianyang21/SkillSeeker",
    tags: ["AI", "Resumes"],
  },
];

const softwareProjects: Project[] = [
  {
    title: "MoodMuse",
    desc: "Web application to monitor and express user moods.",
    href: "https://github.com/jianyang21/MoodMuse",
    tags: ["Web App"],
  },
  {
    title: "PayForge",
    desc: "Backend-first payment gateway modeling real-world payment systems.",
    href: "https://github.com/jianyang21/PayForge",
    tags: ["Backend", "Payments"],
  },
  {
    title: "Cookify",
    desc: "MERN app generating recipes using a RAG model.",
    href: "https://github.com/jianyang21/cookify",
    tags: ["MERN", "RAG"],
  },
];

/* -------------------------------- ANIMATION ------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ---------------------------------- PAGE ---------------------------------- */

export default function Page() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX x={pos.x} y={pos.y} />

      <div className="relative z-10 mx-auto w-[92vw] max-w-6xl py-6 pb-20">
        <TopNav />

        {/* ------------------------------- HERO ------------------------------- */}

        <header className="relative mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <HeroGraphics />

          <motion.div initial="hidden" animate="show" className="relative">
            <motion.h1
              variants={fadeUp}
              className="text-[46px] tracking-[-0.02em] sm:text-[68px]"
              style={{ fontFamily: "ui-serif, Georgia, serif" }}
            >
              Shakthi.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 max-w-2xl text-[15px] leading-7 text-white/65"
            >
              AI Intern at FSS | Software & AI Builder | Former Data Science Intern at Swipe Fit
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 max-w-xl text-[15px] leading-7 text-white/75"
            >
              Turning Ideas into Working Systems
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <PrimaryButton href="#projects">
                View projects <ArrowUpRight className="h-4 w-4" />
              </PrimaryButton>

              <SecondaryButton href={links.email}>
                Email <Mail className="h-4 w-4" />
              </SecondaryButton>

              <IconLinks />
            </motion.div>
          </motion.div>
        </header>

        {/* ------------------------------- CONTENT ------------------------------- */}

        <main className="mt-20 space-y-20">
          <Section
            id="projects"
            title="Projects"
            right="Selected work"
            content={
              <div className="grid gap-6 lg:grid-cols-2">
                <Card title="AI Projects">
                  <ProjectGrid items={aiProjects} />
                </Card>
                <Card title="Software Projects">
                  <ProjectGrid items={softwareProjects} />
                </Card>
              </div>
            }
          />

          <Section
            id="skills"
            title="Skills"
            right="Core capabilities"
            content={
              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Programming">
                  <TagList items={["Python", "C", "Java", "JavaScript", "HTML", "CSS"]} />
                </Card>
                <Card title="Databases">
                  <TagList items={["PostgreSQL", "Neon", "MongoDB", "Firebase", "Supabase"]} />
                </Card>
                <Card title="AI & ML">
                  <TagList items={["LLMs", "RAG", "LangChain", "LangGraph", "LangFlow", "AutoGen"]} />
                </Card>
                <Card title="Web & Backend">
                  <TagList items={["React", "Node.js", "FastAPI", "Flask", "REST APIs"]} />
                </Card>
              </div>
            }
          />

          <Section
            id="experience"
            title="Experience"
            right="Internships"
            content={
              <div className="grid gap-6 lg:grid-cols-3">
                <Card title="AI Intern">
                  <p className="text-sm text-white/65">
                    Financial Software Services. Currently working here.
                  </p>
                </Card>

                <Card title="Data Science Intern">
                  <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
                    <li>Built real-time ingestion pipelines</li>
                    <li>Automated dynamic product updates</li>
                    <li>MongoDB data modeling</li>
                    <li>ML-driven product recommendations</li>
                  </ul>
                </Card>

                <Card title="Software Intern">
                  <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
                    <li>Optimized Python-based systems</li>
                    <li>API integrations</li>
                    <li>Database management</li>
                    <li>RAG-based document intelligence</li>
                  </ul>
                </Card>
              </div>
            }
          />

          <Section
            id="education"
            title="Education"
            right="Academic background"
            content={
              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Shiv Nadar University, Chennai">
                  <p className="text-sm text-white/65">B.Tech in AI & Data Science</p>
                  <p className="mt-2 text-sm text-white/55">Sep 2022 – Sep 2026</p>
                  <p className="mt-3 text-sm">
                    GPA. <strong>7.6</strong>
                  </p>
                </Card>

                <Card title="Atomic Energy Central School">
                  <p className="text-sm text-white/55">Mar 2008 – Jun 2021</p>
                  <p className="mt-3 text-sm">Higher Secondary. <strong>89%</strong></p>
                  <p className="text-sm">Secondary School. <strong>88.4%</strong></p>
                </Card>
              </div>
            }
          />

          <Section
            id="contact"
            title="Contact"
            right="Reach out"
            content={
              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Get in touch">
                  <ContactList />
                </Card>

                <Card title="Footer">
                  <p className="text-sm text-white/70">Shakthi</p>
                  <p className="mt-2 text-sm text-white/55">
                    Turning Ideas into Working Systems
                  </p>
                  <p className="mt-6 text-xs text-white/40">
                    © {year} Shakthi
                  </p>
                </Card>
              </div>
            }
          />
        </main>
      </div>
    </div>
  );
}

/* ------------------------------ LAYOUT HELPERS ------------------------------ */

function Section({
  id,
  title,
  right,
  content,
}: {
  id: string;
  title: string;
  right: string;
  content: React.ReactNode;
}) {
  return (
    <section id={id}>
      <div className="flex items-end justify-between">
        <h2 className="text-sm font-semibold tracking-wide text-white/85">{title}</h2>
        <span className="text-xs text-white/45">{right}</span>
      </div>
      <div className="mt-3 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      <div className="mt-8">{content}</div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-[#c7b7ff]/20 via-white/5 to-[#7ee7ff]/18 opacity-40 transition group-hover:opacity-80" />
      <div className="relative rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.05]">
        <div className="mb-4 text-sm font-semibold text-white/80">{title}</div>
        {children}
      </div>
    </div>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-3">
      {items.map((p) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
        >
          <div className="flex justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white/85">{p.title}</div>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65">
          {t}
        </span>
      ))}
    </div>
  );
}

function ContactList() {
  return (
    <div className="space-y-3 text-sm text-white/65">
      <a href={links.email} className="flex items-center gap-2 hover:text-white">
        <Mail className="h-4 w-4" /> {links.emailText}
      </a>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" /> {links.phoneText}
      </div>
      <a href={links.linkedin} target="_blank" className="hover:text-white">
        {links.linkedin.replace("https://", "")}
      </a>
      <a href={links.github} target="_blank" className="hover:text-white">
        {links.github.replace("https://", "")}
      </a>
    </div>
  );
}

function PrimaryButton({ href, children }: any) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-[#c7b7ff]/20 to-[#7ee7ff]/10 px-4 py-2 text-sm font-semibold hover:border-white/30"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: any) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm hover:bg-white/[0.06]"
    >
      {children}
    </a>
  );
}

function IconLinks() {
  return (
    <div className="flex gap-2">
      <a href={links.github} target="_blank" className="rounded-full border border-white/10 bg-white/[0.02] p-2 hover:bg-white/[0.06]">
        <Github className="h-4 w-4" />
      </a>
      <a href={links.linkedin} target="_blank" className="rounded-full border border-white/10 bg-white/[0.02] p-2 hover:bg-white/[0.06]">
        <Linkedin className="h-4 w-4" />
      </a>
    </div>
  );
}

function TopNav() {
  return (
    <div className="sticky top-4 z-30">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
        <span className="font-semibold">Shakthi</span>
        <div className="hidden gap-4 md:flex text-sm text-white/65">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- GRAPHIC BACKGROUND ---------------------------- */

function BackgroundFX({ x, y }: { x: number; y: number }) {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#050608]" />
      <div className="fixed inset-0 -z-20 bg-grid opacity-35" />
      <div
        className="fixed -z-10 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
          background:
            "radial-gradient(circle, rgba(199,183,255,0.18), rgba(126,231,255,0.1), transparent 60%)",
        }}
      />
      <div
        className="fixed inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}

function HeroGraphics() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-48 -top-48 h-[560px] w-[560px] rounded-full bg-[#c7b7ff]/12 blur-3xl" />
      <div className="absolute -right-48 -top-40 h-[560px] w-[560px] rounded-full bg-[#7ee7ff]/12 blur-3xl" />
    </div>
  );
}
