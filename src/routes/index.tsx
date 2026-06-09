import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaeem ul Haq - AI Engineer and Web Developer" },
      {
        name: "description",
        content:
          "Independent studio crafting brand systems, products, and motion for ambitious teams. Based in Berlin.",
      },
      {
        property: "og:title",
        content: "Zaeem ul Haq - AI Engineer and Web Developer",
      },
      {
        property: "og:description",
        content:
          "Independent studio crafting brand systems, products, and motion for ambitious teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}