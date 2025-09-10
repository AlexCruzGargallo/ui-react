import React from "react";
import styles from "./styles.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
};

export function Button({
  className = "",
  variant = "primary",
  size = "medium",
  children,
  ...restProps
}: ButtonProps) {
  const variantClass = styles[variant] || "";
  const sizeClass = styles[size] || "";

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
