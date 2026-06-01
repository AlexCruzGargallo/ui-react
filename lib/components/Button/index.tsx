import React from "react";
import styles from "./styles.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style of the button. @default "primary" */
  variant?: "primary" | "secondary" | "danger" | "ghost";
  /** Size of the button. @default "medium" */
  size?: "small" | "medium" | "large";
  /** When true, shows a spinner and disables the button. @default false */
  loading?: boolean;
};

/**
 * Button component with multiple variants and sizes.
 */
export function Button({
  className = "",
  variant = "primary",
  size = "medium",
  loading = false,
  disabled,
  children,
  ...restProps
}: ButtonProps) {
  const variantClass = styles[variant] || "";
  const sizeClass = styles[size] || "";

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${loading ? styles.loading : ""} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...restProps}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
