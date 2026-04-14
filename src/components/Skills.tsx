import { Figma, Layout, Code, Palette, Monitor } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "UI/UX Design", level: 90, icon: Layout, color: "primary" },
  { name: "Figma", level: 95, icon: Figma, color: "accent" },
  { name: "Web Design", level: 80, icon: Monitor, color: "peach" },
  { name: "Front-End Design", level: 75, icon: Code, color: "primary" },
  { name: "Graphic Design", level: 85, icon: Palette, color: "accent" },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; bar: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", ring: "stroke-primary", bar: "from-primary to-primary/60" },
  accent: { bg: "bg-accent/10", text: "text-accent", ring: "stroke-accent", bar: "from-accent to-accent/60" },
  peach: { bg: "bg-peach/10", text: "text-peach", ring: "stroke-peach", bar: "from-peach to-peach/60" },
};

const Skills = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-peach/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="Skills" title="What I'm Good At" visible={visible} />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => {
            const c = colorMap[skill.color];
            const circumference = 2 * Math.PI * 40;
            const offset = circumference - (skill.level / 100) * circumference;

            return (
              <div
                key={skill.name}
                className={`glass rounded-2xl p-5 flex flex-col items-center text-center group hover:scale-105 transition-all cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${300 + i * 120}ms`, transitionDuration: "700ms" }}
              >
                {/* Circular progress */}
                <div className="relative w-20 h-20 mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
                    <circle
                      cx="50" cy="50" r="40" fill="none"
                      className={`${c.ring} transition-all duration-1000 ease-out`}
                      strokeWidth="4" strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={visible ? offset : circumference}
                    />
                  </svg>
                  <div className={`absolute inset-0 flex items-center justify-center ${c.text}`}>
                    <skill.icon size={22} className="group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <p className="text-sm font-semibold mb-1">{skill.name}</p>
                <p className={`text-xs font-mono ${c.text}`}>{skill.level}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
