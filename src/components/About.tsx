import { GraduationCap, Target, Palette, Heart, Code, Sparkles } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Code, value: "4+", label: "Internships", color: "primary" },
  { icon: Sparkles, value: "5+", label: "Projects", color: "accent" },
  { icon: Heart, value: "100%", label: "Passion", color: "peach" },
];

const cards = [
  {
    icon: GraduationCap, title: "Education", color: "primary",
    lines: ["BE in Computer Science & Engineering", "Dhaanish Ahmed College of Engineering · 2025"],
  },
  {
    icon: Target, title: "Career Goal", color: "accent",
    lines: ["Getting placed in a UI/UX or web design role where I can grow and make an impact."],
  },
  {
    icon: Palette, title: "Design Philosophy", color: "peach",
    lines: ["User-centered, clean, and functional design that balances aesthetics with usability."],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "hover:border-primary/40" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "hover:border-accent/40" },
  peach: { bg: "bg-peach/10", text: "text-peach", border: "hover:border-peach/40" },
};

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="About Me" title="Designing Solutions, Not Visuals" visible={visible} />

        {/* Highlight counters */}
        <div className={`flex justify-center gap-6 md:gap-12 mb-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl px-6 py-5 text-center group hover:scale-105 transition-transform cursor-default">
              <div className={`mx-auto w-10 h-10 rounded-xl ${colorMap[h.color].bg} ${colorMap[h.color].text} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <h.icon size={20} />
              </div>
              <p className="text-2xl font-bold gradient-text">{h.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{h.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I'm Lufiya Banu, an aspiring UI/UX Designer and Web Designer with a strong passion for creating intuitive, user-friendly, and visually stunning digital experiences. As a recent Computer Science and Engineering graduate from Dhaanish Ahmed College of Engineering (Class of 2025), I bring a unique blend of technical knowledge and creative vision.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              My journey in design has been fueled by multiple internship experiences where I've worked on real-world projects, from AI-powered safety systems to event planning platforms. I'm driven by the goal of securing a professional role where I can contribute meaningfully to the design industry.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform">
                Let's Connect
              </a>
              <a href="#portfolio" className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-primary/50 hover:scale-105 transition-all">
                See My Work
              </a>
            </div>
          </div>

          <div className={`space-y-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`glass rounded-xl p-5 ${colorMap[card.color].border} transition-all group cursor-default hover:scale-[1.02]`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2.5 rounded-xl ${colorMap[card.color].bg} group-hover:scale-110 transition-transform`}>
                    <card.icon className={colorMap[card.color].text} size={20} />
                  </div>
                  <h3 className="font-semibold">{card.title}</h3>
                </div>
                {card.lines.map((line, li) => (
                  <p key={li} className={`${li === 0 ? "text-sm" : "text-xs"} text-muted-foreground`}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
