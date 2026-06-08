import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    n: "01",
    title: "AI Agricultural Assistant",
    tag: "AI Engineering · Multimodal · RAG",
    year: "2025/26",
    desc: "A multilingual, voice-enabled Retrieval-Augmented Generation (RAG) application supporting regional Pakistani languages to empower local farmers.",
    github: "https://github.com/ctrl-zaeem/AI-Agricultural-Assistant",
    demo: "https://drive.google.com/file/d/1OgEjl6mPaAHHCsZSJdVEOhdsy9SqdYjY/view?usp=sharing",
  },
  {
    n: "02",
    title: "NexLogis.ai",
    tag: "Full-Stack · DevOps",
    year: "2026",
    desc: "AI Powered courier rate aggregator built with FastAPI and React that dynamically calculates and matches courier services based on user priorities.",
    github: "https://github.com/ctrl-zaeem/Devops_Project",
    demo: "https://drive.google.com/file/d/1iRjdk30gx6mTK3W2KIT4oi51AeUNTLbi/view?usp=sharing"
  },
  {
    n: "03",
    title: "A Generative Model for Topic-Based Tweet and Caption Generation",
    tag: "Generative Models · NLP",
    year: "2025",
    desc: "Fine-tuned a Gemma 3 LLM using Unsloth notebook on a curated dataset of tweets and captions, optimizing the model's ability to generate engaging, high-context responses.",
    github: "https://github.com/ctrl-zaeem/A-conditional-generative-model-for-topic-based-Tweet-caption-generation",
    demo: "/demo-gallery.html",
  },
  {
    n: "04",
    title: "n8n-Based Agentic Chatbot for Restaurants",
    tag: "Agentic Chatbots · n8n",
    year: "2025",
    desc: "Developed a fully automated restaurant system using n8n and Gemini to manage conversational order taking, storing in database (mongodb) and ending when user was satisfied",
    github: "",
    demo: "",
  },
  {
    n: "05",
    title: "Nim Game AI",
    tag: "Reinforcement Learning · Theory",
    year: "2024",
    desc: "Engineered an unbeatable game-theory decision agent trained via Reinforcement Learning policies to calculate mathematically optimal moves and ensure consistent victories.",
    github: "",
    demo: "",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Selected Work" title="A small body of careful work." />

        <div className="mt-20 divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.n} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center gap-4 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-foreground/40" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </span>
        <div className="h-px w-10 bg-foreground/40" />
      </div>
      <h2 className="font-display whitespace-nowrap text-5xl leading-[1] tracking-tight md:text-7xl">
        {title}
      </h2>
    </div>
  );
}

function ProjectRow({
  n,
  title,
  tag,
  year,
  desc,
  github,
  demo,
  index,
}: {
  n: string;
  title: string;
  tag: string;
  year: string;
  desc: string;
  github: string;
  demo: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative grid grid-cols-12 items-center gap-6 py-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Hover sheen */}
      <div className="pointer-events-none absolute inset-x-0 -inset-y-px origin-left scale-x-0 bg-gradient-to-r from-foreground/[0.06] via-foreground/[0.02] to-transparent opacity-0 transition-all duration-700 group-hover:scale-x-100 group-hover:opacity-100" />

      <span className="col-span-2 font-mono text-sm text-muted-foreground md:col-span-1">
        {n}
      </span>

      <div className="col-span-10 md:col-span-4">
        <h3 className="font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">
          {title}
        </h3>
      </div>

      <p className="col-span-12 text-sm text-muted-foreground md:col-span-3">
        {desc}
      </p>

      <div className="col-span-12 font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-2">
        {tag}
      </div>

      <div className="col-span-12 flex items-center justify-end gap-2 md:col-span-2">
        <span className="font-mono text-xs text-muted-foreground mr-1">{year}</span>

        {/* GitHub button - only show if link exists */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            title="View on GitHub"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}

        {/* Demo button - only show if link exists */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            title="Watch Demo"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <path d="M2 1.5l6 3.5-6 3.5V1.5z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}