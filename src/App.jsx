import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import Reveal from "./Reveal";
import FluidName from "./FluidName";
import { links, profile, experience, education, projects, skills, marquee, certifications, achievements, roles } from "./data";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
];

const socials = [
  ["LinkedIn", links.linkedin, <FaLinkedinIn />],
  ["GitHub", links.github, <FaGithub />],
  ["Instagram", links.instagram, <FaInstagram />],
];

const wrap = "mx-auto w-full max-w-6xl px-5 md:px-8";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/70 backdrop-blur-md">
      <div className="progress absolute inset-x-0 top-0 h-[3px] bg-accent" aria-hidden="true" />
      <div className={`${wrap} flex items-center justify-between py-5`}>
        <a href="#top" aria-label="Back to top" className="font-display -ml-2 grid h-11 place-items-center px-2 text-xl font-bold tracking-tight">aa</a>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm sm:gap-8">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="hidden underline-offset-4 hover:underline sm:inline">{label}</a>
          ))}
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-4 py-2 text-paper transition-colors hover:bg-accent">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-[1500px] overflow-hidden">
      <div className={`${wrap} relative flex min-h-svh flex-col justify-end pb-10 pt-20 md:pb-14`}>
        {/* Phones and tablets: portrait sits in the flow, the name overlaps its lower edge.
            Desktop: portrait fills a fixed column on the right, behind the name. */}
        <div className="relative ml-auto aspect-[3/4] w-[min(78vw,24rem)] sm:w-[min(66vw,32rem)] lg:absolute lg:inset-y-0 lg:right-0 lg:ml-0 lg:aspect-auto lg:w-[46%] lg:max-w-none">
          <img
            src="/assets/dp-portrait.jpg"
            alt="Portrait of Abhishek Arvind"
            width="1000"
            height="1333"
            fetchPriority="high"
            className="portrait pointer-events-none size-full object-cover object-[50%_18%]"
          />
        </div>
        <div className="relative -mt-14 sm:-mt-24 lg:mt-0">
          <FluidName lines={["Abhishek", "Arvind"]} accent="Abhishek:7" />
          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-line pt-6 md:flex-row md:items-end">
            <p className="max-w-md text-lg leading-snug md:text-xl">
              AI and Data Science graduate. I build GPT-powered apps and mobile products, and I have worked in Europe, Lithuania.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Technical Support · Fieldy AI, Lithuania
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ children, className = "" }) {
  return <li className={`border-t border-line last:border-b ${className}`}>{children}</li>;
}

function Title({ id, children }) {
  return (
    <h2 id={id} className="font-display scroll-mt-24 text-4xl font-semibold tracking-tight md:text-5xl">
      {children}
    </h2>
  );
}

function Ticker() {
  const items = [...marquee, ...marquee];
  return (
    <div className="ticker-wrap overflow-hidden border-y border-line py-5" aria-hidden="true">
      <div className="ticker flex w-max gap-10 whitespace-nowrap font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10">
            {m}
            <span className="size-3 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className={`${wrap} py-24 md:py-36`}>
      <h2 id="about" className="sr-only">About</h2>
      <Reveal as="p" className="font-display max-w-4xl text-[clamp(1.75rem,4.2vw,3.5rem)] font-medium leading-[1.12] tracking-tight">
        {profile}
      </Reveal>
      <Reveal delay={150} className="mt-14 grid gap-4 md:grid-cols-[1fr_2fr]">
        <p className="text-muted">Education</p>
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">{education.school}</p>
          <p className="mt-1">{education.degree}</p>
          <p className="text-muted">{education.dates} · {education.grade}</p>
        </div>
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-paper-2">
      <div className={`${wrap} grid gap-10 py-24 md:grid-cols-[1fr_2fr] md:py-32`}>
        <Reveal><Title id="experience">Experience</Title></Reveal>
        <ul>
          {experience.map((e, i) => (
            <Reveal as="li" key={e.org} delay={i * 80} className="border-t border-line py-8 last:border-b">
              <div className="flex items-start gap-4">
                <img src={e.img} alt="" className="size-12 shrink-0 rounded-xl bg-white object-cover p-1" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-display text-2xl font-semibold leading-tight tracking-tight">{e.role}</p>
                    {e.current && <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-paper">Now</span>}
                  </div>
                  <p className="mt-1">{e.org} · {e.place}</p>
                  <p className="text-sm text-muted">{e.dates}</p>
                </div>
              </div>
              <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-accent md:ml-16">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className={`${wrap} py-24 md:py-32`}>
      <Reveal><Title id="projects">Projects</Title></Reveal>
      <ul className="mt-12">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 70} className="group -mx-5 border-t border-line px-5 transition-colors last:border-b hover:bg-accent hover:text-paper md:-mx-8 md:px-8">
            <div className="grid items-center gap-5 py-8 md:grid-cols-[auto_1.1fr_1.4fr_auto] md:gap-10">
              <img src={p.img} alt="" className="size-16 rounded-2xl bg-paper object-contain p-2 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 md:size-20" />
              <p className="font-display text-4xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">{p.name}</p>
              <p className="max-w-md leading-relaxed text-muted group-hover:text-paper/90">{p.text}</p>
              <p className="text-sm md:text-right">{p.tag}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section className="bg-paper-2">
      <div className={`${wrap} grid gap-10 py-24 md:grid-cols-[1fr_2fr] md:py-32`}>
        <Reveal><Title id="skills">Skills</Title></Reveal>
        <div>
          <dl>
            {skills.map(([k, v], i) => (
              <Reveal key={k} delay={i * 70} className="grid gap-1 border-t border-line py-5 last:border-b md:grid-cols-[9rem_1fr] md:gap-6">
                <dt className="font-display text-xl font-semibold">{k}</dt>
                <dd className="leading-relaxed text-muted">{v}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal as="h3" className="font-display mt-16 text-2xl font-semibold tracking-tight">Certifications</Reveal>
          <Reveal delay={80} as="ul" className="mt-4 flex flex-wrap gap-2">
            {certifications.map((c) => <li key={c} className="rounded-full border border-ink/25 px-4 py-2 text-sm">{c}</li>)}
          </Reveal>

          <Reveal as="h3" className="font-display mt-16 text-2xl font-semibold tracking-tight">Achievements</Reveal>
          <ul className="mt-4">
            {achievements.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 80} className="flex items-center gap-4 border-t border-line py-5 last:border-b">
                <img src="/assets/cup.png" alt="" className="size-9 object-contain" />
                <p className="flex-1"><span className="block font-medium">{a.title}</span><span className="text-muted">{a.org}</span></p>
                <span className="text-sm text-muted">{a.date}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal as="h3" className="font-display mt-16 text-2xl font-semibold tracking-tight">Community</Reveal>
          <ul className="mt-4">
            {roles.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80} className="flex items-center gap-4 border-t border-line py-5 last:border-b">
                <img src={r.img} alt="" className="size-9 rounded-lg bg-white object-cover p-1" />
                <p className="flex-1"><span className="block font-medium">{r.title}</span><span className="text-muted">{r.org}</span></p>
                <span className="text-sm text-muted">{r.dates}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-accent text-paper">
      <div className={`${wrap} py-24 md:py-36`}>
        <p className="text-lg text-paper/80">Have a project, role or question?</p>
        <a
          href={`mailto:${links.email}`}
          className="font-display mt-4 block break-all text-[clamp(1.6rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight underline decoration-2 underline-offset-[0.12em] hover:decoration-4"
        >
          {links.email}
        </a>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-paper/30 pt-6 text-sm">
          <p>© {new Date().getFullYear()} Abhishek Arvind CB</p>
          <ul className="flex gap-3">
            {socials.map(([label, href, icon]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-paper/40 text-lg transition-colors hover:bg-paper hover:text-accent">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
