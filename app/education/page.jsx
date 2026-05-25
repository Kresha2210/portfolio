export default function Education() {
  const education = [
    {
      level: "Bachelor's",
      school: "Dhirubhai Ambani University",
      range: "2023 - Present",
      result: "CPI: 7.22/10",
    },
    {
      level: "12th",
      school: "Shree Taxshila Vidyalaya (GHSEB",
      range: "2022 - 2023",
      result: "Percentage: 86.5%",
    },
    {
      level: "10th",
      school: "Shree M. V. Patel Kanya Vidyalaya (GSEB)",
      range: "2020- 2021",
      result: "Percentage: 95.5%",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {education.map((e) => (
        <div key={e.level} className="glass p-4 rounded-xl text-center">
          <h3 className="font-semibold text-lg">{e.school}</h3>
          <p className="text-sm text-gray-400">{e.range}</p>
          <p className="mt-2 font-medium">{e.result}</p>
        </div>
      ))}
    </div>
  );
}
