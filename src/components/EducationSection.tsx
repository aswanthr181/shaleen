import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      degree: "M.S. Automotive Engineering",
      institution: "Clemson University — CU-ICAR",
      location: "Greenville, SC",
      period: "2025–2027",
      grade: "GPA: 3.71/4.0",
      current: true,
      link: "https://cuicar.com/",
      coursework: [
        "Dynamic Performance of Vehicles",
        "Control Systems Engineering",
        "Vehicle Testing & Characterization",
        "Automotive Safety & Stability",
        "Tires",
        "Automotive Lightweight Optimization"
      ]
    },
    {
      degree: "B.Tech (Hons.) Mechanical Engineering",
      institution: "Rajiv Gandhi Institute of Technology, APJAKTU",
      location: "Kottayam, Kerala",
      period: "2018–2022",
      grade: "GPA: 8.32/10",
      current: false,
      link: "https://www.rit.ac.in/",
      coursework: []
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/50 hover:border-primary transition-colors"
            >
              {edu.current && (
                <span className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </span>
              )}
              {!edu.current && (
                <span className="absolute -left-2 top-1 w-4 h-4 bg-muted-foreground rounded-full" />
              )}
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {edu.current && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      Current
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {edu.degree}
                </h3>
                
                <div className="mb-2">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-medium hover:underline cursor-pointer transition-colors"
                  >
                    {edu.institution}
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                
                {edu.location && (
                  <p className="text-muted-foreground text-sm mb-2">
                    {edu.location}
                  </p>
                )}
                
                {edu.grade && (
                  <div className="flex items-center gap-2 mt-3 mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {edu.grade}
                    </span>
                  </div>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      Relevant Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <Badge key={cIdx} variant="outline" className="text-xs py-0.5 bg-secondary/20">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
