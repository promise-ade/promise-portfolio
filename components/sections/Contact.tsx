import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const email = "adeleyepromise76@gmail.com";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-spacing scroll-mt-[var(--nav-height)]"
    >
      <Container>
        <div className="py-4 md:py-8 lg:py-10">
          <h2
            id="contact-heading"
            className="max-w-3xl font-serif text-[clamp(1.9rem,1.1rem+2.2vw,3.15rem)] leading-[1.2] tracking-[-0.02em] text-balance text-foreground"
          >
            I&apos;m always open to connecting, sharing ideas, or discussing
            opportunities. Let&apos;s chat!
          </h2>

          <div className="mt-12 md:mt-16">
            <Button
              href={`mailto:${email}`}
              variant="primary"
              className="min-h-12 w-fit px-6"
            >
              Email me
            </Button>
            <p className="text-small mt-4 break-words">
              <a href={`mailto:${email}`} className="link">
                {email}
              </a>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 md:mt-12 md:pt-8">
            <Button
              href="https://www.linkedin.com/in/promise-adeleye/"
              variant="ghost"
              className="min-h-11"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </Button>
            <Button
              href="https://drive.google.com/file/d/1j7DR604dR0qgWBB1b5ykYyW4MGUx3pwH/view?usp=sharing"
              variant="ghost"
              className="min-h-11"
            >
              View résumé
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
