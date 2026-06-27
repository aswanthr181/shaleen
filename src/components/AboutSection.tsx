const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          <span className="text-primary font-mono">About Me</span> 
        </h2>
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Graduate Automotive Engineering student at Clemson University (CU-ICAR) with nearly 3 years of professional experience in vehicle dynamics simulation and multi-body dynamics. My work spans MBD model development in ADAMS, ride & handling analysis, nonlinear stability control, and sensor-based tire characterization. I'm drawn to problems that sit at the intersection of physics, simulation, and control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
