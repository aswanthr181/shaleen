import { useState } from "react";
import { Award, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const certifications = [
  {
    code: "ADM740",
    title: "Vehicle Modeling using ADAMS/Car",
    issuer: "MSC Software",
    description: "Full-vehicle multi-body dynamics modelling, suspension kinematics and compliance analysis, and ride & handling evaluation in MSC ADAMS/Car.",
    pdf: "/certificates/Vehicle_modeling_CARCertificate.pdf",
  },
  {
    code: "ADM704B",
    title: "ADAMS/View Scripting, Macros & GUI Customization",
    issuer: "MSC Software",
    description: "Custom GUI development, macro scripting, and automation of recurring modelling and analysis procedures in ADAMS/View.",
    pdf: "/certificates/ADAM_Certificate .pdf",
  },
  {
    code: "ADM705",
    title: "Python Scripting in ADAMS",
    issuer: "MSC Software",
    description: "Integrating Python with ADAMS for custom analysis routines, data extraction, workflow automation, and tool development.",
    pdf: "/certificates/Python_Certificate.pdf",
  },
];

const CertificationsSection = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Decorative background glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Award className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                </div>

                <span className="self-start text-xs font-mono font-bold text-primary tracking-wider uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/25">
                  {cert.code}
                </span>

                <h3 className="text-xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-sm font-semibold text-primary/80 font-mono mb-4">
                  {cert.issuer}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>

                <div className="mt-6 pt-4 border-t border-border/50 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    onClick={() => setSelectedPdf(cert.pdf)}
                  >
                    <Eye className="w-4 h-4" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Dialog */}
      <Dialog open={!!selectedPdf} onOpenChange={(open) => !open && setSelectedPdf(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden flex flex-col bg-background">
          <DialogHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
            <DialogTitle className="text-lg font-bold font-mono text-foreground">
              Certificate Viewer
            </DialogTitle>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 mr-6"
              asChild
            >
              <a href={selectedPdf || ""} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </a>
            </Button>
          </DialogHeader>
          <div className="flex-1 w-full h-full bg-muted/30">
            {selectedPdf && (
              <iframe
                src={`${selectedPdf}#toolbar=0`}
                className="w-full h-full border-none"
                title="Certificate PDF"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;
