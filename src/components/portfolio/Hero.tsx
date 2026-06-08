import { useEffect, useState } from "react";

const ROLES = ["Developer", "AI Engineer", "Learner"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % ROLES.length);
        return;
      }

      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  const logos = [
    {
      el: (
        <img
          src="https://img.icons8.com/ios-glyphs/30/react.png"
          alt="react"
          className="h-12 w-auto"
        />
      ),
    },
    {
      el: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          alt="nextjs"
          className="h-12 w-auto opacity-80"
        />
      ),
    },
    {
      el: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
          alt="python"
          className="h-12 w-auto opacity-80"
        />
      ),
    },
    {
      el: (
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/postgreesql.png"
          alt="sql"
        />
      ),
    },
    {
      el: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
          alt="mongodb"
          className="h-12 w-auto opacity-80"
        />
      ),
    },
    {
      el: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg"
          alt="fastapi"
          className="h-12 w-auto opacity-80"
        />
      ),
    },
    {
      el: (
        <img
          src="/n8n.svg"
          alt="n8n"
          className="h-12 w-auto opacity-80"
        />
      ),
    },
    {
      el: (
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material/24/amazon-web-services.png"
          alt="aws"
        />
      ),
    },
  ];

  return (
    <section
      id="top"
      className="relative grain-bg noise flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-foreground/5 blur-3xl animate-float-slow" />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/3 h-[28rem] w-[28rem] rounded-full bg-foreground/[0.04] blur-3xl animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-3 animate-fade-up">
          <div className="h-px w-12 bg-foreground/40" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Karachi, Pakistan
          </span>
        </div>

        <h1
          className="font-display mt-8 text-[clamp(3.5rem,11vw,11rem)] leading-[0.92] tracking-tight animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="gradient-text">Zaeem ul Haq</span>
          <br />
          <span className="italic text-muted-foreground">
            {text}
            <span className="inline-block h-[0.65em] w-[2px] translate-y-[0.05em] bg-muted-foreground animate-blink" />
          </span>
        </h1>

        <div
          className="mt-14 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Zaeem ul Haq, a BS(AI) graduate from FAST NUCES and developer
            with over two years of experience in building robust web
            applications and Agentic AI systems. Explore my portfolio to see my
            builds, and let's connect if you have any questions!
          </p>

          <div className="flex flex-col gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Currently
            </div>
            <div className="text-sm">Open for opportunities</div>

            <a
              href="#contact"
              className="group mt-4 inline-flex w-fit items-center gap-3 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:gap-5"
            >
              Contact me
              <svg
                className="transition-transform group-hover:rotate-45"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-border py-6">
        <div className="marquee flex w-max items-center gap-24 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-24">
              {logos.map((item, i) => (
                <div key={`${dup}-${i}`} className="flex items-center">
                  {item.el}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}