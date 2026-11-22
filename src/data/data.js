// =====================================================================
//  ALL PORTFOLIO CONTENT LIVES HERE.
//  Edit this file only; every component reads from it.
// =====================================================================

export const profile = {
  name: "Abhishek NK",
  shortName: "Abhishek N K",
  role: "Java Full Stack Developer",
  roles: [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "REST API Builder",
  ],
  location: "Bengaluru, India",
  email: "abheeknk2004@gmail.com",
  phone: "+91 9746714897",
  resume: "/Abhishek_Resume.pdf",
  availability: "Open to full-time roles",
  tagline:
    "I build fast, reliable web applications, from Spring Boot services and databases to responsive React interfaces.",
};

export const socials = {
  // TODO: replace "#" with your real profile URLs
  linkedin: "#",
  github: "#",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

// Small "code card" shown in the hero
export const heroCode = [
  "@RestController",
  "public class Abhishek {",
  "",
  '  String role  = "Java Full Stack";',
  '  String stack = "Spring Boot + React";',
  '  String city  = "Bengaluru";',
  "  boolean openToWork = true;",
  "}",
];

export const about = {
  title: "About me",
  paragraphs: [
    "I am a full stack developer with a strong base in frontend and backend development, database management, and building responsive web applications.",
    "I work with Java, Spring Boot, Python, JavaScript, PHP and SQL, and I enjoy building user-friendly interfaces, server-side logic, database integrations and REST APIs.",
    "I use AI tools such as ChatGPT, Claude and OpenAI Codex for coding assistance, debugging and research, and I am always learning new technologies to build efficient and reliable web solutions.",
  ],
  education: {
    school: "St Paul's College, Bengaluru",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 – 2024",
  },
  highlights: [
    { label: "Projects", value: "2" },
    { label: "Internship", value: "1" },
    { label: "Certifications", value: "4" },
    { label: "Languages", value: "6" },
  ],
};

export const projects = [
  {
    title: "GoRest",
    subtitle: "AI-assisted intelligent route planning web app",
    description:
      "An intelligent route planner that finds the best way to travel and suggests useful stops along the route, based on the vehicle being used.",
    highlights: [
      "Interactive map visualization, geolocation and route calculation using OpenStreetMap, OpenRouteService, Nominatim and the Overpass API.",
      "Vehicle-aware pit-stop recommendations with location filtering for restaurants, hotels, fuel stations and other services.",
      "GeoJSON datasets for Karnataka, Kerala, Tamil Nadu, Andhra Pradesh and Telangana for regional location discovery.",
    ],
    tech: ["Python", "Flask", "JavaScript", "Leaflet.js", "OpenStreetMap", "OpenRouteService", "Overpass API", "GeoJSON"],
    github: "", // add your repo link, e.g. "https://github.com/you/gorest"
    live: "", // add a live demo link if you have one
  },
  {
    title: "Tourism Management System",
    subtitle: "Web-based tour package and booking platform",
    description:
      "A centralized platform to manage tour packages, customer details and bookings, with AI features that improve the booking experience.",
    highlights: [
      "Designed and optimized MySQL tables with validation and full CRUD operations.",
      "AI-powered travel recommendations that suggest suitable tour packages from customer preferences.",
      "AI chatbot that answers tourism-related questions for users.",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "AI Integration"],
    github: "",
    live: "",
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Quantum Tech IT Solutions",
    location: "Bengaluru",
    period: "May 2024",
    points: [
      "Worked with the development team to design, develop and test software applications.",
      "Debugged, troubleshot and resolved technical issues to improve application performance.",
      "Used Claude, ChatGPT and OpenAI Codex for code generation, debugging and technical research.",
      "Gained hands-on experience with the software development lifecycle and team-based project delivery.",
    ],
  },
];

export const skills = [
  { category: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "C++", "Dart"] },
  { category: "Backend", items: ["Spring Boot", "Microservices", "REST APIs", "API Design", "Django", "Vert.x", "Flask", "Messaging"] },
  { category: "Frontend", items: ["React.js", "Angular", "HTML", "CSS", "Flutter"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "Redis", "Firebase"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "CI/CD", "Git", "Maven"] },
  { category: "AI Tools", items: ["Claude", "ChatGPT", "OpenAI Codex", "AI-Assisted Coding", "Code Generation", "Debugging"] },
  { category: "Testing", items: ["Unit Testing", "Integration Testing", "Test Automation", "Postman", "Monitoring"] },
  { category: "Core Concepts", items: ["Software Architecture", "OOP", "DSA", "Problem Solving", "Performance Optimization"] },
  { category: "Methodologies", items: ["Agile", "Scrum", "Code Review"] },
];

export const certificates = [
  { title: "Full Stack Development Course", issuer: "Besant Institution, Bangalore", year: "2025", link: "" },
  { title: "Ethical Hacking and Cloud Computing", issuer: "Netcraftz", year: "2024", link: "" },
  { title: "JavaScript", issuer: "Infosys Springboard", year: "2026", link: "" },
  { title: "Python Fundamentals", issuer: "Infosys Springboard", year: "2026", link: "" },
];

export const contact = {
  heading: "Let's build something together",
  text: "I am looking for a Java full stack role. Send a message and I will reply as soon as I can.",
  // 1. Create a free form at https://formspree.io
  // 2. Paste your form ID below (the part after /f/ in the endpoint URL)
  formspreeId: "https://formspree.io/f/xyewneze",
};
