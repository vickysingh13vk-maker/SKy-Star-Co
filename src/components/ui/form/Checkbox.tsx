import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  error?: string;
}

export function Checkbox({ id, label, error, className = "", ...rest }: CheckboxProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={className}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          className="mt-1 h-5 w-5 flex-shrink-0 rounded-sm border-2 border-navy-900/40 text-navy-900 focus-visible:ring-2 focus-visible:ring-navy-900/30"
          aria-describedby={errorId}
          aria-invalid={Boolean(error)}
          {...rest}
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-ink">
          {label}
        </label>
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 pl-8 text-sm font-medium text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
