import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { v: "4", l: "Years in FAST NUCES" },
  { v: "2+", l: "Years in Software Development" },
  { v: "1", l: "Internship (AI Engineer)" },
  { v: "10+", l: "Models Experimented" },
];

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "FastAPI",
  "LangChain",
  "RAG",
  "LLMs",
  "n8n",
  "Docker",
  "Git",
];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`grid gap-16 md:grid-cols-[1fr_1.2fr] transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Photo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-foreground/40" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                About
              </span>
            </div>

            <div className="mt-10 aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
              <img
                src="/zaeem.jpg"        // ← Change this path
                alt="Zaeem - AI Engineer"
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:pt-32">
            <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Crafting modern web experiences, amplified by artificial intelligence.
            </h2>

            <p className="mt-8 max-w-lg text-balance text-muted-foreground">
              I’m Zaeem, an AI Engineer and Full-Stack Developer dedicated to bridging the gap between complex intelligence and real-world impact.
              Whether it’s building voice-enabled, multilingual RAG systems for local communities, orchestrating autonomous agentic workflows,
              or deploying fine-tuned generative models.
            </p>

            <p className="mt-6 max-w-lg text-balance text-muted-foreground">
              I build software that thinks and scales.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="bg-background p-6">
                  <div className="font-display text-4xl tracking-tight">{s.v}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Current Stack
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}