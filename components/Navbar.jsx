"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center mt-4">
      <nav className="flex gap-4">
        <Link href="/" className="btn">
          Home
        </Link>
        <Link href="/about" className="btn">
          About
        </Link>
        <Link href="/projects" className="btn">
          Projects
        </Link>
        <Link href="/platforms" className="btn">
          Platforms
        </Link>
        <Link href="/education" className="btn">
          Education
        </Link>
        <Link href="/contact" className="btn">
          Contact
        </Link>
      </nav>
    </div>
  );
}
