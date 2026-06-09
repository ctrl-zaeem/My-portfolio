import { useReveal } from "@/hooks/use-reveal";

import { RESUME_URL } from "./links";

export function Contact() {
  const { ref, visible } = useReveal();

  const links = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ctrl-zaeem",
      href: "https://www.linkedin.com/in/ctrl-zaeem/",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.79v2.19h.07c.67-1.27 2.31-2.61 4.75-2.61 5.08 0 6.02 3.34 6.02 7.68V24h-5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24h-5V8z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/ctrl-zaeem",
      href: "https://github.com/ctrl-zaeem",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.85 10.91.58.1.79-.25.79-.56v-2.17c-3.19.69-3.86-1.35-3.86-1.35-.53-1.34-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.15c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },
    {
      label: "Resume",
      value: "zaeemulhaq_Resume",
      href: RESUME_URL,
      icon: (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      ),
    },
    {
      label: "Based in",
      value: "Karachi, Pakistan",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-border px-6 py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 100%, oklch(1 0 0) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-foreground/40" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            info
          </span>
        </div>

        <h2
          className={`mt-8 font-display text-balance text-[clamp(3.5rem,12vw,12rem)] leading-[0.9] tracking-tight transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="gradient-text">Let's</span>
          <br />
          <span className="italic text-muted-foreground">have a</span>{" "}
          <span className="gradient-text">conversation!</span>
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-md text-balance text-lg text-muted-foreground">
              Currently looking for new opportunities. Hit me up!
            </p>

            <a
              href="mailto:zaeemulhaq2003@gmail.com"
              className="group mt-10 inline-flex items-center gap-4 font-display text-3xl tracking-tight underline-grow md:text-5xl"
            >
              zaeemulhaq2003@gmail.com
              <svg
                className="transition-transform group-hover:rotate-45"
                width="28"
                height="28"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </a>
          </div>

          <div className="space-y-6 md:pl-12">
            {links.map((x) => (
              <div
                key={x.label}
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {x.label}
                </span>

                {x.href ? (
                  <a
                    href={x.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm underline-grow hover:opacity-70 transition"
                  >
                    {x.icon}
                    {x.value}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {x.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
          Available for select work
        </div>

        <div>Karachi / Remote</div>
      </div>
    </footer>
  );
}