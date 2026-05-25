import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Kresha Vora
            </h1>

            <p className="text-gray-600 max-w-xl text-lg">
              I’m a Frontend Developer who builds responsive and intuitive web applications using React and Next.js. With a strong base in C++, Python and SQL, I also integrate AI tools into my workflow to code smarter, move faster, and create better user experiences.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {["C++","Python", "SQL", "React", "Next.js", "AI Tools"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-800"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="/about" className="btn">
                About
              </a>
              <a href="/projects" className="btn btn-ghost">
                Projects
              </a>
              <a
                href="/resume.pdf"
                className="text-sm text-gray-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                Download My Resume
              </a>
            </div>
          </div>

          {/* Right: Profile */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
