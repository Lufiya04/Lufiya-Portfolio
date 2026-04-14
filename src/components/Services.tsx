import { Layers, Globe, Smartphone, Palette, PenTool, Image, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Layers, title: "UI/UX Design", desc: "Creating intuitive and delightful user interfaces and experiences.", color: "primary" },
  { icon: Globe, title: "Website Design", desc: "Modern, responsive website designs that captivate audiences.", color: "accent" },
  { icon: Smartphone, title: "Mobile App Design", desc: "Clean and functional mobile app interfaces for iOS & Android.", color: "peach" },
  { icon: Palette, title: "Branding", desc: "Building cohesive brand identities that tell your story.", color: "primary" },
  { icon: PenTool, title: "Logo Design", desc: "Memorable logos that represent your brand essence.", color: "accent" },
  { icon: Image, title: "Poster Design", desc: "Eye-catching posters and marketing materials.", color: "peach" },
];

const colorMap: Record<string, { bg: string; text: string; glow: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", glow: "group-hover:shadow-primary/10" },
  accent: { bg: "bg-accent/10", text: "text-accent", glow: "group-hover:shadow-accent/10" },
  peach: { bg: "bg-peach/10", text: "text-peach", glow: "group-hover:shadow-peach/10" },
};

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="Services" title="What I Can Do" visible={visible} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.title}
                className={`glass rounded-2xl p-6 group cursor-default hover:scale-[1.03] transition-all ${c.glow} hover:shadow-2xl relative overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${300 + i * 100}ms`, transitionDuration: "700ms" }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${c.bg} ${c.text} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <s.icon size={22} />
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full ${c.bg} opacity-0 group-hover:opacity-50 transition-opacity blur-2xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
