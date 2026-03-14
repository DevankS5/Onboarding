'use client';

import { forwardRef } from 'react';
import { FieldError } from '@/components/ui/FieldError';
import { cn } from '@/lib/utils';

type TextInputProps = {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, required, error, className, id, ...props },
  ref
) {
  const inputId = id || props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="text-sm font-medium text-text-primary">
        {label} {required ? <span className="text-gold">*</span> : null}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'gold-focus w-full rounded-input border border-border bg-bg-altCard px-4 py-3 text-text-primary placeholder:text-text-muted',
          error && 'border-gold',
          className
        )}
        {...props}
      />
      <FieldError error={error} />
    </div>
  );
});

TextInput.displayName = 'TextInput';
