import Image from "next/image";
import Card from "@/components/Card";

export default function About() {
  // Journey removed per request — replaced with experience below

  const achievements = [
    {
      key: "nmms",
      title: "NMMS - Under top 10 in district",
      image: "/achievements/nmms.svg",
      year: "National Means-cum-Merit Scholarship - 2018",
    },
    {
      key: "tfws",
      title: "Got TFWS seat in DAU",
      image: "/achievements/tfws.svg",
      year: "ACPC Rank 22 in all Gujarat - 2023",
    },
    {
      key: "naach",
      title: "Winner — NAACH event",
      image: "/achievements/naach.svg",
      year: "Classical Garba dance competition -2024, 2025",
    },
  ];

  const activities = [
    {
      key: "khelaiya",
      title: "Deputy Convener — Khelaiya Club, DAU in 2025-26",
      image: "/activities/khelaiya.png",
    },
    {
      key: "synapse",
      title: "Managing Footloose Event — Synapse'24 at DAU",
      image: "/activities/synapse.jpg",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>

        <p className="text-gray-400 leading-relaxed">
          I’m a passionate frontend developer with a strong foundation in data
          structures and algorithms and a keen interest in building
          user-centered web applications. I specialize in creating responsive,
          high-performance interfaces using Java script and React, turning ideas
          into polished, production-ready experiences. I value clean code,
          thoughtful UX, and measurable impact. I actively practice competitive
          programming to sharpen my problem-solving skills and leverage AI tools
          to enhance development efficiency, streamline workflows, and build
          smarter user experiences.
        </p>

        <h2 className="mt-6 font-semibold">Experience</h2>
        <div className="mt-3 grid gap-4">
          <Card>
            <div className="flex items-center gap-4">
              <a
                href="https://printftech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 block"
              >
                <Image
                  src="/experience/printf.png"
                  alt="Printf Technologies"
                  width={100}
                  height={100}
                />
              </a>
              <div>
                <h3 className="font-semibold">Frontend Developer (Intern)</h3>
                <p className="text-sm text-gray-400">Printf Technologies</p>
                <p className="text-xs text-gray-500 mt-1">
                  May 2026 - July 2026
                </p>
                <a
                  href="https://printftech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 text-sm mt-2 inline-block"
                >
                  Company website →
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-sm font-semibold text-gray-200">
                SB
              </div>
              <div>
                <h3 className="font-semibold">Social Work Intern</h3>
                <p className="text-sm text-gray-400">
                  Shree Bolbala Charitable Trust
                </p>
                <p className="text-xs text-gray-500 mt-1">Dec 2024, Rajkot</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((a) => (
            <Card key={a.key}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-3">
                  <Image src={a.image} alt={a.title} width={80} height={80} />
                </div>
                <h3 className="font-semibold text-center">{a.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{a.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Co‑curricular Activities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {activities.map((it) => (
            <Card key={it.key}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16">
                  <Image src={it.image} alt={it.title} width={64} height={64} />
                </div>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
