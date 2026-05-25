import StatsCard from "@/components/StatsCard";

export default function Platforms() {
  const profiles = [
    {
      key: "leetcode",
      title: "LeetCode",
      value: "Rating: N/A",
      url: "https://leetcode.com/u/Kresha22/",
      image: "/icons/leetcode.png",
    },
    {
      key: "codeforces",
      title: "Codeforces",
      value: "Rating: N/A",
      url: "https://codeforces.com/profile/kreshavora2210",
      image: "/icons/codeforces.jpg",
    },
    {
      key: "github",
      title: "GitHub",
      value: "5 repos",
      url: "https://github.com/Kresha2210",
      image: "/icons/github.png",
    },
    {
      key: "linkedin",
      title: "LinkedIn",
      value: "Connect",
      url: "https://www.linkedin.com/in/kresha-vora-77857b2a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image: "/icons/linkedin.svg",
    },
    {
      key: "naukari",
      title: "Naukri",
      value: "Rating: N/A",
      url: "https://www.naukri.com/code360/profile/Kresha",
      image: "/icons/naukri.jpg",
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {profiles.map((p) => (
        <a
          key={p.key}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <StatsCard title={p.title} value={p.value} image={p.image} />
        </a>
      ))}
    </div>
  );
}
