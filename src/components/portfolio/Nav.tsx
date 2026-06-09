import { useEffect, useState } from "react";

import { RESUME_URL } from "./links";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const updateTime = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );

    updateTime();
    const id = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  const itemClass =
    "flex items-center justify-center px-5 py-5 text-sm font-medium text-white/60 transition-all duration-300 hover:text-white md:px-8 md:text-base";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex w-full items-center transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(8,18,45,0.92)] backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5),0_1px_0_rgba(59,130,246,0.12)] border-b border-[rgba(59,130,246,0.15)]"
            : "bg-[rgba(8,18,45,0.82)] backdrop-blur-md border-b border-[rgba(59,130,246,0.10)] shadow-[0_2px_16px_-4px_rgba(0,0,0,0.35)]"
        }`}
      >
        <div className="flex w-full items-center px-8">

          {/* LEFT */}
          <div className="flex min-w-[160px] justify-start">
            {scrolled && (
              <a href="#top" className={`${itemClass} gap-2 font-mono`}>
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Jump Back</span>
              </a>
            )}
          </div>

          {/* CENTER */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-10">

              {links.map((l) => (
                <a key={l.href} href={l.href} className={itemClass}>
                  {l.label}
                </a>
              ))}

              {/* RESUME BUTTON (CLEAN PILL STYLE) */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-5 py-2
                  rounded-full
                  border border-white/20
                  text-white/60
                  text-sm font-medium
                  transition-all duration-300
                  hover:text-white
                  hover:border-white/40
                "
              >
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
                Resume
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex min-w-[160px] justify-end">
            <div className={`${itemClass} gap-2 font-mono`}>
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="whitespace-nowrap">{time}</span>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}