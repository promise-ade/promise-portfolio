import { Container } from "@/components/ui/Container";

const skillAreas = [
  {
    title: "Research",
    details: "User interviews, surveys, market research, competitor analysis",
  },
  {
    title: "Product Thinking",
    details: "Product roadmapping, understanding user needs, prioritization",
  },
  {
    title: "Product Discovery",
    details: "Creating PRDs, user story creation, MVP planning, wireframing",
  },
  {
    title: "Collaboration & Communication",
    details:
      "Stakeholder management, storytelling & presentation, documentation",
  },
] as const;

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-spacing scroll-mt-[var(--nav-height)]"
    >
      <Container>
        <h2 id="skills-heading" className="text-heading">
          How I Work
        </h2>

        <div className="mt-10 grid border-t border-border md:mt-14 md:grid-cols-2">
          {skillAreas.map((skill) => (
            <article
              key={skill.title}
              className="border-b border-border py-8 last:border-b-0 md:px-8 md:py-10 md:odd:pl-0 md:even:border-l md:even:pr-0 md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <h3 className="text-subheading">{skill.title}</h3>
              <p className="text-body mt-3 max-w-md text-pretty text-secondary">
                {skill.details}
              </p>
            </article>
          ))}
        </div>

        <div className="border-t border-border pt-8 md:pt-10">
          <h3 className="text-label text-foreground">Tools</h3>
          <p className="mt-4 max-w-4xl font-sans text-[1.0625rem] leading-relaxed tracking-[0.01em] text-foreground md:text-[1.125rem] md:leading-8">
            Figma · Jira · Miro · Google Workspace · Trello · Asana · Canva
          </p>
        </div>
      </Container>
    </section>
  );
}
