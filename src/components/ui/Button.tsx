import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-blue text-white hover:bg-blue-hover focus-visible:outline-blue",
  secondary:
    "bg-white text-navy border border-divider hover:bg-surface-alt focus-visible:outline-blue",
  ghost:
    "bg-transparent text-navy hover:bg-blue/10 focus-visible:outline-blue",
} as const;

const BASE =
  "inline-flex h-12 items-center justify-center gap-2 rounded-button px-7 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

type Variant = keyof typeof VARIANT_CLASSES;

type ButtonAsButton = { as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = { as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = (ButtonAsButton | ButtonAsLink) & {
  variant?: Variant;
};

export default function Button({ variant = "primary", className = "", as, ...rest }: Props) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${className}`;

  if (as === "a") {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
