import React from "react";
import styles from "./styles.module.css";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Internal padding of the card. @default "medium" */
  padding?: "none" | "small" | "medium" | "large";
  /** Whether to show a subtle drop shadow. @default true */
  shadow?: boolean;
};

/**
 * Container card with configurable padding and optional shadow.
 */
export function Card({
  padding = "medium",
  shadow = true,
  className = "",
  children,
  ...restProps
}: CardProps) {
  const paddingClass = styles[`padding-${padding}`] || "";
  const shadowClass = shadow ? styles.shadow : "";

  return (
    <div
      className={`${styles.card} ${paddingClass} ${shadowClass} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
}
