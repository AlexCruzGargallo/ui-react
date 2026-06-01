import React from "react";
import styles from "./styles.module.css";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Color variant of the badge. @default "primary" */
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  /** Size of the badge. @default "medium" */
  size?: "small" | "medium";
};

export function Badge({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...restProps
}: BadgeProps) {
  const variantClass = styles[variant] || "";
  const sizeClass = styles[size] || "";

  return (
    <span
      className={`${styles.badge} ${variantClass} ${sizeClass} ${className}`}
      {...restProps}
    >
      {children}
    </span>
  );
}
