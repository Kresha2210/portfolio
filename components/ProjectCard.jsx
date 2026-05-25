import PropTypes from "prop-types";
import Image from "next/image";

export default function ProjectCard({ title, desc, image, github, techStack }) {
  return (
    <article className="glass overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1">
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>
      ) : null}

      <div className="p-5 space-y-4">
        <div>
          <h2 className="font-semibold text-xl text-white">{title}</h2>
          <p className="mt-2 text-gray-300 text-sm leading-6">{desc}</p>
        </div>

        {techStack?.length ? (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
          >
            View on GitHub <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string,
  github: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
};
