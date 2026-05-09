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
    // Row 1 — BA Core (indices 0-12, shown in first carousel row)
    { name: "Excel", color: "#217346", logo: "microsoftexcel" },
    { name: "SQL", color: "#336791", logo: "postgresql" },
    { name: "Power BI", color: "#F2C811", logo: "powerbi" },
    { name: "Tableau", color: "#E97627", logo: "tableau" },
    { name: "Agile / Scrum", color: "#0052CC", logo: "agile" },
    { name: "Salesforce", color: "#00A1E0", logo: "salesforce" },
    { name: "Jira", color: "#0052CC", logo: "jira" },
    { name: "Confluence", color: "#172B4D", logo: "confluence" },
    { name: "Visio", color: "#3955A3", logo: "microsoftvisio" },
    { name: "Lucidchart", color: "#FF6C37", logo: "lucid" },
    { name: "BPMN", color: "#005A9C", logo: "diagramsdotnet" },
    { name: "UAT", color: "#4CAF50", logo: "checkmarx" },
    { name: "Statistics", color: "#276DC3", logo: "r" },

    // Row 2 — Technical Edge (indices 13+, shown in second carousel row)
    { name: "Python", color: "#3776AB", logo: "python" },
    { name: "Database Mgt", color: "#336791", logo: "postgresql" },
    { name: "Vector Database", color: "#9835D1", logo: "duckdb" },
    { name: "AWS", color: "#232F3E", logo: "amazonaws" },
    { name: "GCP", color: "#4285F4", logo: "googlecloud" },
    { name: "Machine Learning", color: "#F7931E", logo: "scikitlearn" },
    { name: "Agentic AI", color: "#1C3C3C", logo: "langchain" },
    { name: "API Integration", color: "#009688", logo: "fastapi" },
    { name: "FastAPI", color: "#009688", logo: "fastapi" },
    { name: "Git/GitHub", color: "#F05032", logo: "github" },
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
        id: "prof-0",
        title: "Business Analyst",
        org: "Community Dreams Foundation",
        dates: "Apr 2026 – Present",
        location: "Remote (Arlington, VA)",
        bullets: [
            "Audited operational workflows to identify process gaps and built business cases for technology initiatives to improve delivery efficiency.",
            "Gathered and translated business objectives into actionable requirements through structured engagement with executive and technical stakeholders.",
            "Monitored project milestones via data analysis and enforced quality standards across the solution lifecycle."
        ],
        section: "Professional"
    },
    {
        id: "prof-1",
        title: "Business & Consulting Analyst",
        org: "COLOURS GLOBAL, INC. (Internship)",
        dates: "Feb 2025 – Apr 2025",
        location: "Washington, D.C., United States",
        bullets: [
            "Analyzed government RFP data across Agile sprints, identified 10+ high-value opportunities, and delivered a strategic roadmap to executive stakeholders.",
            "Led requirements gathering for a platform expansion by mapping third-party API schemas (Ticketmaster, Eventbrite, OpenTable) to align solutions with business objectives.",
            "Assessed API feasibility, security, and scalability to author an Integration Strategy Sheet driving data-driven expansion decisions."
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
            "Performed a data-driven feasibility study for a potential e-commerce startup; improved portfolio efficiency by 20% via financial modeling.",
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
    level: "BA" | "TECH" | "BOTH";
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
        id: 115,
        title: "Retention-Sync: Multi-Modal Churn and Recommendation Intelligence",
        level: "BOTH",
        description: "Identified high-risk churn segments for a retail fashion brand by analyzing customer purchasing patterns and style preferences - enabling targeted CRM interventions and personalized recommendations to improve retention.",
        technologies: ["Retail Analytics", "CRM", "Churn Analysis", "Customer Intelligence", "Style Segmentation"],
        link: "https://github.com/gokulkumar1014/hm-fashion-churn-multimodal",
        featured: true,
        categoryHint: "AI",
        image: "/hm_fashion_churn.png"
    },
    {
        id: 101,
        title: "WTCHTWR - AI-Powered STR Analytics Agent",
        level: "BOTH",
        description: "Built an AI-powered decision support tool for short-term rental operators - translating market data and guest review sentiment into actionable revenue strategies and competitive positioning insights.",
        technologies: ["Short-Term Rental", "Agentic AI", "Market Intelligence", "Revenue Analytics", "Review Analysis"],
        link: "https://github.com/gokulkumar1014/wtchtwr-ai-agent",
        featured: true,
        categoryHint: "AI",
        image: "/wtchtwr_modern_wood.png"
    },
    {
        id: 102,
        title: "EdgeCoach AI - Interview Intelligence Agent",
        level: "TECH",
        description: "Serverless RAG assistant that extracts intent, retrieves real interview experiences from the web, and generates a structured prep guide with sources.",
        technologies: ["AWS Lambda", "Bedrock", "Claude", "Streamlit", "Tavily", "RAG"],
        link: "https://github.com/gokulkumar1014/EdgeCoach-AI-Interview-Intelligence-Agent",
        categoryHint: "AI",
        image: "/edgecoach_ai.png"
    },
    {
        id: 103,
        title: "Federal Committees Contribution Analysis",
        level: "BA",
        description: "Analyzed U.S. federal campaign contribution data to uncover donor behavior patterns, geographic influence clusters, and funding trends - delivering stakeholder intelligence for policy-focused decision-making.",
        technologies: ["Policy Analysis", "Donor Patterns", "Geographic Intelligence", "Stakeholder Mapping", "Public Sector"],
        link: "https://github.com/gokulkumar1014/analysis-of-federal-committees-contribution",
        image: "/federal_contribution.png"
    },
    // INSERTED PROJECTS HERE
    {
        id: 109,
        title: "Capital Bikeshare - ML Pipeline",
        level: "TECH",
        description: "End-to-end supervised learning workflow covering regression, classification, and regularization on Bikeshare data.",
        technologies: ["Python", "scikit-learn", "Regression", "Cross-Validation"],
        link: "https://github.com/gokulkumar1014/Capital-Bikeshare-ML-Supervised",
        image: "/bikeshare_contrast.png"
    },
    {
        id: 108,
        title: "Heart Disease Data Management Architecture",
        level: "TECH",
        description: "Cloud-based relational database system on AWS EC2, implementing normalized data modeling (ERD), complex SQL querying, and secure pipeline architecture for healthcare data.",
        technologies: ["AWS EC2", "SQL", "Data Modeling", "PostgreSQL", "ER Diagrams", "Python"],
        link: "https://github.com/gokulkumar1014/indicators-of-heart-disease",
        image: "/heart_disease_analytics.png"
    },
    {
        id: 110,
        title: "Walmart Rollback Pricing Strategy Optimization",
        level: "BA",
        description: "Developed a pricing optimization strategy for Walmart's rollback program by segmenting customer behavior, modeling discount sensitivity, and forecasting revenue impact to guide marketing investment decisions.",
        technologies: ["Pricing Strategy", "Customer Segmentation", "Revenue Forecasting", "Discount Optimization", "Marketing Analytics"],
        link: "https://github.com/gokulkumar1014/Walmart-Rollback-Pricing-Strategy-Optimization",
        image: "/walmart_blue_colorful.png"
    },
    {
        id: 104,
        title: "Pacific Coast Development Analytics",
        level: "TECH",
        description: "Spatial and market benchmark analysis regarding airport noise exposure and housing pricing near Salinas/Watsonville.",
        technologies: ["R", "tidyverse", "sf", "ggplot2", "Quarto", "Geospatial"],
        link: "https://github.com/gokulkumar1014/airport-proximity-real-estate-analytics",
        image: "/airport_analytics.png"
    },

    {
        id: 105,
        title: "Mobile Feast - Operational Analytics",
        level: "BA",
        description: "Delivered operational analytics for a multi-city food truck business - identifying optimal routes, peak demand windows, and pricing levers to maximize revenue and reduce scheduling inefficiency.",
        technologies: ["Route Optimization", "Operational Planning", "Pricing Strategy", "Demographic Analysis", "F&B Industry"],
        link: "https://github.com/gokulkumar1014/mobile-feast-operational-analytics",
        image: "/mobile_feast.png"
    },
    {
        id: 111,
        title: "Operations Research Optimization Modeling",
        level: "BA",
        description: "Built decision models for profit maximization and procurement planning - translating complex business constraints into actionable strategies through sensitivity and scenario analysis.",
        technologies: ["Decision Modeling", "Profit Maximization", "Procurement Planning", "Scenario Analysis", "Cost Optimization"],
        link: "https://github.com/gokulkumar1014/Operations-Research-Optimization-Modeling-Portfolio",
        image: "/retail_analytics.png" // Fallback to existing relevant image as gen failed
    },
    {
        id: 106,
        title: "EduTravel - Customer Retention Modeling",
        level: "BA",
        description: "Uncovered key loyalty drivers for an edu-travel company by analyzing booking cadence, meeting patterns, and operational factors - delivering data-backed recommendations to reduce churn and improve retention.",
        technologies: ["Customer Retention", "Loyalty Analytics", "Booking Behavior", "Churn Drivers", "Travel Industry"],
        link: "https://github.com/gokulkumar1014/edutravel-customer-retention-modeling",
        image: "/edutravel_retention.png"
    },
    {
        id: 107,
        title: "DataMart - Customer Analytics",
        level: "BA",
        description: "Profiled a retail customer base using demographic analysis, basket relationships, and value-risk segmentation — enabling targeted marketing strategies and improving campaign precision for high-value customers.",
        technologies: ["Customer Segmentation", "Basket Analysis", "Value-Risk Profiling", "Retail Intelligence", "Demographic Targeting"],
        link: "https://github.com/gokulkumar1014/datamart-customer-segmentation",
        image: "/datamart_analytics_lightblue.png"
    },

    // Note: Skipped duplicate Spark repo per instructions

    // --- UNDERGRAD PROJECTS ---
    {
        id: 1,
        title: "Traffic Light System Using 8051",
        level: "TECH",
        description: "4-way traffic signal controller using 8051 with LED sequencing and 7-segment countdown timing.",
        technologies: ["8051", "Embedded C/ASM", "LEDs", "7-Segment Display", "Proteus"],
        link: "https://github.com/gokulkumar1014/Traffic-Light-System-Uisng-8051-Microcontroller",
        image: "/traffic_light_project.png"
    },
    {
        id: 2,
        title: "Hearing Aid with Binary Masking",
        level: "TECH",
        description: "Speech enhancement approach using STFT + binary masking to improve intelligibility in noisy environments.",
        technologies: ["MATLAB", "DSP", "STFT", "Binary Masking", "Speech Enhancement"],
        link: "https://github.com/gokulkumar1014/-Implementation-Of-Hearing-Aid-Using-Binary-Masking",
        image: "/hearing_aid_project.png"
    },
    {
        id: 3,
        title: "IoT-Enabled Smart Home Appliances",
        level: "TECH",
        description: "Arduino-based home automation prototype using sensor triggers for lighting, security, and appliance control.",
        technologies: ["Arduino UNO", "MQ6", "PIR", "Ultrasonic", "LDR", "Relays"],
        link: "https://github.com/gokulkumar1014/IoT-Enabled-Smart-Home-Appliances",
        image: "/smart_home_project.png"
    },
    {
        id: 4,
        title: "Obstacle Avoiding Robot",
        level: "TECH",
        description: "Mobile robot that navigates autonomously using ultrasonic distance sensing and motor driver control.",
        technologies: ["Arduino UNO", "HC-SR04", "Servo", "Motor Driver", "GPS module"],
        link: "https://github.com/gokulkumar1014/Obstacle-Avoiding-Robot",
        image: "/robot_project.png"
    },
    {
        id: 5,
        title: "Gesture-to-Speech Wearable Glove",
        level: "TECH",
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
                    "Came in to learn analytics - left with a clear identity as a Business Analyst who can translate data into decisions, not just dashboards.",
                    "Learned that the real skill isn't the model - it's knowing which business question to ask before building anything.",
                    "This program pushed me from analyst-in-theory to practitioner who can own the full BA lifecycle."
                ]
            },
            {
                title: "How I really learned",
                items: [
                    "Worked on projects where stakeholders had real constraints - budgets, timelines, ambiguous requirements - and learned to navigate all of them.",
                    "Developed the discipline to document, validate, and communicate findings rather than just running the analysis.",
                    "Learned to frame every output around a decision - not just a number."
                ]
            },
            {
                title: "What I'm proud of",
                items: [
                    "WTCHTWR - designed as a decision support tool for rental operators, not just a tech demo.",
                    "Walmart, EduTravel, DataMart - projects where business impact was the metric, not model accuracy.",
                    "Earning the <strong>Beta Gamma Sigma membership invitation</strong> from GWU for academic excellence."
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
                    "An engineering foundation that taught me how to break a complex system into its smallest parts and understand each one.",
                    "Learned that every requirement matters - a missed constraint in hardware means total failure, not a warning message.",
                    "This precision carries directly into requirements analysis and process mapping."
                ]
            },
            {
                title: "What stuck with me",
                items: [
                    "Working under strict constraints taught me to prioritize ruthlessly - a skill that defines good BA work.",
                    "Documenting system behavior before building it - that habit became my approach to BRDs and user stories.",
                    "Good solutions start with clarity of purpose, not complexity of tools."
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
        id: -1,
        title: "Microsoft Business Analyst Professional Certificate",
        issuer: "Microsoft",
        date: "May 2026",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/P8JDZSLCF7BD",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/P8JDZSLCF7BD",
        logo: "https://img.icons8.com/color/96/microsoft.png"
    },
    {
        id: 0,
        title: "PyTorch for Deep Learning",
        issuer: "DeepLearning.AI",
        date: "Feb 2026",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/K5B7CY7P6Y62",
        kind: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/K5B7CY7P6Y62",
        logo: "/logos/prob_stats_ml.png"
    },
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
        id: 0,
        title: "Beta Gamma Sigma - International Business Honor Society",
        institution: "George Washington University School of Business",
        date: "2025",
        description: "Distinguished by GWU as one of its most outstanding business students and invited to join Beta Gamma Sigma - recognizing the Top 15% of the graduating class.",
        link: "https://drive.google.com/file/d/13tV9JJnpyKQWtzoGGvGCPHi4sP3s1O4u/view?usp=sharing",
        kind: "honor"
    },
    {
        id: 1,
        title: "GWSB Fellowship Award",
        institution: "George Washington University",
        date: "2024",
        description: "Merit-based fellowship awarded for outstanding academic excellence in undergraduate studies.",
        amount: "$22,000 USD"
    }
];
