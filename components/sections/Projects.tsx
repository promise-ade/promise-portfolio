import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
import { getProjectsByType } from "@/data/projects";

export function Projects() {
  const caseStudies = getProjectsByType("case-study");
  const builtProducts = getProjectsByType("built-product");

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-spacing scroll-mt-[var(--nav-height)]"
    >
      <Container>
        <h2 id="work-heading" className="text-heading">
          Selected Work
        </h2>

        <div className="mt-10 border-t border-border pt-10 md:mt-14 md:pt-14">
          <h3 className="text-label text-secondary">Case Studies</h3>
          <div className="mt-2">
            {caseStudies.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="editorial"
              />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10 md:mt-24 md:pt-14">
          <h3 className="text-label text-secondary">Products I&apos;ve Built</h3>
          <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {builtProducts.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
