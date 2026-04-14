import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import emailjs from "@emailjs/browser";
import { useToast } from "../hooks/use-toast";

const SERVICE_ID = "service_bsy6siq";
const TEMPLATE_ID = "template_fj1oeh8";
const PUBLIC_KEY = "h5s39DmDhuMqYjqQB";

const socials = [
  { icon: Mail, label: "Email", value: "lufiyalathif004@gmail.com", href: "mailto:lufiyalathif004@gmail.com", color: "primary" },
  { icon: Phone, label: "Phone", value: "7448977893", href: "tel:7448977893", color: "accent" },
  { icon: Linkedin, label: "LinkedIn", value: "Lufiya Banu", href: "https://www.linkedin.com/in/lufiya-banu-4027b5253", color: "primary" },
  { icon: Github, label: "GitHub", value: "Lufiya04", href: "https://github.com/Lufiya04", color: "peach" },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
  peach: { bg: "bg-peach/10", text: "text-peach" },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { ref, visible } = useScrollReveal();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);

      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="Contact" title="Let's Work Together" visible={visible} />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left — info */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always excited to connect with fellow creatives and potential employers.
            </p>

            <div className="space-y-3">
              {socials.map((s) => {
                const c = colorMap[s.color];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass rounded-xl p-4 group hover:scale-[1.02] transition-all"
                  >
                    <div className={`p-2.5 rounded-xl ${c.bg} ${c.text} group-hover:scale-110 transition-transform`}>
                      <s.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-medium truncate">{s.value}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              <span>Chennai, India</span>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className={`glass rounded-2xl p-8 space-y-5 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <h3 className="font-semibold text-lg mb-2">Send a Message</h3>

            {[
              { key: "name", type: "text", placeholder: "Your Name", max: 100 },
              { key: "email", type: "email", placeholder: "Your Email", max: 255 },
            ].map((f) => (
              <div key={f.key} className="relative group">
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  maxLength={f.max}
                  className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary transition-all text-sm"
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                />
              </div>
            ))}

            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary transition-all resize-none text-sm"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition-all group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-peach opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {sending ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
