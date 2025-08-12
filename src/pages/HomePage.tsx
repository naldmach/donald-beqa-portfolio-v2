import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useRotatingTypewriter } from "@/hooks/useRotatingTypewriter";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code as CodeIcon,
  ExternalLink,
} from "lucide-react";

type FeaturedProject = {
  category: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  code?: string;
  demo?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    category: "Backend Development",
    title: "Personal Finance Tracker",
    description:
      "A comprehensive C# console application for tracking personal expenses, income, and budgets with data persistence and reporting features.",
    features: [
      "User authentication",
      "Expense categorization",
      "Budget planning",
      "Financial reports",
    ],
    tech: ["C#", ".NET Core", "Entity Framework", "SQL Server", "LINQ"],
    code: "https://github.com/naldmach/PersonalFinanceTracker",
    demo: "#",
  },
  {
    category: "Web Development",
    title: "ShopBuddy E-commerce Platform",
    description:
      "Full-featured e-commerce web application built with C# and ASP.NET Core, featuring product catalog, shopping cart, and order management.",
    features: [
      "Product management",
      "Shopping cart",
      "User accounts",
      "Order tracking",
    ],
    tech: ["C#", "ASP.NET Core", "MVC", "Entity Framework", "Bootstrap", "HTML", "JavaScript"],
    code: "https://github.com/naldmach/shopbuddy-ecommerce",
    demo: "#",
  },
  {
    category: "API Development",
    title: "TaskGuard API",
    description:
      "RESTful API built with Java Spring Boot for managing tasks and projects with user authentication and role-based access control.",
    features: [
      "JWT authentication",
      "CRUD operations",
      "Role management",
      "API documentation",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL"],
    code: "https://github.com/naldmach/taskguard-api",
    demo: "#",
  },
  {
    category: "Web Application",
    title: "Inventory Management System",
    description:
      "PHP Laravel application for managing warehouse inventory with real-time stock tracking and automated alerts.",
    features: [
      "Stock management",
      "Automated alerts",
      "Reports",
      "Multi-user support",
    ],
    tech: ["PHP", "Laravel", "MySQL/SQLite", "Vue.js", "Bootstrap 5", "Blade Templates"],
    code: "https://github.com/naldmach/shelfwise-inventoryms",
    demo: "#",
  },
  {
    category: "QA Automation",
    title: "E-commerce Testing Suite",
    description:
      "Comprehensive automated testing framework using Selenium WebDriver for testing an e-commerce platform across multiple browsers.",
    features: [
      "Cross-browser testing",
      "Automated test reports",
      "CI/CD integration",
      "Data-driven tests",
    ],
    tech: ["Selenium", "Java", "TestNG", "Maven", "Page Object Model"],
    code: "#",
    demo: "#",
  },
  {
    category: "Test Automation",
    title: "Web Application Test Framework",
    description:
      "Modern testing framework built with Playwright for end-to-end testing of web applications with advanced reporting capabilities.",
    features: [
      "Visual testing",
      "API testing",
      "Mobile testing",
      "Parallel execution",
    ],
    tech: [
      "Playwright",
      "TypeScript",
      "Node.js",
      "HTML Reports",
      "GitHub Actions",
    ],
    code: "#",
    demo: "#",
  },
];

export default function HomePage() {
  const rotating = useRotatingTypewriter(
    ["Hi, I'm Donald", "Backend Developer", "QA Tester"],
    { typeSpeedMs: 70, deleteSpeedMs: 45, pauseMs: 1200, loop: true }
  );
  const [contactStatus, setContactStatus] = React.useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries()) as Record<
      string,
      string
    >;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setContactStatus("Your message has been sent! ✅");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setContactStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-4rem)]">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600 to-black" />
          <div className="container flex flex-col items-center justify-center text-center py-24 md:py-32 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium mb-6">
              Junior Developer & QA Tester
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              {rotating}
              <span className="border-r-2 border-current animate-pulse ml-1" />
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-8">
              Building robust backend solutions and ensuring software quality
              through comprehensive testing
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com/naldmach"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="min-w-[160px]">View Github Projects</Button>
              </a>
              <a 
                href="https://drive.google.com/file/d/1qJ9MYOw-s8r4T62RrEUdOx0H8TCHZz6G/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="min-w-[160px] bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Download Resume
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {["C#", "Java", "PHP", "Laravel", "Selenium", "Playwright"].map(
                (s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-3 py-1 text-white/90 border border-white/10"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/90">
              <a
                href="https://github.com/naldmach"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/donaldmachon/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:donald.machon@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="relative py-16 md:py-20 scroll-mt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900 to-black" />
          <div className="container text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Technical Skills
            </h2>
            <p className="text-white/80 mb-10">
              Combining development expertise with quality assurance to deliver
              reliable software solutions
            </p>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                  Backend Development
                </h3>
                <p className="text-white/80 mb-4">
                  Building scalable server-side applications and APIs
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C# / .NET",
                    "Java",
                    "PHP",
                    "Laravel",
                    "ASP.NET Core",
                    "Spring Boot",
                    "RESTful APIs",
                    "SQL Server",
                    "MySQL",
                    "Git",
                    "Entity Framework",
                    "MVC Architecture",
                    "HTML",
                    "JavaScript",
                    "Tailwind CSS/Bootstrap",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs rounded-full bg-white/10 px-3 py-1 border border-white/10 text-white/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-white/80 mb-4">
                  Ensuring software quality through comprehensive testing
                  strategies
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Selenium WebDriver",
                    "Playwright",
                    "Test Planning",
                    "Manual Testing",
                    "Automated Testing",
                    "Bug Tracking",
                    "Test Cases",
                    "Regression Testing",
                    "API Testing",
                    "Performance Testing",
                    "Agile Testing",
                    "Quality Assurance",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs rounded-full bg-white/10 px-3 py-1 border border-white/10 text-white/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section
          id="projects"
          className="bg-black text-white py-16 md:py-20 scroll-mt-20"
        >
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Featured Projects
            </h2>
            <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto">
              A showcase of backend development and quality assurance projects
              demonstrating technical skills and problem-solving abilities
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="inline-block text-xs rounded-full px-3 py-1 border border-white/10 bg-white/5 text-white/80 mb-3">
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-blue-400">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    {proj.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-white/70 text-sm mb-2">Key Features:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {proj.features.map((f) => (
                        <li key={f} className="text-sm">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-5">
                    <p className="text-white/70 text-sm mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full bg-white/5 px-2.5 py-1 border border-white/10 text-white/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={proj.code ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 py-2 hover:bg-white/10 text-sm transition-colors"
                    >
                      <CodeIcon className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={proj.demo ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 py-2 hover:bg-white/10 text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container py-12 md:py-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I’m a self-taught developer focused on backend development and QA
            testing. I enjoy solving real problems, writing clean APIs, and
            making sure features work as intended.
          </p>

          <div className="border-l-2 border-gray-200 dark:border-gray-700 ml-4">
            {[
              {
                year: "2024",
                title: "Began my Coding Quest",
                desc: "Learned programming fundamentals and started building small utilities and scripts.",
              },
              {
                year: "2025",
                title: "QA Internship",
                desc: "Wrote and executed test cases, reported bugs, and learned automation basics.",
              },
              {
                year: "2025",
                title: "First Backend Project",
                desc: "Built REST APIs with Node.js/Express and integrated a NoSQL database.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="relative mb-8 pl-4"
              >
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 absolute -left-1.5 top-1.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.year}
                </p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Let's Work Together */}
        <section id="contact" className="relative py-16 md:py-20 scroll-mt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900 to-black" />
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
              Let's Work Together
            </h2>
            <p className="text-white/80 text-center mb-10">
              Ready to contribute to your development team with backend
              expertise and quality assurance skills
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <ul className="space-y-3 mb-6 text-white/90">
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5" /> donald.machon@gmail.com
                  </li>
                  <li className="flex items-center gap-3">+639487062684</li>
                  <li className="flex items-center gap-3">
                    Available for Remote Work
                  </li>
                </ul>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/donaldmachon/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10 text-sm inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/naldmach"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10 text-sm inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>

                <div className="h-px bg-white/10 my-6" />
                <h4 className="font-semibold mb-3">Send a quick message</h4>
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs text-white/80 mb-1"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        className="w-full rounded-md border border-white/15 bg-white/5 text-white placeholder:text-white/60 p-2"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs text-white/80 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-white/15 bg-white/5 text-white placeholder:text-white/60 p-2"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs text-white/80 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 text-white placeholder:text-white/60 p-2"
                      placeholder="How can I help?"
                    />
                  </div>
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
                {contactStatus && (
                  <p className="mt-3 text-green-300 text-sm">{contactStatus}</p>
                )}
              </div>
              <div className="grid gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                  <h4 className="font-semibold mb-1">Backend Development</h4>
                  <p className="text-white/80 mb-3">
                    Building robust APIs and server-side applications with
                    modern frameworks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["C#", "Java", "PHP"].map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full bg-white/10 px-3 py-1 border border-white/10 text-white/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-white/80 mb-3">
                    Ensuring software quality through comprehensive testing
                    strategies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Selenium", "Playwright", "Test Automation"].map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full bg-white/10 px-3 py-1 border border-white/10 text-white/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                  <h4 className="font-semibold mb-1">Problem Solving</h4>
                  <p className="text-white/80">
                    Analytical mindset with attention to detail and commitment
                    to clean, maintainable code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
