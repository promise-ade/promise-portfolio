import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClassName: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href: string;
  };

function isHttpHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isExternalHref(href: string): boolean {
  return isHttpHref(href) || href.startsWith("mailto:");
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(variantClassName[variant], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;

    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          className={classes}
          {...linkProps}
          {...(isHttpHref(href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, "variant" | "className" | "children">;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
