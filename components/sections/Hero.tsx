import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col justify-center pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="font-serif text-xl leading-snug text-foreground md:text-[1.65rem]">
            Hi, I&apos;m Promise😄
          </p>

          <h1
            id="hero-heading"
            className="mt-4 max-w-[18ch] font-serif text-[clamp(2.2rem,1.15rem+4.2vw,2.55rem)] leading-[1.14] tracking-[-0.02em] text-balance text-foreground md:mt-6 md:max-w-none md:text-[clamp(3.5rem,2.5rem+2.2vw,4.5rem)] md:leading-[1.12]"
          >
            A Product Manager who
            <br className="hidden md:block" /> loves solving problems
            <br className="hidden md:block" /> that matter
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary md:mt-8 md:text-[1.125rem] md:leading-8">
            From defining the “why” to shaping the “how”, I aim to build digital
            experiences that balance user value and business growth.
          </p>

          <div className="mt-7 md:mt-10">
            <Button href="#work" variant="ghost" className="min-h-11 text-base">
              View my projects
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
