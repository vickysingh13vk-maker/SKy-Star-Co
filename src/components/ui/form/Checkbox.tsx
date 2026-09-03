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
      <div className="flex items-start gap-3.5">
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-sm border border-ink/30 accent-ink focus-visible:ring-2 focus-visible:ring-brass/40"
          aria-describedby={errorId}
          aria-invalid={Boolean(error)}
          {...rest}
        />
        <label htmlFor={id} className="text-body-sm leading-relaxed text-steel">
          {label}
        </label>
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 pl-9 text-body-sm font-medium text-signal-error">
          {error}
        </p>
      )}
    </div>
  );
}
