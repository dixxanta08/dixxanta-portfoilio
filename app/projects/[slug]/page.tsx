import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "../../data/projects.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} - Dixanta Nath Shrestha`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-brutalist py-20">
      {/* Back Navigation */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 uppercase-spaced"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <header className="mb-12 pb-12 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Project Image/Thumbnail */}
          <div>
            {project.thumbnail_url ? (
              <div className="relative w-full aspect-[4/3] border border-border">
                <Image
                  src={project.thumbnail_url}
                  alt={`${project.name} project screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="border-2 border-border p-12 text-center aspect-[4/3] flex flex-col items-center justify-center">
                <div className="text-6xl font-bold mb-4 opacity-10">
                  {project.name.charAt(0)}
                </div>
                <p className="uppercase-spaced text-muted text-sm">
                  Project Visual Coming Soon
                </p>
              </div>
            )}
          </div>

          {/* Right: Title and Meta Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {project.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed">
                {project.what}
              </p>
            </div>

            {/* Quick Meta */}
            <div className="space-y-6 pt-6 border-t border-border">
              <div>
                <div className="uppercase-spaced text-muted mb-2">Deployed</div>
                <div className="text-lg">{project.deployed_on}</div>
              </div>
              <div>
                <div className="uppercase-spaced text-muted mb-2">Category</div>
                <div className="text-lg">{project.tags[0]}</div>
              </div>
              <div>
                <div className="uppercase-spaced text-muted mb-2">Links</div>
                <div className="flex gap-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:opacity-70 transition-opacity"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:opacity-70 transition-opacity"
                    >
                      Live Site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Technologies */}
          <div>
            <h3 className="uppercase-spaced mb-6">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="uppercase-spaced mb-6">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-muted border border-border px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Team */}
          {project.team && project.team.length > 0 && (
            <div>
              <h3 className="uppercase-spaced mb-6">Team</h3>
              <ul className="space-y-3 text-sm">
                {project.team.map((member, index) => (
                  <li key={index} className="text-muted leading-relaxed">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-8 space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Project Goal */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Project Goal
            </h2>
            <p className="text-lg text-muted leading-relaxed">{project.goal}</p>
          </section>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-lg text-muted leading-relaxed"
                  >
                    <span className="text-foreground font-bold">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="border-t border-border pt-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical Challenges
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-muted text-sm uppercase-spaced w-12">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg text-muted leading-relaxed flex-1">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <section className="border-t border-border pt-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Learnings
              </h2>
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-muted text-sm uppercase-spaced w-12">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg text-muted leading-relaxed flex-1">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Personal Reflection */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Personal Reflection
            </h2>
            <div className="bg-muted/10 border border-border p-8">
              <p className="text-lg text-muted leading-relaxed italic">
                "I really should reflect on this project... One day, when I'm
                not too busy shipping code, I'll write something profound here.
                For now, just know that it was a journey, and I learned things.
                Many things. Definitely."
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-border pt-16">
            <h3 className="text-2xl font-bold mb-4">
              Want to Learn More About This Project?
            </h3>
            <p className="text-lg text-muted mb-6">
              I'm happy to discuss the technical architecture, challenges
              overcome, and lessons learned from this project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-foreground text-center font-medium hover:bg-foreground hover:text-background transition-all"
                >
                  View Source Code
                </a>
              )}
              <a
                href="mailto:dixanta@example.com"
                className="px-8 py-4 bg-foreground text-background text-center font-medium hover:opacity-90 transition-opacity"
              >
                Discuss This Project
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Navigation to Other Projects */}
      <nav className="mt-24 pt-16 border-t border-border">
        <div className="flex justify-between items-center">
          <Link
            href="/projects"
            className="text-lg hover:opacity-70 transition-opacity"
          >
            ← All Projects
          </Link>
          <Link
            href="/"
            className="text-lg hover:opacity-70 transition-opacity"
          >
            Back to Home →
          </Link>
        </div>
      </nav>
    </div>
  );
}
