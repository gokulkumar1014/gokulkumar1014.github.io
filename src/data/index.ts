export const profile = {
    name: "Gokul Kumar Kesavan",
    role: "Full Stack Developer",
    tagline: "Building digital experiences that matter.",
    about: "I am a passionate developer with expertise in React, TypeScript, and modern web technologies. I love creating beautiful, functional, and user-friendly applications.",
    email: "gokul@example.com",
    social: {
        linkedin: "https://linkedin.com/in/gokul",
        github: "https://github.com/gokul",
        twitter: "https://twitter.com/gokul"
    }
};

// Tech Stack Data
export type TechItem = {
    name: string;
    color: string;
    logo?: string;
};

export const expertise: TechItem[] = [
    { name: "Python", color: "#3776AB", logo: "python" },
    { name: "pandas", color: "#150458", logo: "pandas" },
    { name: "numpy", color: "#013243", logo: "numpy" },
    { name: "matplotlib", color: "#11557c", logo: "python" },
    { name: "R", color: "#276DC3", logo: "r" },
    { name: "SQL", color: "#336791", logo: "postgresql" },
    { name: "Excel", color: "#217346", logo: "microsoftexcel" },

    { name: "React", color: "#61DAFB", logo: "react" },
    { name: "FastAPI", color: "#009688", logo: "fastapi" },
    { name: "Tableau", color: "#E97627", logo: "tableau" },
    { name: "PowerBI", color: "#F2C811", logo: "powerbi" },

    { name: "ScikitLearn", color: "#F7931E", logo: "scikitlearn" },
    { name: "TensorFlow", color: "#FF6F00", logo: "tensorflow" },
    { name: "PyTorch", color: "#EE4C2C", logo: "pytorch" },
    { name: "LangChain", color: "#1C3C3C", logo: "langchain" },
    { name: "LangGraph", color: "#614A94", logo: "langchain" },
    { name: "RAG", color: "#F44336", logo: "openai" },

    { name: "DuckDB", color: "#9835d1ff", logo: "duckdb" },
    { name: "ChromaDB", color: "#FB542B", logo: "redis" },
    { name: "Qdrant", color: "#B31B1B", logo: "qdrant" },
    { name: "FAISS", color: "#005A9C", logo: "meta" },
    { name: "PostgreSQL", color: "#336791", logo: "postgresql" },

    { name: "AWS", color: "#232F3E", logo: "amazonaws" },
    { name: "Apache Spark", color: "#E25A1C", logo: "apachespark" },
    { name: "Docker", color: "#2496ED", logo: "docker" },

    { name: "Gurobi", color: "#DA291C", logo: "python" },
    { name: "Statistics", color: "#005A9C", logo: "kaggle" },
    { name: "Git/GitHub", color: "#F05032", logo: "github" },
    { name: "MLOps", color: "#00B8D9", logo: "githubactions" },
    { name: "Optimization", color: "#7E57C2", logo: "python" },
    { name: "Risk Analytics", color: "#F44336", logo: "googleanalytics" }
];

export type ExperienceItem = {
    id: string;
    title: string;
    org: string;
    location: string;
    dates: string;
    bullets: string[];
    section: "Professional" | "OnCampus" | "Leadership";
    recommendation?: string;
}

export const experiences: ExperienceItem[] = [
    // (1) PROFESSIONAL EXPERIENCE
    {
        id: "prof-1",
        title: "Business & Consulting Analyst",
        org: "COLOURS GLOBAL, INC. (Internship)",
        dates: "Feb 2025 – Apr 2025",
        location: "Washington, D.C., United States",
        bullets: [
            "Conducted contract research and identified 10+ high-impact government RFPs aligned with strategic focus areas.",
            "Authored an API Integration Strategy Sheet recommending event-based APIs (Ticketmaster, Eventbrite, OpenTable).",
            "Evaluated API feasibility, security, and scalability to shape a roadmap for data-driven expansion."
        ],
        section: "Professional",
        recommendation: "https://www.linkedin.com/in/gokul-kumar-kesavan/details/recommendations/"
    },
    {
        id: "prof-2",
        title: "Business Analyst Intern",
        org: "Finlatics (Internship)",
        dates: "Mar 2023 – May 2023",
        location: "India",
        bullets: [
            "Performed a data-driven feasibility study for a potential e-commerce startup; improved portfolio efficiency by ~17% via financial modeling.",
            "Led market + competitor analysis to inform pricing strategy and reduce operating costs by ~10%.",
            "Built interactive KPI dashboards in Power BI and Excel to communicate outcomes to stakeholders."
        ],
        section: "Professional"
    },

    // (2) UNIVERSITY & ON-CAMPUS EXPERIENCE
    {
        id: "campus-1",
        title: "Student Administrative Assistant I",
        org: "The George Washington University",
        dates: "Aug 2025",
        location: "Washington, D.C., United States",
        bullets: [
            "Supported GW Business Services operations for Fall 2025 U-Pass distribution and student service initiatives.",
            "Distributed and tracked U-Pass cards for WMATA system records, maintaining accuracy and data integrity.",
            "Assisted students with questions to ensure a smooth, efficient distribution experience."
        ],
        section: "OnCampus"
    },
    {
        id: "campus-2",
        title: "Student Events Assistant I",
        org: "The George Washington University",
        dates: "May 2025",
        location: "Washington, D.C., United States",
        bullets: [
            "Supported university-wide Commencement Week operations for thousands of guests.",
            "Assisted registration, seating logistics, and student coordination in a fast-paced environment.",
            "Collaborated with event coordinators, faculty, and volunteers to keep operations running smoothly."
        ],
        section: "OnCampus"
    },

    // (3) LEADERSHIP & VOLUNTEER EXPERIENCE
    {
        id: "lead-1",
        title: "Event Organizer",
        org: "Thamizhi Student Club, VIT Vellore",
        dates: "Feb 2020 – Feb 2021",
        location: "Vellore, Tamil Nadu, India",
        bullets: [
            "Organized a campus-wide event for 100+ students and managed a team of 10 volunteers.",
            "Coordinated with faculty, vendors, and participants to ensure smooth end-to-end execution."
        ],
        section: "Leadership"
    },
    {
        id: "lead-2",
        title: "Editorial Team Member",
        org: "Solai Student Club, VIT Vellore",
        dates: "Jan 2019 – Feb 2021",
        location: "Vellore, Tamil Nadu, India",
        bullets: [
            "Collaborated with a team to manage and edit content for the club's publications and newsletters.",
            "Led efforts to ensure accurate, engaging, and timely communication to the student body, refining writing and editing skills.",
            "Enhanced organizational skills by managing deadlines and overseeing the distribution of the final publication."
        ],
        section: "Leadership"
    }
];

export interface Project {
    id: number;
    title: string;
    level: "GRAD" | "UNDERGRAD";
    description: string;
    technologies: string[];
    link: string;
    image?: string;
    featured?: boolean;
    categoryHint?: string; // Optional helper for icons/placeholders
}

export const projects: Project[] = [
    // --- GRAD PROJECTS (Featured First) ---
    {
        id: 101,
        title: "WTCHTWR - AI-Powered STR Analytics Agent",
        level: "GRAD",
        description: "AI-native analytics engine for short-term rental operators - deterministic agent workflows, hybrid SQL + RAG, and review intelligence at scale.",
        technologies: ["LangGraph", "FastAPI", "DuckDB", "React", "OpenAI", "Qdrant"],
        link: "https://github.com/gokulkumar1014/wtchtwr-ai-agent",
        featured: true,
        categoryHint: "AI",
        image: "/wtchtwr_modern_wood.png"
    },
    {
        id: 102,
        title: "EdgeCoach AI - Interview Intelligence Agent",
        level: "GRAD",
        description: "Serverless RAG assistant that extracts intent, retrieves real interview experiences from the web, and generates a structured prep guide with sources.",
        technologies: ["AWS Lambda", "Bedrock", "Claude", "Streamlit", "Tavily", "RAG"],
        link: "https://github.com/gokulkumar1014/EdgeCoach-AI-Interview-Intelligence-Agent",
        featured: true,
        categoryHint: "AI",
        image: "/edgecoach_ai.png"
    },
    {
        id: 103,
        title: "Federal Committees Contribution Analysis",
        level: "GRAD",
        description: "Large-scale Spark + SQL analysis of U.S. federal committee contributions to uncover donor patterns and geographic influence.",
        technologies: ["Apache Spark", "SQL", "Big Data", "Data Cleaning", "Analytics"],
        link: "https://github.com/gokulkumar1014/analysis-of-federal-committees-contribution",
        image: "/federal_contribution.png"
    },
    // INSERTED PROJECTS HERE
    {
        id: 109,
        title: "Capital Bikeshare - ML Pipeline",
        level: "GRAD",
        description: "End-to-end supervised learning workflow covering regression, classification, and regularization on Bikeshare data.",
        technologies: ["Python", "scikit-learn", "Regression", "Cross-Validation"],
        link: "https://github.com/gokulkumar1014/Capital-Bikeshare-ML-Supervised",
        image: "/bikeshare_contrast.png"
    },
    {
        id: 108,
        title: "Heart Disease Data Management Architecture",
        level: "GRAD",
        description: "Cloud-based relational database system on AWS EC2, implementing normalized data modeling (ERD), complex SQL querying, and secure pipeline architecture for healthcare data.",
        technologies: ["AWS EC2", "SQL", "Data Modeling", "PostgreSQL", "ER Diagrams", "Python"],
        link: "https://github.com/gokulkumar1014/indicators-of-heart-disease",
        image: "/heart_disease_analytics.png"
    },
    {
        id: 110,
        title: "Walmart Rollback Pricing Strategy Optimization",
        level: "GRAD",
        description: "Marketing analytics project using customer segmentation and predictive modeling to optimize rollback discounts and forecast revenue impact.",
        technologies: ["R", "tidyverse", "ggplot2", "caret", "KNN Imputation", "Regression"],
        link: "https://github.com/gokulkumar1014/Walmart-Rollback-Pricing-Strategy-Optimization",
        image: "/walmart_blue_colorful.png"
    },
    {
        id: 104,
        title: "Pacific Coast Development Analytics",
        level: "GRAD",
        description: "Spatial and market benchmark analysis regarding airport noise exposure and housing pricing near Salinas/Watsonville.",
        technologies: ["R", "tidyverse", "sf", "ggplot2", "Quarto", "Geospatial"],
        link: "https://github.com/gokulkumar1014/airport-proximity-real-estate-analytics",
        image: "/airport_analytics.png"
    },

    {
        id: 105,
        title: "Mobile Feast - Operational Analytics",
        level: "GRAD",
        description: "Spatial, demographic, and temporal analysis to optimize routing, scheduling, and pricing for multi-city food trucks.",
        technologies: ["R", "tidyverse", "ggplot2", "lubridate", "Quarto"],
        link: "https://github.com/gokulkumar1014/mobile-feast-operational-analytics",
        image: "/mobile_feast.png"
    },
    {
        id: 111,
        title: "Operations Research Optimization Modeling",
        level: "GRAD",
        description: "Linear programming + Gurobi decision models for profit maximization, scenario analysis, sensitivity (shadow prices), and procurement planning.",
        technologies: ["Python", "Gurobi", "Linear Programming", "Sensitivity Analysis", "pandas"],
        link: "https://github.com/gokulkumar1014/Operations-Research-Optimization-Modeling-Portfolio",
        image: "/retail_analytics.png" // Fallback to existing relevant image as gen failed
    },
    {
        id: 106,
        title: "EduTravel - Customer Retention Modeling",
        level: "GRAD",
        description: "Statistical storytelling to identify loyalty drivers using booking behavior, meeting cadence, and operational factors.",
        technologies: ["R", "tidyverse", "ggplot2", "Quarto", "Segmentation"],
        link: "https://github.com/gokulkumar1014/edutravel-customer-retention-modeling",
        image: "/edutravel_retention.png"
    },
    {
        id: 107,
        title: "DataMart - Customer Analytics",
        level: "GRAD",
        description: "Retail intelligence case using demographics, basket relationships, and value-risk segmentation for targeting.",
        technologies: ["R", "tidyverse", "ggplot2", "Quarto", "Segmentation"],
        link: "https://github.com/gokulkumar1014/datamart-customer-segmentation",
        image: "/datamart_analytics_lightblue.png"
    },

    // Note: Skipped duplicate Spark repo per instructions

    // --- UNDERGRAD PROJECTS ---
    {
        id: 1,
        title: "Traffic Light System Using 8051",
        level: "UNDERGRAD",
        description: "4-way traffic signal controller using 8051 with LED sequencing and 7-segment countdown timing.",
        technologies: ["8051", "Embedded C/ASM", "LEDs", "7-Segment Display", "Proteus"],
        link: "https://github.com/gokulkumar1014/Traffic-Light-System-Uisng-8051-Microcontroller",
        image: "/traffic_light_project.png"
    },
    {
        id: 2,
        title: "Hearing Aid with Binary Masking",
        level: "UNDERGRAD",
        description: "Speech enhancement approach using STFT + binary masking to improve intelligibility in noisy environments.",
        technologies: ["MATLAB", "DSP", "STFT", "Binary Masking", "Speech Enhancement"],
        link: "https://github.com/gokulkumar1014/-Implementation-Of-Hearing-Aid-Using-Binary-Masking",
        image: "/hearing_aid_project.png"
    },
    {
        id: 3,
        title: "IoT-Enabled Smart Home Appliances",
        level: "UNDERGRAD",
        description: "Arduino-based home automation prototype using sensor triggers for lighting, security, and appliance control.",
        technologies: ["Arduino UNO", "MQ6", "PIR", "Ultrasonic", "LDR", "Relays"],
        link: "https://github.com/gokulkumar1014/IoT-Enabled-Smart-Home-Appliances",
        image: "/smart_home_project.png"
    },
    {
        id: 4,
        title: "Obstacle Avoiding Robot",
        level: "UNDERGRAD",
        description: "Mobile robot that navigates autonomously using ultrasonic distance sensing and motor driver control.",
        technologies: ["Arduino UNO", "HC-SR04", "Servo", "Motor Driver", "GPS module"],
        link: "https://github.com/gokulkumar1014/Obstacle-Avoiding-Robot",
        image: "/robot_project.png"
    },
    {
        id: 5,
        title: "Gesture-to-Speech Wearable Glove",
        level: "UNDERGRAD",
        description: "Wearable glove that maps hand gestures to pre-defined voice prompts to assist paralysis patients.",
        technologies: ["Sensors", "Embedded System", "Gesture Mapping", "Voice Output"],
        link: "https://github.com/gokulkumar1014/Gesture-to-speech-wearable-glove-for-paralysis-patients",
        image: "/glove_project.png"
    }
];

export const education = [
    {
        id: 1,
        degree: "Master of Science in Business Analytics",
        institution: "The George Washington University - School of Business",
        location: "Washington, D.C, USA",
        year: "2024 – 2025",
        logoUrl: "/gw_george-washington-university_logo-freelogovectors.net_.webp",
        story: [
            {
                title: "What this degree meant to me",
                items: [
                    "Came in wanting to “learn analytics” - left knowing how to build systems that think, reason, and make decisions.",
                    "Spent most of my time turning messy ideas into working pipelines, not just notebooks.",
                    "Learned the hard difference between models that look good on paper and systems that actually hold up in practice.",
                    "This program pushed me from student to builder."
                ]
            },
            {
                title: "How I really learned",
                items: [
                    "Built agentic systems where every step had to be explainable, debuggable, and deterministic.",
                    "Broke things constantly - data pipelines, models, assumptions - and learned how to fix them properly.",
                    "Learned to think in trade-offs: accuracy vs. interpretability, speed vs. rigor, automation vs. control.",
                    "Stopped treating AI as magic and started treating it as engineering."
                ]
            },
            {
                title: "What I’m proud of",
                items: [
                    "WTCHTWR - an AI-native analytics engine that blends SQL, RAG, and agent workflows into real decisions.",
                    "EdgeCoach AI - built under time pressure, deployed serverlessly, and designed for real users with real deadlines.",
                    "Earning the <strong>GWSB Fellowship Award</strong>, FOR ACADEMIC EXCELLANCE IN UNDERGRADUATE."
                ]
            }
        ],
        coursework: [
            "Data Management",
            "Optimization Models",
            "Statistics for Analytics",
            "Machine Learning",
            "Investment Analysis",
            "Portfolio Management",
            "AI & ML for Marketing Automation",
            "Text Analytics"
        ]
    },
    {
        id: 2,
        degree: "B.Tech - Electronics & Communication Engineering",
        institution: "Vellore Institute of Technology (VIT)",
        location: "Vellore, Tamil Nadu, India",
        year: "2019 – 2023",
        logoUrl: "/vit_logo.png",
        story: [
            {
                title: "What shaped me here",
                items: [
                    "This is where I learned how systems actually work - pins, signals, timing, failures.",
                    "Debugging hardware taught me patience, precision, and respect for fundamentals.",
                    "If something didn’t work, there was no abstraction to hide behind - you had to understand it."
                ]
            },
            {
                title: "What stuck with me",
                items: [
                    "Building things from scratch before libraries existed to help.",
                    "Thinking in constraints - power, time, memory - long before cloud compute made things easy.",
                    "Realizing that good engineering starts with clarity, not complexity."
                ]
            }
        ],
        coursework: [
            "Python Programming",
            "Calculus & Linear Algebra",
            "ECE Core Fundamentals",
            "IoT & Sensors",
            "Control Systems",
            "Computer Architecture"
        ]
    }
];

export const certifications = [
    {
        id: 1,
        title: "IBM RAG and Agentic AI (Specialization)",
        issuer: "IBM",
        date: "Sep 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/N0EHJH1CRKDX",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/N0EHJH1CRKDX",
        logo: "/logos/ibm_rag_agentic.png"
    },
    {
        id: 2,
        title: "Deep Learning Specialization Certificate",
        issuer: "DeepLearning.AI",
        date: "Aug 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/62DALFRHY20V",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/62DALFRHY20V",
        logo: "/logos/deep_learning_specialization.png"
    },
    {
        id: 3,
        title: "Machine Learning Specialization Certificate",
        issuer: "DeepLearning.AI",
        date: "Jul 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/DWIZFYTD35BB",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/DWIZFYTD35BB",
        logo: "/logos/machine_learning_specialization.png"
    },
    {
        id: 4,
        title: "Probability & Statistics for Machine Learning & Data Science",
        issuer: "DeepLearning.AI",
        date: "Jul 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/S1MNUSQ5SOK2",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/S1MNUSQ5SOK2",
        logo: "/logos/prob_stats_ml.png"
    },
    {
        id: 5,
        title: "Calculus for Machine Learning and Data Science",
        issuer: "DeepLearning.AI",
        date: "Jun 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/25OLWLZJJJIA",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/25OLWLZJJJIA",
        logo: "/logos/calculus_ml.png"
    },
    {
        id: 6,
        title: "Introduction to Tableau",
        issuer: "Tableau",
        date: "Feb 2024",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8LBXNB9MN7MW",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/8LBXNB9MN7MW",
        logo: "/logos/intro_tableau.png"
    },
    {
        id: 7,
        title: "JPMorgan Chase & Co. - Excel Skills Job Simulation",
        issuer: "Forage (JPMorgan Chase & Co.)",
        date: "Feb 2024",
        credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._Xb4ESkTTyt8828Nez_1708918031937_completion_certificate.pdf",
        kind: "Forage",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._Xb4ESkTTyt8828Nez_1708918031937_completion_certificate.pdf",
        logo: "/logos/jpmc_excel.png"
    },
    {
        id: 8,
        title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
        issuer: "Forage (Tata Group)",
        date: "Feb 2024",
        credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_Xb4ESkTTyt8828Nez_1708510529783_completion_certificate.pdf",
        kind: "Forage",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_Xb4ESkTTyt8828Nez_1708510529783_completion_certificate.pdf",
        logo: "/logos/tata_data_viz.png"
    },
    {
        id: 9,
        title: "Introduction to Web Development with HTML, CSS, JavaScript",
        issuer: "IBM Skills Network",
        date: "Sep 2022",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/RCQKA884FAK7",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/RCQKA884FAK7",
        logo: "/logos/ibm_web_dev.png"
    },
    {
        id: 10,
        title: "Lean Software Development",
        issuer: "University of Minnesota",
        date: "Aug 2022",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/T2CVCFWKTH78",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/T2CVCFWKTH78",
        logo: "/logos/lean_software_dev.jpeg"
    },
    {
        id: 11,
        title: "Foundations of Project Management",
        issuer: "Google",
        date: "Jul 2022",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/V2L9C5R5AC6B",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/V2L9C5R5AC6B",
        logo: "/logos/google_pm.png"
    }
];

export const publications = [
    {
        id: 1,
        title: "Enhancing user experience in 5G networks through dynamic mode selection in D-2-D mobility management scheme",
        journal: "ARPN Journal of Engineering and Applied Sciences",
        date: "Oct 10, 2023",
        link: "https://www.arpnjournals.com/jeas/jeas_0823_9278.htm"
    }
];

export const awards = [
    {
        id: 1,
        title: "GWSB Fellowship Award",
        institution: "George Washington University",
        date: "2024",
        description: "Merit-based fellowship awarded for outstanding academic excellence in undergraduate studies.",
        amount: "$22,000 USD"
    }
];
