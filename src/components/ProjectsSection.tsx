import { useState, useRef } from "react";
import { ExternalLink, Github, Info, Layers, Gauge, Activity, Cpu, Box, Shield, Settings, Compass, Zap, Brain, Wrench, LineChart, BookOpen, MapPin, Award, Briefcase, Play, Pause, X, Volume2, VolumeX, Maximize } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  team: string;
  teamId?: string;
  institution: string;
  role: string;
  year: string;
  overview: string;
  problemStatement?: string;
  designDecisions?: {
    category: string;
    selection: string;
    details: string;
  }[];
  powerPlant?: {
    motor: string;
    battery: string;
    propeller: string;
    esc: string;
  };
  structuralMaterials?: string;
  performanceResults?: {
    parameter: string;
    value: string;
  }[];
  stabilityAnalysis?: {
    longitudinal: string;
    directional: string;
    lateral: string;
  };
  cadManufacturing?: string;
  tags: string[];

  // BAJA SAE Specific fields
  specifications?: {
    system: string;
    specification: string;
  }[];
  rollCageFEA?: {
    loadCase: string;
    force: string;
    maxStress: string;
    maxDeformation: string;
    fos: string;
  }[];
  suspensionGeometry?: {
    parameter: string;
    front: string;
    rear: string;
  }[];

  // BTech Specific fields
  methodology?: {
    modelling: string;
    simulation: {
      description: string;
      parameters: { name: string; value: string }[];
      finding: string;
    };
  };
  mlComparison?: {
    lr: string;
    cnn: string;
    results: { metric: string; value: string }[];
  };
  suspensionHighlights?: {
    details: { label: string; value: string }[];
    takeaways: string[];
  };

  // Applus IDIADA Specific fields
  professionalExperience?: {
    location: string;
    duration: string;
    responsibilities: { title: string; details: string }[];
    certifications: string[];
  };

  // Generic / Placeholder fields
  highlights?: string[];
  placeholderNote?: string;

  // Truck Ride & Handling Specific fields
  truckRideHandlingDetails?: {
    images: {
      src: string;
      alt: string;
      caption: string;
    }[];
    highlights: string[];
  };

  // Skateboard Topology Optimization Specific fields
  skateboardDetails?: {
    images: {
      src: string;
      alt: string;
      caption: string;
    }[];
    highlights: string[];
  };

  // SAE Aero Design Specific fields
  aeroDesignDetails?: {
    video: {
      src: string;
      title: string;
    };
    images: {
      src: string;
      alt: string;
      caption: string;
    }[];
  };
}

const projects: Project[] = [
  // --- Professional ---
  {
    id: "applus-idiada-tata",
    title: "MBD & Vehicle Dynamics Engineering",
    subtitle: "Professional Experience at Applus+ IDIADA (TATA Motors ODC)",
    team: "Vehicle Dynamics Engineer",
    teamId: "Applus-IDIADA",
    institution: "Applus+ IDIADA (TATA Motors ODC) · Pune, India",
    role: "Vehicle Dynamics Engineer",
    year: "2025",
    overview: "Spent nearly three years embedded in an OEM vehicle dynamics development programme at Applus+ IDIADA on the TATA Motors ODC, working on multi-body dynamics modelling, K&C analysis, and vehicle dynamics attribute development for passenger vehicle programmes. This role bridged CAE simulation and physical test validation across multiple platforms simultaneously.",
    professionalExperience: {
      location: "Pune, India",
      duration: "August 2022 – April 2025 (~3 years)",
      responsibilities: [
        {
          title: "MBD Model Development & Maintenance",
          details: "Built and maintained full-vehicle multi-body dynamics models in MSC ADAMS/Car using Template Builder, Event Builder, and Road Builder. Integrated flex-body components for suspension and chassis, performed vehicle settling procedures for accurate static equilibrium, and maintained version control and traceability across programs. Developed and documented CAE workflow scripts in Python and ADAMS CMD to automate repetitive tasks, improving team efficiency and model consistency."
        },
        {
          title: "Kinematics & Compliance (K&C) Studies",
          details: "Executed K&C simulations to quantify bump steer, roll steer, camber compliance, and wheel rate characteristics. Proposed geometry changes and bushing stiffness modifications to improve handling predictability and steering response across load conditions."
        },
        {
          title: "Suspension Optimisation — DOE in ADAMS/Insight",
          details: "Applied Design of Experiments methodology in ADAMS/Insight to sweep suspension hardpoint positions and identify Pareto-optimal configurations meeting both ride comfort and handling attribute targets from curb weight to GVW loading."
        },
        {
          title: "Steering Wobble & Rack-Load Diagnostic",
          details: "Diagnosed a steering wobble issue on a passenger vehicle programme. Root-caused it to hydrobush stiffness and steering link geometry mismatch. Optimised both parameters — resulting in approximately $25 USD/vehicle cost saving by avoiding a more expensive component change."
        },
        {
          title: "Transient & Steady-State Handling",
          details: "Led cornering, braking, step steer, and ride analyses to evaluate and improve handling and stability. Delivered correlated simulation-to-test reports comparing ADAMS predictions against physical rig and road measurements."
        },
        {
          title: "Suspension Tuning Datasheets",
          details: "Released suspension tuning datasheets covering curb-to-GVW load cases, ensuring compliance with programme attribute targets and manufacturing tolerances."
        },
        {
          title: "Durability & Geometric Checks",
          details: "Performed DSPO, RLDA, wheel/ARB envelope checks, service load validation, and ground-clearance audits across vehicle programs."
        }
      ],
      certifications: [
        "ADM740 — Vehicle Modeling using ADAMS/Car",
        "ADM704B — ADAMS/View Scripting, Macros & GUI Customization",
        "ADM705 — Python Scripting in ADAMS"
      ]
    },
    tags: [
      "ADAMS/Car",
      "ADAMS/View",
      "MBD",
      "K&C Analysis",
      "Ride & Handling",
      "Vehicle Dynamics",
      "Suspension Tuning",
      "Python",
      "DOE",
      "ADAMS/Insight",
      "TATA Motors",
      "OEM",
      "Applus IDIADA"
    ]
  },

  {
    id: "nonlinear-stability-control",
    title: "Nonlinear Vehicle Stability Control",
    subtitle: "Clemson University — Control Systems & Automotive Safety",
    team: "Individual Project",
    institution: "Clemson University (Control Systems Engineering / Automotive Safety & Stability)",
    role: "Controls Engineer",
    year: "2026",
    overview: "Developed Feedback Linearization (FBL) and Sliding Mode Control (SMC) algorithms for yaw-rate tracking under FMVSS 126 Sine-with-Dwell and ISO 3888-1 Double Lane Change manoeuvres. Built and validated a 7-DOF nonlinear vehicle dynamics model in MATLAB/Simulink against high-fidelity CarSim reference models.",
    highlights: [
      "Developed Feedback Linearization (FBL) and Sliding Mode Control (SMC) algorithms for yaw-rate tracking under FMVSS 126 Sine-with-Dwell and ISO 3888-1 Double Lane Change manoeuvres.",
      "Built and validated a 7-DOF nonlinear vehicle dynamics model in MATLAB/Simulink against high-fidelity CarSim reference models.",
      "Implemented nonlinear tire-force and state-dependent cornering stiffness models to capture realistic tire saturation behaviour.",
      "SMC outperformed FBL: demonstrated improved yaw-rate tracking and reduced control chattering through robust sliding surface design."
    ],
    placeholderNote: "Yaw-rate tracking plots, phase portraits, control inputs, and DLC trajectory comparisons will be updated soon.",
    tags: [
      "Nonlinear Control",
      "Sliding Mode Control",
      "Feedback Linearization",
      "CarSim",
      "MATLAB/Simulink",
      "Vehicle Dynamics",
      "7-DOF Model",
      "Clemson"
    ]
  },

  {
    id: "vehicle-dynamics-tire-testing",
    title: "Vehicle Dynamics & Tire Testing",
    subtitle: "Clemson University — Vehicle Testing & Characterization",
    team: "Individual Project",
    institution: "Clemson University (Vehicle Testing & Characterization)",
    role: "Data Acquisition & Analysis Lead",
    year: "2025",
    overview: "Performed vehicle instrumentation, DAQ integration, and post-processing using Siemens TestLab to extract frequency response functions and vibration modes. Estimated axle cornering stiffness using nonlinear least-squares curve fitting and developed a nonlinear bicycle model in MATLAB to simulate fishhook and sine-sweep steering manoeuvres.",
    highlights: [
      "Performed vehicle instrumentation, DAQ integration, and post-processing using Siemens TestLab to extract frequency response functions, ride comfort metrics, vibration modes, and dynamic characteristics.",
      "Analysed on-track vehicle dynamics data in MATLAB: extracted tire parameters, quantified slip angles, steering response delay, and evaluated lateral tire grip utilisation during aggressive manoeuvres.",
      "Estimated front and rear axle cornering stiffness using nonlinear least-squares curve fitting with velocity-based binning to capture load-transfer-dependent tire behaviour.",
      "Developed and validated a nonlinear bicycle model integrating fitted tire force characteristics; simulated fishhook and sine-sweep steering manoeuvres; validated predictions against experimental test data."
    ],
    placeholderNote: "Bode plots, tire force curves, cornering stiffness vs. load plots, and experimental vs. model validation comparisons will be updated soon.",
    tags: [
      "Siemens TestLab",
      "Tire Characterisation",
      "Cornering Stiffness",
      "DAQ",
      "Frequency Response",
      "MATLAB",
      "Nonlinear Bicycle Model",
      "Clemson"
    ]
  },

  // --- Academic / Grad (Clemson) ---
  {
    id: "truck-ride-handling",
    title: "Ride & Handling Analysis of Trucks",
    subtitle: "Clemson University — Vehicle Testing & Characterization",
    team: "Individual Project",
    institution: "Clemson University (Vehicle Testing & Characterization)",
    role: "Vehicle Dynamics Developer",
    year: "2021",
    overview: "Built bicycle models for 2-axle and 3-axle trucks; performed transient handling analysis comparing understeer gradient, yaw response, and stability characteristics. Used PSD and RMS acceleration metrics to evaluate and compare ride comfort between axle configurations.",
    truckRideHandlingDetails: {
      images: [
        {
          src: "/project/Ride%20and%20Handling/rideFirst.jpg",
          alt: "Bicycle Model & Transient Handling Response",
          caption: "Bicycle Model Simulation & Transient Handling Response (Yaw Rate and Lateral Acceleration)"
        },
        {
          src: "/project/Ride%20and%20Handling/rideSecond.jpg",
          alt: "Understeer Gradient & Stability Characteristics",
          caption: "Understeer Gradient & Sideslip Angle Analysis"
        },
        {
          src: "/project/Ride%20and%20Handling/rideThird.jpg",
          alt: "PSD Acceleration & Ride Comfort Analysis",
          caption: "Power Spectral Density (PSD) of Vertical Acceleration at the seat"
        },
        {
          src: "/project/Ride%20and%20Handling/rideFourth.jpg",
          alt: "RMS Acceleration & Axle Configuration Comparison",
          caption: "RMS Acceleration Comparison between 2-Axle and 3-Axle configurations"
        }
      ],
      highlights: [
        "Built 2-axle and 3-axle truck bicycle models from first principles in MATLAB.",
        "Simulated step-steer and ramp-steer inputs to analyze yaw rate, sideslip angle, and lateral acceleration.",
        "Evaluated understeer gradient to assess vehicle stability and control authority at varying speeds.",
        "Performed power spectral density (PSD) analysis of vertical acceleration to evaluate ride comfort against ISO 2631 standards.",
        "Compared RMS acceleration across different road profiles (Class A to Class D) and axle configurations."
      ]
    },
    tags: [
      "MATLAB",
      "Bicycle Model",
      "Ride Model",
      "Understeer Gradient",
      "PSD",
      "RMS Acceleration",
      "Clemson"
    ]
  },
  {
    id: "skateboard-topology-opt",
    title: "Lightweight Skateboard Design",
    subtitle: "Clemson University — Automotive Lightweight Optimisation",
    team: "Individual Project",
    institution: "Clemson University (Automotive Lightweight Optimisation)",
    role: "Design & Optimization Engineer",
    year: "2026",
    overview: "Performed topology optimisation in HyperMesh, reducing overall deck weight while satisfying a 20 mm maximum mid-span deflection constraint. Achieved the lowest weight in the cohort and 3D-printed the final optimized model.",
    skateboardDetails: {
      images: [
        {
          src: "/project/Skateboard/FEA_ModelDesign.jpg",
          alt: "FEA Model & Design Constraints",
          caption: "Finite Element Analysis (FEA) setup and model design constraints in HyperMesh."
        },
        {
          src: "/project/Skateboard/TopologyAnalysis.jpg",
          alt: "Topology Optimization Results",
          caption: "Material density distribution and load path visualization from topology optimization."
        },
        {
          src: "/project/Skateboard/FreeShapeOptimization.jpg",
          alt: "Free Shape Optimization",
          caption: "Local shape optimization to minimize stress concentrations in high-stress regions."
        },
        {
          src: "/project/Skateboard/ThreeDPrinted.jpg",
          alt: "3D Printed Prototype",
          caption: "Scale model of the optimized lightweight skateboard deck, 3D-printed to verify manufacturability."
        },
         {
          src: "/project/Skateboard/shaleen.jpg",
          alt: "",
          caption: ""
        }
      ],
      highlights: [
        "Performed topology optimisation in HyperMesh, reducing overall weight while satisfying a 20 mm maximum mid-span deflection constraint.",
        "Achieved the lowest weight among all designs in the cohort.",
        "Designed for manufacturability and 3D-printed the final geometry."
      ]
    },
    tags: [
      "Altair HyperMesh",
      "3D Printing",
      "Lightweight Design",
      "FEM",
      "Topology Optimisation",
      "Clemson"
    ]
  },
  


  // --- Undergrad ---
  {
    id: "autonomous-car-ml",
    title: "Self-Tuning Setup for Autonomous Car",
    subtitle: "Final Year B.Tech Project — Machine Learning & Simulation",
    team: "Akhil H, Krishnanand U, Sai R Karun, Shaleen Jayaraj (Supervisor: Prof. Antony J K)",
    teamId: "BTech-2022",
    institution: "Rajiv Gandhi Institute of Technology, Kottayam (APJ Abdul Kalam Technological University)",
    role: "Core Developer & Vehicle Dynamics Modeler",
    year: "2021-2022",
    overview: "This final-year project tackled a real-world vehicle dynamics problem: given a race car's tunable suspension parameters (spring stiffness, anti-roll bar stiffness), can a machine learning algorithm predict the optimal setup to minimise body roll during cornering — without running thousands of physical tests? The answer was yes — and Linear Regression proved dramatically more accurate than CNN for this structured, low-dimensional dataset.",
    methodology: {
      modelling: "A Formula Student-class ATV was modelled from first principles: suspension geometry designed in SolidWorks (double-wishbone, front and rear), kinematics analysed in Lotus Shark, and the full vehicle built in IPG CarMaker with spring, damper, ARB, and kinematic data from the geometry model.",
      simulation: {
        description: "Steady-state cornering (ISO 4138:2012) on a 42 m radius track. Systematically varied parameters to produce 910 simulation datasets:",
        parameters: [
          { name: "Front spring stiffness", value: "21,700–32,700 N/m (13 values, 1000 N/m steps)" },
          { name: "Rear spring stiffness", value: "32,000–50,000 N/m (10 values, 2000 N/m steps)" },
          { name: "Anti-roll bar stiffness", value: "15,000–21,000 N/m (7 values, 1000 N/m steps)" }
        ],
        finding: "Side-slip angle and lateral acceleration showed negligible variation with suspension parameter changes. Roll angle was the only objective metric that responded to suspension tuning — making it the ideal ML prediction target."
      }
    },
    mlComparison: {
      lr: "Fit a linear surface to the 3-input (front K, rear K, ARB K), 1-output (roll angle) dataset.",
      cnn: "Deep learning baseline. Poor performer on this dataset: negative roll angle predictions indicated the deep learning model overfit to patterns not present in the low-dimensional data. For structured, physically interpretable data, simple models win.",
      results: [
        { metric: "Mean Squared Error (Linear Regression)", value: "0.0000219 (extremely low)" },
        { metric: "Optimal Front Stiffness", value: "32,700 N/m" },
        { metric: "Optimal Rear Stiffness", value: "50,000 N/m" },
        { metric: "Optimal ARB Stiffness", value: "21,000 N/m" },
        { metric: "IPG CarMaker Roll Angle", value: "0.0959 rad" },
        { metric: "ML Predicted Roll Angle", value: "0.0837 rad" }
      ]
    },
    suspensionHighlights: {
      details: [
        { label: "Front spring stiffness range", value: "20,700–32,870 N/m (motion ratio corrected)" },
        { label: "Rear spring stiffness range", value: "32,000–50,600 N/m" },
        { label: "Natural frequency targets", value: "1.9–2.4 Hz (Formula Student range)" },
        { label: "Anti-squat", value: "30% rear (3.2° upper arm angle)" },
        { label: "Kinematic targets achieved", value: "Camber −2.5° front, −1.8° rear; Castor 3.5°; KPI 5°; Scrub 1 mm" }
      ],
      takeaways: [
        "Demonstrated a practical ML pipeline for suspension setup optimisation using simulation-generated data.",
        "Proved that for structured vehicle dynamics problems, interpretable linear models outperform deep learning.",
        "Developed proficiency in full-vehicle modelling in IPG CarMaker — the same tool used in production automotive development programmes."
      ]
    },
    tags: [
      "IPG CarMaker",
      "Vehicle Dynamics",
      "Machine Learning",
      "Linear Regression",
      "CNN",
      "Suspension Tuning",
      "Lotus Shark",
      "Formula Student",
      "Python",
      "MATLAB"
    ]
  },
  {
    id: "baja-sae-india",
    title: "BAJA SAE India",
    subtitle: "Off-Road ATV Design & Development — Vikrama Racing Team",
    team: "Team Vikrama Racing (Svadrma Racing)",
    teamId: "VB18_19087",
    institution: "Rajiv Gandhi Institute of Technology, Kottayam",
    role: "Vehicle Dynamics Head — Steering & Suspension Lead",
    year: "2021-2022",
    overview: "Led the vehicle dynamics sub-system for a purpose-built off-road ATV built to BAJA SAE India regulations. Responsible for steering geometry, suspension kinematic design and FEA validation, and integration of the full suspension system with chassis and drivetrain. The vehicle achieved a top speed of 57.6 km/h with a kerb weight of 235 kg and competed at BAJA SAE India 2019.",
    specifications: [
      { system: "Engine", specification: "305cc 4-Stroke Gasoline, OHV, 9 HP @ 2800 RPM" },
      { system: "Gearbox", specification: "Mahindra Alfa, Sequential, 4F+1R" },
      { system: "Suspension (F&R)", specification: "Double Wishbone" },
      { system: "Brakes (F&R)", specification: "270 mm dual-piston callipers" },
      { system: "Steering", specification: "Rack & Pinion, 7:1 ratio" },
      { system: "Top Speed", specification: "57.6 km/h" },
      { system: "Max Acceleration", specification: "5.26 m/s² @ 2800 RPM" },
      { system: "Turning Radius", specification: "2.6 m" },
      { system: "Kerb Weight", specification: "235 kg" },
    ],
    rollCageFEA: [
      { loadCase: "Front Impact", force: "15,000 N", maxStress: "362.09 MPa", maxDeformation: "1.387 mm", fos: "1.2" },
      { loadCase: "Rear Impact", force: "15,000 N", maxStress: "102.46 MPa", maxDeformation: "0.382 mm", fos: "2.44" },
      { loadCase: "Left Side Impact", force: "10,000 N", maxStress: "116.79 MPa", maxDeformation: "1.12 mm", fos: "2.14" },
      { loadCase: "Front Roll Over", force: "6,500 N", maxStress: "172.13 MPa", maxDeformation: "0.375 mm", fos: "1.45" },
      { loadCase: "Torsion", force: "5,000 N", maxStress: "99.27 MPa", maxDeformation: "0.513 mm", fos: "2.52" },
      { loadCase: "Natural Frequency", force: "—", maxStress: "—", maxDeformation: "—", fos: "86.8 Hz" },
    ],
    suspensionGeometry: [
      { parameter: "Camber", front: "0°", rear: "0°" },
      { parameter: "Camber Change", front: "−4° to 1°", rear: "−4° to 1°" },
      { parameter: "Castor", front: "0°", rear: "—" },
      { parameter: "KPI", front: "7°", rear: "—" },
      { parameter: "Scrub Radius", front: "-1\"", rear: "—" },
    ],
    tags: [
      "BAJA SAE",
      "Off-Road Vehicle",
      "Suspension Design",
      "Lotus Shark",
      "Kinematics",
      "Roll Cage",
      "FEA",
      "ANSYS",
      "SolidWorks",
      "Vehicle Dynamics",
    ],
  },
  {
    id: "sae-aero-design",
    title: "SAE Aero Design",
    subtitle: "AeroMapper — Fixed-Wing UAV for Aerial Mapping",
    team: "Team Project (7 members)",
    teamId: "ADC2020170",
    institution: "Rajiv Gandhi Institute of Technology, Kottayam · Mechanical Engg. Dept.",
    role: "Aerodynamics & Structural Analysis Lead",
    year: "2020-2021",
    overview: "Designed and built a fixed-wing UAV optimised for aerial mapping and remote sensing applications. The project spanned the full design cycle — from market study and feasibility analysis through aerodynamic sizing, structural validation, electronics integration, and flight testing.",
    problemStatement: "Design and fabricate a fixed-wing UAV capable of lifting maximum payload within strict dimensional constraints (L+W+H ≤ 170 in) using a single electric motor power plant, targeting applications in disaster management, environmental monitoring, and real-time geospatial mapping.",
    designDecisions: [
      {
        category: "Airfoil Selection",
        selection: "FX 74-CL5-140 MOD",
        details: "Selected from four evaluated airfoils. XFLR5 analysis and ANSYS Fluent CFD validation confirmed best performance with CLmax ≈ 2.2 at α = 11° and design CL of 1.6 at α = 5°.",
      },
      {
        category: "Wing Configuration",
        selection: "High-Wing",
        details: "Selected for better spanwise lift distribution, structural integrity, unobstructed camera field of view, and safer landings.",
      },
      {
        category: "Taper Ratio",
        selection: "0.4",
        details: "Chosen to reduce tip loading without introducing tip-stall risk (range 0.3–0.5).",
      },
    ],
    powerPlant: {
      motor: "Emax GT4020, 414.41 kV, max thrust 4750 g at 22.2 V",
      battery: "Orange 6S LiPo, 4200 mAh, 35C",
      propeller: "14\"×7\" carbon fibre",
      esc: "Emax Simon-K Series, 80 A burst",
    },
    structuralMaterials: "Monokote skin, balsa ribs, teak wood longerons, Al 7075-T6 spar and landing gear, carbon fibre propeller.",
    performanceResults: [
      { parameter: "Static Thrust", value: "42.75 N" },
      { parameter: "Stall Velocity", value: "10.09 m/s" },
      { parameter: "Take-off Velocity", value: "12.1 m/s" },
      { parameter: "Take-off Distance", value: "16.0 m" },
      { parameter: "Min. Cruise Speed", value: "11.78 m/s" },
      { parameter: "Landing Distance", value: "48.04 m" },
      { parameter: "Max Payload (sea level)", value: "~3.5 kg" },
    ],
    stabilityAnalysis: {
      longitudinal: "Static margin set at 15% chord. CG located 0.0813 m from leading edge. Horizontal stabiliser (NACA 0012) set at 8.49° for positive trim (Cm0 = 0.09479).",
      directional: "NACA 0012 vertical tail with Cnβ = 0.1142 (statically stable).",
      lateral: "High-wing configuration contributes negative Clβ = −0.02054/rad. Steady-state roll rate Pss = 8.19 rad/s.",
    },
    cadManufacturing: "Full 3D model developed in CATIA V5R20. Wing ribs laser-cut from balsa sheet. Fuselage assembled from teak longerons with monokote skin. Hands-on build with the full team.",
    tags: ["Aerodynamics", "CFD", "ANSYS Fluent", "CATIA V5", "SAE Aero Design", "UAV", "XFLR5"],
    aeroDesignDetails: {
      video: {
        src: "/project/Aero%20Design/aeroFly.mp4",
        title: "UAV Flight Test Video"
      },
      images: [
        {
          src: "/project/Aero%20Design/aeroone.jpg",
          alt: "Fuselage Under Construction",
          caption: "Fuselage wooden frame under construction showing laser-cut teak and balsa members."
        },
        {
          src: "/project/Aero%20Design/aerotwo.jpg",
          alt: "Wing Ribs & Spar Alignment",
          caption: "Laser-cut balsa wood wing ribs aligned along the aluminum spar over the design blueprint."
        },
        {
          src: "/project/Aero%20Design/aerothree.jpg",
          alt: "Wing Rib Assembly",
          caption: "Partially assembled wing structure showcasing the high-lift aerodynamic airfoil shape."
        },
        {
          src: "/project/Aero%20Design/aerofour.jpg",
          alt: "Full UAV Skeleton",
          caption: "Completed structural skeleton of the UAV (fuselage and wing) before covering."
        },
        {
          src: "/project/Aero%20Design/aerofive.jpg",
          alt: "Monokote Skin Application",
          caption: "Applying the white and red Monokote heat-shrink skin onto the UAV structure."
        },
        {
          src: "/project/Aero%20Design/aerosix.jpg",
          alt: "UAV Flight Prep",
          caption: "Final checks and electronics integration on the fully-skinned AeroMapper UAV."
        },
        {
          src: "/project/Aero%20Design/aeroseven.jpg",
          alt: "Completed AeroMapper UAV",
          caption: "Fully assembled UAV featuring the high-wing configuration, landing gear, and power plant."
        },
        {
          src: "/project/Aero%20Design/aeroeight.jpg",
          alt: "Design & Flight Team",
          caption: "The 7-member design, fabrication, and flight test team posing with the completed UAV."
        }
      ]
    }
  }
]

interface AeroGalleryProps {
  details?: {
    video: {
      src: string;
      title: string;
    };
    images: {
      src: string;
      alt: string;
      caption: string;
    }[];
  };
}

const AeroVideoPlayer = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className="relative group rounded-2xl overflow-hidden border border-border bg-black shadow-lg aspect-video w-full max-w-3xl mx-auto"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
        onEnded={handleVideoEnded}
        playsInline
      />
      
      {/* Dark Overlay when paused or hovered */}
      <div 
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 cursor-pointer flex items-center justify-center ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
        onClick={togglePlay}
      >
        {/* Large Play/Pause Button in the center */}
        <button
          className="w-16 h-16 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-xl transform transition hover:scale-110 active:scale-95 duration-200"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 fill-current" />
          ) : (
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Controls Bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <button 
            onClick={togglePlay} 
            className="text-white hover:text-primary transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
          </button>
          <span className="text-xs font-mono text-white/90 font-medium">{title}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleMute} 
            className="text-white hover:text-primary transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button 
            onClick={handleFullscreen} 
            className="text-white hover:text-primary transition-colors"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AeroGallery = ({ details }: AeroGalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!details) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => 
        prev === 0 ? details.images.length - 1 : prev! - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => 
        prev === details.images.length - 1 ? 0 : prev! + 1
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Video Section */}
      <div className="space-y-3">
        <h4 className="text-base sm:text-lg font-bold flex items-center gap-2">
          <Play className="w-5 h-5 text-primary" />
          Flight Test Video
        </h4>
        <AeroVideoPlayer src={details.video.src} title={details.video.title} />
      </div>

      <hr className="border-border" />

      {/* Image Grid Section */}
      <div className="space-y-4">
        <h4 className="text-base sm:text-lg font-bold flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          Project Photo Gallery
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {details.images.map((img, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col justify-between border border-border rounded-xl p-3 bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              onClick={() => setActiveImageIndex(idx)}
            >
              <div className="overflow-hidden rounded-lg border bg-muted mb-3 aspect-[4/3] flex items-center justify-center relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white text-xs font-mono py-1 px-2.5 rounded-full backdrop-blur-sm transition-opacity duration-300">
                    View Fullscreen
                  </span>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-xs text-foreground mb-0.5">{img.alt}</h5>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-normal">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all z-[110]"
            onClick={() => setActiveImageIndex(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all z-[110]"
            onClick={handlePrev}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Right Navigation */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all z-[110]"
            onClick={handleNext}
          >
            <span className="sr-only">Next</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={details.images[activeImageIndex].src} 
              alt={details.images[activeImageIndex].alt} 
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Caption Container */}
          <div 
            className="mt-6 text-center max-w-2xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="text-white font-bold text-lg mb-1">{details.images[activeImageIndex].alt}</h5>
            <p className="text-white/70 text-sm">{details.images[activeImageIndex].caption}</p>
            <div className="text-white/40 text-xs font-mono mt-3">
              Image {activeImageIndex + 1} of {details.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary font-mono">Projects</span> 
          </h2>
         
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Box className="w-12 h-12 text-primary" />
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3 font-mono">
                        {project.year}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary/80 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                      {project.overview}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 border border-primary/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] text-muted-foreground self-center">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      View Details
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden w-[95vw] sm:w-full p-4 sm:p-6 md:p-8">
                <DialogHeader className="space-y-1">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs sm:text-sm mb-1 sm:mb-2">
                    <Layers className="w-4 h-4" />
                    <span>Project Case Study</span>
                  </div>
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">{project.title}</DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm md:text-base text-primary/80 font-medium leading-normal">
                    {project.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-4 sm:my-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Cpu className="w-4 h-4" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Role</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{project.role}</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Activity className="w-4 h-4" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Team / Program</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{project.team}</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Gauge className="w-4 h-4" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Year</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{project.year}</p>
                  </div>
                </div>

                {project.id === "sae-aero-design" && (
                  <Tabs defaultValue="overview" className="w-full min-w-0">
                    <TabsList className="flex w-full overflow-x-auto justify-start gap-1 p-1 bg-muted rounded-lg scrollbar-none mb-6 flex-nowrap">
                      <TabsTrigger value="overview" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Overview</TabsTrigger>
                      <TabsTrigger value="design" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Design</TabsTrigger>
                      <TabsTrigger value="performance" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Performance</TabsTrigger>
                      <TabsTrigger value="analysis" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Analysis</TabsTrigger>
                      <TabsTrigger value="gallery" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Flight Video & Gallery</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Info className="w-5 h-5 text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Problem Statement</h4>
                        <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5 text-xs sm:text-sm text-muted-foreground italic">
                          "{project.problemStatement}"
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Institution</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.institution}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="design" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-base sm:text-lg font-bold">Key Design Decisions</h4>
                          {project.designDecisions?.map((decision) => (
                            <div key={decision.category} className="p-3 sm:p-4 rounded-lg border border-border shadow-sm">
                              <h5 className="font-bold text-primary text-xs sm:text-sm mb-1">{decision.category}</h5>
                              <p className="font-semibold text-foreground text-xs sm:text-sm mb-1">{decision.selection}</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{decision.details}</p>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-6">
                          {project.powerPlant && (
                            <div>
                              <h4 className="text-base sm:text-lg font-bold mb-3">Power Plant</h4>
                              <ul className="space-y-2 text-xs sm:text-sm italic">
                                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-border py-2 sm:py-1 gap-1">
                                  <span className="text-muted-foreground">Motor</span>
                                  <span className="font-medium sm:text-right sm:ml-4">{project.powerPlant.motor}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-border py-2 sm:py-1 gap-1">
                                  <span className="text-muted-foreground">Battery</span>
                                  <span className="font-medium sm:text-right sm:ml-4">{project.powerPlant.battery}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-border py-2 sm:py-1 gap-1">
                                  <span className="text-muted-foreground">Propeller</span>
                                  <span className="font-medium sm:text-right sm:ml-4">{project.powerPlant.propeller}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-border py-2 sm:py-1 gap-1">
                                  <span className="text-muted-foreground">ESC</span>
                                  <span className="font-medium sm:text-right sm:ml-4">{project.powerPlant.esc}</span>
                                </li>
                              </ul>
                            </div>
                          )}
                          <div>
                            <h4 className="text-base sm:text-lg font-bold mb-3">Materials</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.structuralMaterials}</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="performance">
                      <h4 className="text-base sm:text-lg font-bold mb-4">Performance Results</h4>
                      <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-xs sm:text-sm">Parameter</TableHead>
                              <TableHead className="text-right text-xs sm:text-sm">Value</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {project.performanceResults?.map((result) => (
                              <TableRow key={result.parameter}>
                                <TableCell className="font-medium text-xs sm:text-sm">{result.parameter}</TableCell>
                                <TableCell className="text-right font-mono text-primary text-xs sm:text-sm">{result.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="analysis" className="space-y-6">
                      {project.stabilityAnalysis && (
                        <div className="space-y-4">
                          <h4 className="text-base sm:text-lg font-bold">Stability Analysis</h4>
                          <div className="grid space-y-4">
                            <div className="p-3 sm:p-4 rounded-lg bg-card border border-border">
                              <h5 className="font-bold text-primary text-xs sm:text-sm mb-2">Longitudinal Stability</h5>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.stabilityAnalysis.longitudinal}</p>
                            </div>
                            <div className="p-3 sm:p-4 rounded-lg bg-card border border-border">
                              <h5 className="font-bold text-primary text-xs sm:text-sm mb-2">Directional Stability</h5>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.stabilityAnalysis.directional}</p>
                            </div>
                            <div className="p-3 sm:p-4 rounded-lg bg-card border border-border">
                              <h5 className="font-bold text-primary text-xs sm:text-sm mb-2">Lateral (Roll) Stability</h5>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.stabilityAnalysis.lateral}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">CAD & Manufacturing</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {project.cadManufacturing}
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="gallery" className="space-y-6">
                      <AeroGallery details={project.aeroDesignDetails} />
                    </TabsContent>
                  </Tabs>
                )}

                {project.id === "baja-sae-india" && (
                  <Tabs defaultValue="overview" className="w-full min-w-0">
                    <TabsList className="flex w-full overflow-x-auto justify-start gap-1 p-1 bg-muted rounded-lg scrollbar-none mb-6 flex-nowrap">
                      <TabsTrigger value="overview" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Overview</TabsTrigger>
                      <TabsTrigger value="chassis-suspension" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Chassis & Susp</TabsTrigger>
                      <TabsTrigger value="steering-brakes" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Steering & Brakes</TabsTrigger>
                      <TabsTrigger value="powertrain-innovation" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Powertrain & Tech</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Info className="w-5 h-5 text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Vehicle Specifications</h4>
                        <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-xs sm:text-sm">System</TableHead>
                                <TableHead className="text-right text-xs sm:text-sm">Specification</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {project.specifications?.map((spec) => (
                                <TableRow key={spec.system}>
                                  <TableCell className="font-medium text-xs sm:text-sm">{spec.system}</TableCell>
                                  <TableCell className="text-right font-mono text-primary text-xs sm:text-sm">{spec.specification}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Institution</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.institution}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="chassis-suspension" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Shield className="w-5 h-5 text-primary" />
                          Roll Cage — Chassis Design
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          The primary structure was fabricated from AISI 4130 chromoly steel (yield 460 MPa, tensile 580 MPa), selected for its low carbon content and weldability. MIG welding with ERS 80S-D2 electrode. Roll cage total weight: 64 kg. FEA using ANSYS V16.2 & V18.1 (shell elements, 10mm quad-dominant mesh) validated all impact scenarios:
                        </p>
                        
                        <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-xs sm:text-sm">Load Case</TableHead>
                                <TableHead className="text-xs sm:text-sm">Force</TableHead>
                                <TableHead className="text-xs sm:text-sm">Max Stress</TableHead>
                                <TableHead className="text-xs sm:text-sm">Max Deformation</TableHead>
                                <TableHead className="text-right text-xs sm:text-sm">FOS</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {project.rollCageFEA?.map((row) => (
                                <TableRow key={row.loadCase}>
                                  <TableCell className="font-medium text-xs sm:text-sm">{row.loadCase}</TableCell>
                                  <TableCell className="font-mono text-xs sm:text-sm">{row.force}</TableCell>
                                  <TableCell className="font-mono text-xs sm:text-sm">{row.maxStress}</TableCell>
                                  <TableCell className="font-mono text-xs sm:text-sm">{row.maxDeformation}</TableCell>
                                  <TableCell className="text-right font-mono text-xs sm:text-sm text-primary">{row.fos}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      <hr className="border-border my-6" />

                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Settings className="w-5 h-5 text-primary" />
                          Suspension Design & Kinematics
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Designed a double-wishbone suspension system front and rear. Used Lotus Shark for kinematic analysis, inserting 3D hard-points from SolidWorks models and iterating geometry to achieve target camber curves and eliminate bump steer.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h5 className="font-bold text-xs sm:text-sm text-primary">Geometry Targets Achieved</h5>
                            <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="text-xs sm:text-sm">Parameter</TableHead>
                                    <TableHead className="text-xs sm:text-sm">Front</TableHead>
                                    <TableHead className="text-right text-xs sm:text-sm">Rear</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {project.suspensionGeometry?.map((row) => (
                                    <TableRow key={row.parameter}>
                                      <TableCell className="font-medium text-xs sm:text-sm">{row.parameter}</TableCell>
                                      <TableCell className="font-mono text-xs sm:text-sm">{row.front}</TableCell>
                                      <TableCell className="text-right font-mono text-xs sm:text-sm">{row.rear}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h5 className="font-bold text-xs sm:text-sm text-primary mb-2">Spring Design</h5>
                              <ul className="space-y-1.5 text-xs text-muted-foreground bg-secondary/20 p-3 sm:p-4 rounded-xl border border-border/50">
                                <li>• <strong>Natural frequency target:</strong> 0.41 Hz (front), 0.204 Hz (rear)</li>
                                <li>• <strong>Ride rate:</strong> 7.545 N/mm (front), 3.720 N/mm (rear)</li>
                                <li>• <strong>Spring stiffness:</strong> 16 N/mm both axles</li>
                                <li>• <strong>Wire diameter:</strong> 8 mm, Steel Cr-Vn alloy wire</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-bold text-xs sm:text-sm text-primary mb-2">Suspension FEA (ANSYS Static Structural)</h5>
                              <ul className="space-y-1.5 text-xs text-muted-foreground bg-secondary/20 p-3 sm:p-4 rounded-xl border border-border/50">
                                <li>• <strong>Front lower A-arm:</strong> Max deformation 1.2416 mm, Min FOS = 1.0</li>
                                <li>• <strong>Rear upper A-arm:</strong> Max deformation 0.20097 mm, Min FOS = 1.7</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="steering-brakes" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Compass className="w-5 h-5 text-primary" />
                          Steering System
                        </h4>
                        <div className="p-4 sm:p-5 rounded-xl border border-border bg-card shadow-sm space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                            <div>
                              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Type</span>
                              <span className="font-semibold text-foreground">Center-aligned rack & pinion</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Ackermann</span>
                              <span className="font-semibold text-foreground">110% (oversteer-biased)</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Inner/Outer Angle</span>
                              <span className="font-semibold text-foreground">35.37° / 21.59°</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Steering Ratio</span>
                              <span className="font-semibold text-foreground">7:1</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Turning Radius</span>
                              <span className="font-semibold text-foreground">2.7 m</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Steering Torque & Effort</span>
                              <span className="font-semibold text-foreground">4.428 Nm @ 29.52 N</span>
                            </div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground italic border-t pt-2 mt-2">
                            Ackermann is oversteer-biased for tight course maneuvering without power assist.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Activity className="w-5 h-5 text-primary" />
                          Braking System
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Dual-circuit X-split configuration with 270 mm discs and dual-piston callipers front and rear. Stopping distance: 2.22 m from 40 km/h. Thermal analysis (steady-state) confirmed max disc temperature of 120°C.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="powertrain-innovation" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Gauge className="w-5 h-5 text-primary" />
                          Powertrain
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Mahindra Alfa sequential gearbox with 4 forward gears and reverse. In 1st gear: tractive force 1526 N, acceleration 5.26 m/s², gradeability 30°. Overall cost: ₹2,50,900.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Zap className="w-5 h-5 text-primary" />
                          Innovation
                        </h4>
                        <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5 text-xs sm:text-sm text-muted-foreground italic">
                          "Integrated an Arduino-based G-G diagram (acceleration envelope) and a binocular-vision sensor array for terrain awareness — beyond standard BAJA requirements."
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                {project.id === "autonomous-car-ml" && (
                  <Tabs defaultValue="overview" className="w-full min-w-0">
                    <TabsList className="flex w-full overflow-x-auto justify-start gap-1 p-1 bg-muted rounded-lg scrollbar-none mb-6 flex-nowrap">
                      <TabsTrigger value="overview" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Overview</TabsTrigger>
                      <TabsTrigger value="methodology" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Methodology</TabsTrigger>
                      <TabsTrigger value="ml-results" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">ML Comparison</TabsTrigger>
                      <TabsTrigger value="suspension-design" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Suspension & Key</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Info className="w-5 h-5 text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <BookOpen className="w-5 h-5 text-primary" />
                          Project Details
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-secondary/20 p-4 rounded-xl border">
                          <div>
                            <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Team</span>
                            <span className="font-semibold text-foreground">Akhil H, Krishnanand U, Sai R Karun, Shaleen Jayaraj</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Supervisor</span>
                            <span className="font-semibold text-foreground">Prof. Antony J K</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Institution</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.institution}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="methodology" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Settings className="w-5 h-5 text-primary" />
                          Vehicle Modelling
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.methodology?.modelling}
                        </p>
                      </div>

                      <hr className="border-border my-6" />

                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Activity className="w-5 h-5 text-primary" />
                          Simulation Campaign (ISO 4138:2012)
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.methodology?.simulation.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h5 className="font-bold text-xs sm:text-sm text-primary">Tunable Parameters Varied</h5>
                            <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="text-xs sm:text-sm">Parameter</TableHead>
                                    <TableHead className="text-right text-xs sm:text-sm">Range / Step</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {project.methodology?.simulation.parameters.map((p) => (
                                    <TableRow key={p.name}>
                                      <TableCell className="font-medium text-xs sm:text-sm">{p.name}</TableCell>
                                      <TableCell className="text-right font-mono text-primary text-xs sm:text-sm">{p.value}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic">
                              Total: 910 simulation datasets generated.
                            </p>
                          </div>

                          <div className="flex flex-col justify-center">
                            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs text-muted-foreground italic">
                              <span className="font-bold block text-primary not-italic mb-1">Key Finding:</span>
                              "{project.methodology?.simulation.finding}"
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="ml-results" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                            <Brain className="w-5 h-5 text-primary" />
                            Algorithms Compared
                          </h4>
                          <div className="space-y-3">
                            <div className="p-3 sm:p-4 rounded-lg border border-border bg-card shadow-sm">
                              <h5 className="font-bold text-primary text-xs sm:text-sm mb-1">Linear Regression (Winner)</h5>
                              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{project.mlComparison?.lr}</p>
                            </div>
                            <div className="p-3 sm:p-4 rounded-lg border border-border bg-card shadow-sm">
                              <h5 className="font-bold text-muted-foreground text-xs sm:text-sm mb-1">Convolutional Neural Network (CNN)</h5>
                              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{project.mlComparison?.cnn}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                            <LineChart className="w-5 h-5 text-primary" />
                            Model Optimization Results
                          </h4>
                          <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-xs sm:text-sm">Metric / Output</TableHead>
                                  <TableHead className="text-right text-xs sm:text-sm">Value</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {project.mlComparison?.results.map((r) => (
                                  <TableRow key={r.metric}>
                                    <TableCell className="font-medium text-xs sm:text-sm">{r.metric}</TableCell>
                                    <TableCell className="text-right font-mono text-primary text-xs sm:text-sm">{r.value}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                          <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                            The ML model agreed exactly with IPG CarMaker on the optimal setup and predicted roll angle within 13% — close enough for practical setup selection without full sweeps.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="suspension-design" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Wrench className="w-5 h-5 text-primary" />
                          Suspension Design Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="w-full overflow-x-auto scrollbar-none rounded-lg border">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-xs sm:text-sm">Design Parameter</TableHead>
                                  <TableHead className="text-right text-xs sm:text-sm">Value / Target</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {project.suspensionHighlights?.details.map((d) => (
                                  <TableRow key={d.label}>
                                    <TableCell className="font-medium text-xs sm:text-sm">{d.label}</TableCell>
                                    <TableCell className="text-right font-mono text-primary text-xs sm:text-sm">{d.value}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>

                          <div className="space-y-3">
                            <h5 className="font-bold text-xs sm:text-sm text-primary">Key Takeaways</h5>
                            <ul className="space-y-2">
                              {project.suspensionHighlights?.takeaways.map((t, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground flex gap-2">
                                  <span className="text-primary font-bold">•</span>
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                {project.id === "applus-idiada-tata" && (
                  <Tabs defaultValue="overview" className="w-full min-w-0">
                    <TabsList className="flex w-full overflow-x-auto justify-start gap-1 p-1 bg-muted rounded-lg scrollbar-none mb-6 flex-nowrap">
                      <TabsTrigger value="overview" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Overview</TabsTrigger>
                      <TabsTrigger value="responsibilities" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Responsibilities & Work</TabsTrigger>
                      <TabsTrigger value="certifications" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Certifications</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Info className="w-5 h-5 text-primary" />
                          Overview
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Briefcase className="w-5 h-5 text-primary" />
                          Role & Location Details
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-secondary/20 p-4 rounded-xl border">
                          <div>
                            <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Role / Position</span>
                            <span className="font-semibold text-foreground">{project.role}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Duration</span>
                            <span className="font-semibold text-foreground">{project.professionalExperience?.duration}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Location</span>
                            <span className="font-semibold text-foreground flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-primary" />
                              {project.professionalExperience?.location}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Programme</span>
                            <span className="font-semibold text-foreground">TATA Motors ODC</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Company / Institution</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.institution}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="responsibilities" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Wrench className="w-5 h-5 text-primary" />
                          Core Responsibilities & Achievements
                        </h4>
                        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                          {project.professionalExperience?.responsibilities.map((resp, idx) => (
                            <div key={idx} className="p-3 sm:p-4 rounded-lg border border-border bg-card shadow-sm space-y-1">
                              <h5 className="font-bold text-primary text-xs sm:text-sm">{resp.title}</h5>
                              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{resp.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="certifications" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold">
                          <Award className="w-5 h-5 text-primary" />
                          MSC ADAMS Certifications
                        </h4>
                        <div className="grid gap-3">
                          {project.professionalExperience?.certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-primary/20 bg-primary/5">
                              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                              <span className="font-mono text-[10px] sm:text-xs font-semibold text-foreground leading-relaxed">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                {project.id === "truck-ride-handling" && (
                  <Tabs defaultValue="overview" className="w-full min-w-0">
                    <TabsList className="flex w-full overflow-x-auto justify-start gap-1 p-1 bg-muted rounded-lg scrollbar-none mb-6 flex-nowrap">
                      <TabsTrigger value="overview" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Overview</TabsTrigger>
                      <TabsTrigger value="handling" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Handling Analysis</TabsTrigger>
                      <TabsTrigger value="ride" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Ride Comfort</TabsTrigger>
                      <TabsTrigger value="plots" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Simulation Plots</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Info className="w-5 h-5 text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Layers className="w-5 h-5 text-primary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {project.truckRideHandlingDetails?.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-3 text-xs text-muted-foreground bg-secondary/15 p-3 sm:p-4 rounded-xl border border-border/50">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Institution</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.institution}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="handling" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-bold">Transient Handling & Understeer Analysis</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          By modeling the lateral dynamics of 2-axle and 3-axle trucks, we evaluated how the addition of a third axle (tandem rear axle) affects the understeer gradient and transient response. The yaw rate and sideslip responses were simulated for step-steer inputs.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="ride" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-bold">Ride Comfort & Power Spectral Density (PSD)</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Vertical dynamics were analyzed using a pitch-bounce ride model. We evaluated the Power Spectral Density (PSD) of vertical acceleration at the driver's seat over different road profiles (ISO Class A to D) to quantify human exposure to whole-body vibration.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="plots" className="space-y-6">
                      <h4 className="text-base sm:text-lg font-bold mb-4">Simulation Results Gallery</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.truckRideHandlingDetails?.images.map((img, idx) => (
                          <div key={idx} className="group flex flex-col justify-between border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow animate-fade-in">
                            <div className="overflow-hidden rounded-lg border bg-muted mb-3 aspect-[4/3] flex items-center justify-center">
                              <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h5 className="font-bold text-xs sm:text-sm text-foreground mb-1">{img.alt}</h5>
                              <p className="text-[11px] text-muted-foreground leading-normal">{img.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                {project.id === "skateboard-topology-opt" && (
                  <Tabs defaultValue="overview" className="w-full min-w-0">
                    <TabsList className="flex w-full overflow-x-auto justify-start gap-1 p-1 bg-muted rounded-lg scrollbar-none mb-6 flex-nowrap">
                      <TabsTrigger value="overview" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Overview</TabsTrigger>
                      <TabsTrigger value="optimization" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Optimization & FEA</TabsTrigger>
                      <TabsTrigger value="plots" className="flex-shrink-0 flex-1 sm:flex-none text-xs sm:text-sm">Design Gallery</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Info className="w-5 h-5 text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Layers className="w-5 h-5 text-primary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {project.skateboardDetails?.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-3 text-xs text-muted-foreground bg-secondary/15 p-3 sm:p-4 rounded-xl border border-border/50">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3">Institution</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.institution}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="optimization" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-base sm:text-lg font-bold">Topology & Shape Optimization</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          The objective of this project was to design a lightweight skateboard deck using Altair HyperMesh. By setting a 20 mm maximum mid-span deflection constraint under a standard rider weight, we ran topology optimization to identify the optimal material layout and load paths.
                        </p>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Following the topology optimization, free shape optimization was conducted on the transition zones to minimize local stress concentrations, ensuring the structure remains durable while minimizing mass. The final design achieved the lowest weight in the cohort.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="plots" className="space-y-6">
                      <h4 className="text-base sm:text-lg font-bold mb-4">Design & Optimization Gallery</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.skateboardDetails?.images.map((img, idx) => (
                          <div key={idx} className="group flex flex-col justify-between border border-border rounded-xl p-4 bg-card hover:shadow-md transition-shadow animate-fade-in">
                            <div className="overflow-hidden rounded-lg border bg-muted mb-3 aspect-[4/3] flex items-center justify-center">
                              <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h5 className="font-bold text-xs sm:text-sm text-foreground mb-1">{img.alt}</h5>
                              <p className="text-[11px] text-muted-foreground leading-normal">{img.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                )}

                {/* Fallback / Standard Project Layout for Projects 5–8 */}
                {!["sae-aero-design", "baja-sae-india", "autonomous-car-ml", "applus-idiada-tata", "truck-ride-handling", "skateboard-topology-opt"].includes(project.id) && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                        <Info className="w-5 h-5 text-primary" />
                        Project Overview
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                        {project.overview}
                      </p>
                    </div>

                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-3">
                          <Layers className="w-5 h-5 text-primary" />
                          Key Details
                        </h4>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-3 text-xs text-muted-foreground bg-secondary/15 p-3 sm:p-4 rounded-xl border border-border/50">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.placeholderNote && (
                      <div className="p-3 sm:p-4 rounded-xl border border-primary/20 bg-primary/5 text-muted-foreground text-[10px] sm:text-xs italic flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0 animate-pulse" />
                        <span>{project.placeholderNote}</span>
                      </div>
                    )}

                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Academic / Context</h4>
                      <p className="text-xs sm:text-sm text-foreground font-medium">{project.institution}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-4 mt-6 border-t">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[9px] sm:text-[10px] uppercase tracking-tighter">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
