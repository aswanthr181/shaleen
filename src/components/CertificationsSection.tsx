import { Award, ShieldCheck, FileCheck } from "lucide-react";

const certifications = [
  {
    code: "ADM740",
    title: "Vehicle Modeling using ADAMS/Car",
    issuer: "MSC Software",
    description: "Full-vehicle multi-body dynamics modelling, suspension kinematics and compliance analysis, and ride & handling evaluation in MSC ADAMS/Car.",
  },
  {
    code: "ADM704B",
    title: "ADAMS/View Scripting, Macros & GUI Customization",
    issuer: "MSC Software",
    description: "Custom GUI development, macro scripting, and automation of recurring modelling and analysis procedures in ADAMS/View.",
  },
  {
    code: "ADM705",
    title: "Python Scripting in ADAMS",
    issuer: "MSC Software",
    description: "Integrating Python with ADAMS for custom analysis routines, data extraction, workflow automation, and tool development.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/15">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary font-mono">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Decorative background glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Award className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                </div>

                <span className="text-xs font-mono font-bold text-primary tracking-wider uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/25">
                  {cert.code}
                </span>

                <h3 className="text-xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-sm font-semibold text-primary/80 font-mono mb-4">
                  {cert.issuer}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
