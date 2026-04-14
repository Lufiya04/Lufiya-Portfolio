interface Props {
  label: string;
  title: string;
  visible: boolean;
}

const SectionHeading = ({ label, title, visible }: Props) => (
  <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-4 tracking-wider uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {label}
    </div>
    <h2 className="text-3xl md:text-5xl font-bold">
      {title.split(" ").map((word, i) => (
        <span key={i} className={i === title.split(" ").length - 1 ? "gradient-text" : ""}>
          {word}{" "}
        </span>
      ))}
    </h2>
  </div>
);

export default SectionHeading;
