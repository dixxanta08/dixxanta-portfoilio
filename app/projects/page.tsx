import Link from "next/link";
import projects from "../data/projects.json";

export const metadata = {
  title: "Projects - Dixanta Nath Shrestha",
  description:
    "Selected works and case studies showcasing full-stack development expertise.",
};

export default function ProjectsPage() {
  return (
    <div className="container-brutalist py-12">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Selected Work</h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
          A curated collection of projects demonstrating architectural
          decisions, technical implementation, and problem-solving approaches
          across the full stack.
        </p>
      </header>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border mb-12">
        <div>
          <div className="text-4xl font-bold mb-2">{projects.length}</div>
          <div className="uppercase-spaced text-muted">Projects</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">
            {projects.reduce((acc, p) => acc + p.technologies.length, 0)}
          </div>
          <div className="uppercase-spaced text-muted">Technologies</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">
            {new Set(projects.flatMap((p) => p.tags)).size}
          </div>
          <div className="uppercase-spaced text-muted">Tags</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">100%</div>
          <div className="uppercase-spaced text-muted">Production Ready</div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block group"
          >
            <article className="border-b border-border pb-8 hover:border-foreground transition-colors">
              {/* Project Index & Name */}
              <div className="flex items-baseline gap-6 mb-4">
                <span className="text-sm text-muted uppercase-spaced w-16">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h2>
              </div>

              {/* Project What */}
              <div className="flex gap-6 mb-6">
                <div className="w-16"></div>
                <p className="text-xl md:text-2xl text-muted max-w-4xl">
                  {project.what}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-8 text-sm">
                <div className="w-16"></div>
                <div>
                  <div className="uppercase-spaced text-muted mb-2">Year</div>
                  <div>{project.deployed_on}</div>
                </div>
                <div>
                  <div className="uppercase-spaced text-muted mb-2">Type</div>
                  <div>{project.tags[0]}</div>
                </div>
                <div>
                  <div className="uppercase-spaced text-muted mb-2">Stack</div>
                  <div className="flex gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="pill text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-12 border-t border-border text-center">
        <h3 className="text-3xl font-bold mb-4">
          Interested in Collaboration?
        </h3>
        <p className="text-xl text-muted mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <a
          href="mailto:dixanta@example.com"
          className="inline-block px-8 py-4 bg-foreground text-background text-center font-medium hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
