import { Download, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { title } from "process";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Shaleen_Jayaraj_Resume.pdf"; 
    link.download = "Shaleen_Jayaraj_Resume.pdf"; 
  // Trigger the download
     link.click();
  };

  const socialMedia=[
    {title:"Linkedin", link:"https://www.linkedin.com/in/shaleen-jayaraj/", icon:Linkedin},
    {title:"Email", link:"mailto:shaleenjayaraj@gmail.com", icon:Mail},
    {title:"Instagram", link:"https://www.instagram.com/shaleenjayaraj/", icon:Instagram},
  ]

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Shaleen<span className="text-gradient">Jayaraj</span>
            </h1>

            {/* Designation */}
            <p 
              className="text-xl sm:text-2xl text-primary font-mono font-medium mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Vehicle Dynamics Engineer · M.S. Automotive Engineering, Clemson University (CU-ICAR)
            </p>

            {/* Description */}
            <p 
              className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              "Vehicle Dynamics Engineer with a bias for data, simulation, and getting the physics right."
              <br /><br />
              Graduate Automotive Engineering student at Clemson University (CU-ICAR) with nearly 3 years of professional experience in vehicle dynamics simulation and
multibody dynamics (MBD). Experienced in ride & handling analysis, K&C studies, vehicle stability control, and CAE model correlation. Proficient in
MATLAB/Simulink, CarSim, and MSC ADAMS, with experience developing high-fidelity vehicle models and automating CAE workflows.
            </p>

            {/* Resume Button */}
            <div 
              className="mb-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleDownloadResume}
                className="group"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            {/* Social Icons */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://www.linkedin.com/in/shaleen-jayaraj-267859167/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:shaleej@clemson.edu"
                className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              {/* <a
                href="https://www.instagram.com/shaleenjayaraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Right Side - Avatar */}
          <div 
            className="flex-shrink-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
              
              {/* Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary/30 overflow-hidden bg-gradient-to-br from-secondary to-muted">
                {/* Placeholder Avatar */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl lg:text-9xl font-bold text-primary/20">
                    <img height={380} width={380} src="https://media.licdn.com/dms/image/v2/D4E03AQGiXIrQ5izI3w/profile-displayphoto-crop_800_800/B4EZwFX5sEGsAU-/0/1769616678935?e=1784160000&v=beta&t=eRQKYAiPFegAy_OyyWBq0Q6fqt0uxupzJhwNh5-nZYM" alt="" />
                  </div>
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/10" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/40 blur-sm" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/30 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
