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

export const inputClasses =
  "block w-full rounded border border-navy-900/20 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors duration-150 focus:border-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900/30 aria-[invalid=true]:border-accent aria-[invalid=true]:bg-accent-soft/10";

export function Field({ id, label, required, helperText, error, children, className = "" }: FieldProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-900">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal uppercase tracking-wideish text-muted">
            Optional
          </span>
        )}
      </label>

      {children /* the input must receive aria-describedby={helperId} and aria-invalid via cloneless composition in the parent */}

      {helperText && !error && (
        <p id={helperId} className="mt-2 text-sm text-muted">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="mt-2 flex items-start gap-1.5 text-sm font-medium text-accent">
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
}

export function describedBy(id: string, helperText?: string, error?: string): string | undefined {
  const ids = [];
  if (error) ids.push(`${id}-error`);
  else if (helperText) ids.push(`${id}-helper`);
  return ids.length ? ids.join(" ") : undefined;
}
