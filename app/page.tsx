import landingContent from "./data/landing-content.json";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container-brutalist min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-5xl">
          {/* Giant Name */}
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] mb-8 tracking-tight">
            {landingContent.hero.name}
            <span className="text-muted">.</span>
          </h1>

          {/* Narrative with Pills */}
          <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-12 flex flex-wrap items-center gap-2">
            <span>{landingContent.hero.intro}</span>
            {landingContent.hero.techStack.map((tech, index) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
            <span>{landingContent.hero.tagline}</span>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-border my-16">
            {landingContent.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="uppercase-spaced text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Digital Manifesto - Development Philosophy */}
      <section className="container-brutalist py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            {landingContent.mainSection.title}
          </h2>

          <div className="prose">
            <p className="text-xl md:text-2xl font-medium mb-12 leading-relaxed">
              {landingContent.mainSection.intro}
            </p>

            {landingContent.mainSection.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold mb-6 mt-16">
                  {section.heading}
                </h3>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-3xl font-bold mb-4">
              {landingContent.cta.title}
            </h3>
            <p className="text-xl text-muted mb-6">
              {landingContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {landingContent.cta.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={
                    button.primary
                      ? "px-8 py-4 bg-foreground text-background text-center font-medium hover:opacity-90 transition-opacity"
                      : "px-8 py-4 border-2 border-foreground text-center font-medium hover:bg-foreground hover:text-background transition-all"
                  }
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="container-brutalist py-20 border-t border-border">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          {landingContent.techExpertise.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {landingContent.techExpertise.categories.map((category, index) => (
            <div key={index}>
              <h3 className="uppercase-spaced mb-4">{category.name}</h3>
              <ul className="space-y-2 text-muted">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
