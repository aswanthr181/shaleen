import { Mail, MapPin, Send, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaPhone} from 'react-icons/fa'


const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono">Contact</span> 
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Let's Work Together
          </h3>
          <p className="text-muted-foreground mb-8">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll do my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>shaleej@clemson.edu</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Greenville, South Carolina</span>
            </div>
          </div>
          
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:shaleej@clemson.edu">
              <Mail className="h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          <div className="flex  items-center justify-center gap-4 mt-8">
          <Button variant="hero" size="default" asChild>
            <a href="tel:+18644518757">
              <FaPhone className="h-5 w-5" />
              
            </a>
          </Button>
          <Button variant="hero" size="default" asChild>
            <a href="https://wa.me/18644518757">
              <IoLogoWhatsapp className="h-5 w-5" />
              
            </a>
          </Button>
          <Button variant="hero" size="default" asChild>
            <a href="https://www.linkedin.com/in/shaleen-jayaraj-267859167/">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
