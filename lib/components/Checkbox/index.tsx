import React from "react";
import styles from "./styles.module.css";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Label text displayed next to the checkbox. */
  label?: string;
  /** Error message shown below the checkbox. Sets `aria-invalid`. */
  error?: string;
  /** Size of the checkbox and its label. @default "medium" */
  size?: "small" | "medium" | "large";
};

/**
 * Checkbox input with optional label and inline error message.
 */
export function Checkbox({
  label,
  error,
  size = "medium",
  className = "",
  id,
  disabled,
  ...restProps
}: CheckboxProps) {
  const checkboxId = id ?? (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
  const sizeClass = styles[size] || "";

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}>
      <label htmlFor={checkboxId} className={`${styles.label} ${sizeClass}`}>
        <input
          type="checkbox"
          id={checkboxId}
          className={`${styles.checkbox} ${sizeClass} ${error ? styles.checkboxError : ""} ${className}`}
          disabled={disabled}
          aria-invalid={!!error}
          {...restProps}
        />
        {label ? <span className={styles.labelText}>{label}</span> : null}
      </label>
      {error ? (
        <span className={styles.errorText} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
