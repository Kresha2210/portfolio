import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="glass p-10 rounded-2xl text-center">
      <Image
        src="/profile.jpg"
        width={400}
        height={200}
        className="rounded-full mx-auto"
        alt="profile"
      />
      <h2 className="mt-3 font-bold text-lg">Kresha Vora</h2>
      <p className="text-gray-400 text-sm">Full Stack Developer</p>
    </div>
  );
}