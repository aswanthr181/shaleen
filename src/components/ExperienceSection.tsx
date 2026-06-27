const experiences = [
  {
    role: "Project Engineer II | MBD | Tata Motors ",
    company: "Applus+ IDIADA",
    period: "2022 - 2025",
    description: "Developed firmware for IoT devices using ARM Cortex-M microcontrollers.",
  },
  {
    role: "SEC Member ",
    company: "SAE RIT",
    period: "2019 - 2022",
    description: "Conducted research on low-power wireless communication protocols.",
  },
];


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono">Experience</span> 
        </h2>
        <div className="max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
              <p className="text-primary font-mono text-sm mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
