import React from "react";
import styles from "./styles.module.css";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Size of the spinner. @default "medium" */
  size?: "small" | "medium" | "large";
  /** Color of the spinner. Use `"white"` on dark backgrounds. @default "primary" */
  color?: "primary" | "white" | "gray";
};

/**
 * Animated loading spinner. Renders a `<span role="status">` for accessibility.
 */
export function Spinner({
  size = "medium",
  color = "primary",
  className = "",
  ...restProps
}: SpinnerProps) {
  const sizeClass = styles[size] || "";
  const colorClass = styles[color] || "";

  return (
    <span
      role="status"
      aria-label="Loading"
      className={`${styles.spinner} ${sizeClass} ${colorClass} ${className}`}
      {...restProps}
    />
  );
}
