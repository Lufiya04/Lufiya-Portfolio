import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Credo-Site",
    desc: "Payment gateway integration project with secure transaction handling.",
    tags: ["Web Design", "Payment"],
    gradient: "from-primary/30 via-primary/10 to-accent/20",
    icon: "💳",
    link: "https://credo-site.vercel.app/",
  },
  {
    title: "Skill Navigation App",
    desc: "MERN stack-based application for skill development and career navigation.",
    tags: ["MERN", "UI/UX"],
    gradient: "from-accent/30 via-accent/10 to-peach/20",
    icon: "🧭",
    link: "https://skill-plus-chi.vercel.app/",
  },
  {
    title: "BellsnBrides",
    desc: "Event planning website for weddings and celebrations.",
    tags: ["Web Design", "Branding"],
    gradient: "from-peach/30 via-peach/10 to-primary/20",
    icon: "💍",
    link: "https://bellsnbrides.com/",
  },
  {
    title: "Udemy Clone",
    desc: "A feature-rich replica of the Udemy learning platform.",
    tags: ["Front-End", "UI/UX"],
    gradient: "from-primary/20 via-accent/10 to-peach/30",
    icon: "📚",
    link: "https://udemy-clone-bay.vercel.app/",
  },
];

const Portfolio = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="portfolio" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="Portfolio" title="Featured Projects" visible={visible} />

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass rounded-2xl overflow-hidden group hover:scale-[1.03] transition-all hover:shadow-2xl cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + i * 150}ms`, transitionDuration: "700ms" }}
            >
              {/* Project visual header */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{p.icon}</span>

                {/* Mesh pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass text-primary hover:scale-110 transition-transform">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:gradient-text transition-all">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
