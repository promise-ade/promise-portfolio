import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant: "editorial" | "compact";
};

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

function ProjectImage({
  project,
  sizes,
  className,
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  return (
    <a
      href={project.href}
      {...externalLinkProps}
      aria-label={`${project.ctaLabel}: ${project.title}`}
      className={cn(
        "block overflow-hidden rounded-[var(--radius-sm)] border border-border bg-background",
        className,
      )}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.025]"
      />
    </a>
  );
}

function ProjectMeta({
  project,
  index,
  titleClassName,
}: {
  project: Project;
  index: number;
  titleClassName: string;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div>
      <p className="font-serif text-xl leading-none text-secondary">{number}</p>
      <h4
        className={cn(
          "mt-3 font-serif tracking-[-0.02em] text-foreground",
          titleClassName,
        )}
      >
        <a
          href={project.href}
          {...externalLinkProps}
          className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-0.5"
        >
          {project.title}
        </a>
      </h4>
      <p className="text-small mt-3">{project.category}</p>
      <p className="text-body mt-5 max-w-md text-pretty text-secondary">
        {project.description}
      </p>
      <div className="mt-7">
        <Button
          href={project.href}
          variant="ghost"
          className="min-h-11"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.ctaLabel}
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index, variant }: ProjectCardProps) {
  if (variant === "compact") {
    return (
      <article className="group flex flex-col gap-5">
        <ProjectImage
          project={project}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="aspect-[16/10]"
        />
        <ProjectMeta
          project={project}
          index={index}
          titleClassName="text-[clamp(1.5rem,1rem+1.4vw,1.85rem)] leading-tight"
        />
      </article>
    );
  }

  const reverse = index % 2 === 1;

  return (
    <article
      className={cn(
        "group grid items-center gap-8 border-b border-border py-12 last:border-b-0 md:gap-10 md:py-16 lg:grid-cols-2 lg:gap-16 xl:gap-20",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <ProjectMeta
        project={project}
        index={index}
        titleClassName="text-[clamp(1.85rem,1.1rem+1.8vw,2.6rem)] leading-[1.15]"
      />
      <ProjectImage
        project={project}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[16/9]"
      />
    </article>
  );
}
