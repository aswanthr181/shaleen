const skillCategories = [
  {
    title: "Controls & Dynamics",
    skills: ["Vehicle Dynamics", "Ride & Handling", "Kinematics & Compliance (K&C)", "Multibody Dynamics (MBD)", "Vehicle Stability Control (VSC/ESC)", "Nonlinear Control (FBL, SMC)", "Model Predictive Control (MPC)", "State Estimation"],
  },
  {
    title: "Simulation & CAE Tools",
    skills: ["MATLAB/Simulink",  "MSC ADAMS/Car", "ADAMS/View", "CarSim","IPG CarMaker", "Siemens TestLab", "Altair HyperMesh",  "Lotus Shark"],
  },
  {
    title: "Programming",
    skills: ["MATLAB", "Python",  "ADAMS CMD Scripting" ,"C++"],
  },
  {
    title: "CAD",
    skills: ["SolidWorks", "Siemens NX", "CATIA V5"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono">Skills</span> 
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
