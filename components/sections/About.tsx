import { Container } from "@/components/ui/Container";

const howIGotHere =
  "I'm an early-career Product Manager with a passion for creating meaningful digital experiences. My journey into product management grew out of my experience learning UI/UX Design, where I became fascinated by user behaviour, needs, research and the ‘why’ behind every design decision.";

const howIThink =
  "That curiosity evolved into a drive to understand how great products are built from strategy to execution. Today, I’m passionate about understanding users, simplifying complex experiences, aligning business goals and helping teams develop products that make an impact. Through my projects, I've learned to balance user research, data, and cross-functional collaboration to deliver solutions that truly matter.";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-spacing scroll-mt-[var(--nav-height)]"
    >
      <Container>
        <h2 id="about-heading" className="text-heading">
          About Me
        </h2>

        <div className="mt-10 grid gap-12 border-t border-border pt-10 md:mt-14 md:grid-cols-2 md:gap-16 md:pt-14 lg:gap-24">
          <article>
            <p className="font-serif text-xl leading-none text-secondary">01</p>
            <h3 className="text-subheading mt-4">How I got here</h3>
            <p className="text-body mt-5 max-w-prose text-pretty text-secondary">
              {howIGotHere}
            </p>
          </article>

          <article>
            <p className="font-serif text-xl leading-none text-secondary">02</p>
            <h3 className="text-subheading mt-4">How I think about products</h3>
            <p className="text-body mt-5 max-w-prose text-pretty text-secondary">
              {howIThink}
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
