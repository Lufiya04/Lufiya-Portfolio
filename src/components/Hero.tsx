import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

const roles = ["UI/UX Designer", "Web Designer", "Graphic Designer", "Creative Thinker"];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      timeout = setTimeout(() => undefined, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Interactive gradient that follows mouse */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(var(--primary) / 0.12), transparent 40%),
            radial-gradient(600px circle at ${100 - mousePos.x * 80}% ${100 - mousePos.y * 80}%, hsl(var(--accent) / 0.08), transparent 40%),
            radial-gradient(500px circle at 50% 50%, hsl(var(--peach) / 0.06), transparent 50%)
          `,
        }}
      />

      {/* Animated mesh lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating orbs */}
      {[
        { size: "w-64 h-64", pos: "top-[10%] -left-32", color: "primary", dur: "20s", delay: "0s" },
        { size: "w-48 h-48", pos: "bottom-[15%] -right-24", color: "accent", dur: "25s", delay: "5s" },
        { size: "w-36 h-36", pos: "top-[60%] left-[10%]", color: "peach", dur: "18s", delay: "2s" },
      ].map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.pos} ${orb.size} rounded-full bg-${orb.color}/5 blur-3xl animate-[float_${orb.dur}_ease-in-out_infinite_${orb.delay}]`}
          style={{
            animation: `float ${orb.dur} ease-in-out infinite ${orb.delay}`,
          }}
        />
      ))}

      {/* Floating sparkle particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`p${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + i * 16}%`,
            animation: `float ${5 + i * 1.5}s ease-in-out infinite ${i * 0.8}s, pulse 3s ease-in-out infinite ${i * 0.5}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6 tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text block mt-1 relative">
              Lufiya Banu
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 7 Q50 0 100 4 Q150 8 200 1" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <div className="flex items-center gap-3 mb-6 h-8">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary to-transparent" />
            <h2 className="text-base md:text-lg text-muted-foreground font-light tracking-wide font-mono">
              {displayed}
              <span className="animate-pulse text-primary ml-0.5">|</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-lg mb-10 leading-relaxed text-sm md:text-base">
            Creative and passionate fresher specializing in UI/UX, web, and graphic design.
            Focused on crafting intuitive and visually appealing user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group relative px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-peach opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="group px-7 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary/50 transition-all hover:scale-105 backdrop-blur-sm relative overflow-hidden flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <svg className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
            {[
              { value: "4+", label: "Internships" },
              { value: "5+", label: "Projects" },
              { value: "2025", label: "CSE Graduate" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.8 + i * 0.15}s` }}
              >
                <p className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Profile image */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            {/* Animated glow rings */}
            <div className="absolute inset-[-30px] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-peach/20 blur-3xl animate-pulse" />
            <div className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-[-35px] rounded-full border border-dashed border-accent/15 animate-[spin_60s_linear_infinite_reverse]" />

            {/* Main image */}
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden gradient-border group">
              <img
                src={profileImg}
                alt="Lufiya Banu - UI/UX Designer"
                width={512}
                height={512}
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badges with glassmorphism */}
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 animate-fade-in shadow-lg hover:scale-110 transition-transform cursor-default" style={{ animationDelay: "0.6s" }}>
              <p className="text-2xl font-bold gradient-text">CSE</p>
              <p className="text-[10px] text-muted-foreground">Graduate 2025</p>
            </div>

            <div className="absolute -top-3 -left-3 glass rounded-2xl px-4 py-2.5 animate-fade-in shadow-lg hover:scale-110 transition-transform cursor-default" style={{ animationDelay: "0.8s" }}>
              <p className="text-sm font-semibold text-accent">Designer</p>
            </div>

            <div className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 animate-fade-in shadow-lg hover:scale-110 transition-transform cursor-default" style={{ animationDelay: "1s" }}>
              <p className="text-xs font-semibold text-peach">Creative</p>
            </div>

            {/* Decorative dots */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div
                key={deg}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
                style={{
                  top: `${50 + 54 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 54 * Math.cos((deg * Math.PI) / 180)}%`,
                  animation: `pulse 2s ease-in-out infinite ${deg / 360}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border/50 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
