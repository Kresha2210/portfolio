import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Fingenie",
      desc: "An AI-style finance companion that turns dense statements into plain-language summaries, KPI snapshots, risk highlights, and trend insights for quicker decisions.",
      image: "/projects/fingenie.svg",
      techStack: [
        "UI/UX Design",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "AI Integration",
      ],
      github: "https://github.com/Kresha2210/Fingenie",
    },
    {
      title: "CipherX",
      desc: "A TV channel scheduler built around data structures and algorithms, designed to help families organize favorites, avoid conflicts, and reduce missed episodes.",
      image: "/projects/cipherx.svg",
      techStack: ["C++", "Data Structures", "Algorithms", "STL"],
      github: "https://github.com/Kresha2210/CipherX",
    },
    {
      title: "Crime-Tracking-and-Analysis-Database",
      desc: "A database-driven crime tracking system for storing reports, studying patterns, and giving law-enforcement workflows a clearer analytical view.",
      image: "/projects/crime-tracking-and-analysis-database.svg",
      techStack: ["MySQL", "Database Design", "SQL Queries", "Data Analysis"],
      github:
        "https://github.com/Kresha2210/Crime-Tracking-and-Analysis-Database",
    },
    {
      title: "personal-life-tracker",
      desc: "A clean personal tracker for routines, learning goals, and self-growth, built to make consistency easier to see and easier to maintain.",
      image: "/projects/personal-life-tracker.svg",
      techStack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      github: "https://github.com/Kresha2210/personal-life-tracker",
    },
    {
      title: "LDPC Coding and Decoding for 5G NR",
      desc: "A MATLAB implementation of LDPC coding and decoding for 5G NR Base Graph 2, focused on channel-coding experiments and signal-processing validation.",
      image: "/projects/ldpc.svg",
      techStack: ["MATLAB", "LDPC", "Signal Processing"],
      github: "https://github.com/Kresha2210/LDPC",
    },
    {
      title: "Portfolio Website",
      desc: "The current portfolio itself, designed to present projects, achievements, and contact details in a clean and responsive experience.",
      image: "/projects/portfolio.svg",
      techStack: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/Kresha2210/portfolio",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Selected Projects
        </h1>
        <p className="mt-2 text-gray-400">
          A closer look at the work behind the portfolio, with the core stack
          and the idea behind each build.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            desc={p.desc}
            image={p.image}
            github={p.github}
            techStack={p.techStack}
          />
        ))}
      </div>
    </section>
  );
}
