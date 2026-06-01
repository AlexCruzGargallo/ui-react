import React from "react";
import styles from "./styles.module.css";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Label displayed above the input. */
  label?: string;
  /** Error message shown below the input. Sets `aria-invalid` and applies error styles. */
  error?: string;
  /** Helper text shown below the input when there is no error. */
  helperText?: string;
  /** Size of the input field. @default "medium" */
  size?: "small" | "medium" | "large";
};

/**
 * Text input with optional label, helper text and inline error message.
 */
export function Input({
  label,
  error,
  helperText,
  size = "medium",
  className = "",
  id,
  ...restProps
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const sizeClass = styles[size] || "";
  const errorClass = error ? styles.inputError : "";

  return (
    <div className={styles.wrapper}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={`${styles.input} ${sizeClass} ${errorClass} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...restProps}
      />
      {error ? (
        <span id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </span>
      ) : helperText ? (
        <span id={`${inputId}-helper`} className={styles.helperText}>
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
