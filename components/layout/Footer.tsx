import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <p className="text-small">
            © 2026 Promise Adeleye. All rights reserved.
          </p>
          <a
            href="#top"
            className="text-small w-fit transition-colors duration-200 hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
