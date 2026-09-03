import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

/** Shared input chrome. Fields are labelled like entries on a trade document. */
export const inputClasses =
  "block w-full rounded-sm border border-ink/15 bg-bone-100 px-4 py-3.5 text-body text-ink placeholder:text-steel/60 transition-colors duration-250 focus:border-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/30 aria-[invalid=true]:border-signal-error";

export function Field({
  id,
  label,
  required,
  helperText,
  error,
  children,
  className = "",
}: FieldProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2.5 flex items-baseline gap-2 font-mono text-meta-sm uppercase text-ink"
      >
        {label}
        {required ? (
          <span className="text-brass-ink" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="text-steel">(optional)</span>
        )}
      </label>

      {children}

      {helperText && !error && (
        <p id={helperId} className="mt-2 text-body-sm text-steel">
          {helperText}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 flex items-start gap-2 text-body-sm font-medium text-signal-error"
        >
          <span aria-hidden="true">▲</span>
          {error}
        </p>
      )}
    </div>
  );
}

export function describedBy(id: string, helperText?: string, error?: string): string | undefined {
  if (error) return `${id}-error`;
  if (helperText) return `${id}-helper`;
  return undefined;
}
