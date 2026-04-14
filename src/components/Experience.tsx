import { Briefcase, Rocket } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const experiences = [
  { role: "UI/UX Design Intern", company: "Studio Infiniti", period: "Oct 2024 – May 2025", desc: "Designed user interfaces and improved user flows for client projects.", color: "primary" },
  { role: "Python Programming Intern", company: "Codsoft", period: "Jul 2024 – Aug 2024", desc: "Built automation scripts and data-driven applications.", color: "accent" },
  { role: "UI/UX Intern", company: "TAS Innovation", period: "Aug 2023 – Sept 2023", desc: "Collaborated on mobile app designs and usability testing.", color: "peach" },
  { role: "Website & Product Development Intern", company: "Farm Direct", period: "Jan 2023 – Feb 2023", desc: "Developed web features for an agri-tech platform.", color: "primary" },
  { role: "Guardian AI – Secure Cab", company: "Academic Project", period: "Real-time AI monitoring system", desc: "AI-powered safety monitoring for cab services.", color: "accent", isProject: true },
];

const dotColor: Record<string, string> = {
  primary: "bg-primary shadow-primary/40",
  accent: "bg-accent shadow-accent/40",
  peach: "bg-peach shadow-peach/40",
};

const borderHover: Record<string, string> = {
  primary: "hover:border-primary/30",
  accent: "hover:border-accent/30",
  peach: "hover:border-peach/30",
};

const Experience = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="Experience" title="My Journey So Far" visible={visible} />

        <div className="max-w-2xl mx-auto relative">
          {/* Gradient timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-peach opacity-30" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative pl-16 pb-10 last:pb-0 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-[18px] top-4 w-3 h-3 rounded-full ${dotColor[exp.color]} shadow-lg z-10 ring-4 ring-background`} />

              <div className={`glass rounded-xl p-6 ${borderHover[exp.color]} transition-all group hover:scale-[1.02] cursor-default`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.isProject ? <Rocket size={14} className="text-accent" /> : <Briefcase size={14} className="text-muted-foreground" />}
                      <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
