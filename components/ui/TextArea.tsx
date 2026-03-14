'use client';

import { forwardRef } from 'react';
import { FieldError } from '@/components/ui/FieldError';
import { cn } from '@/lib/utils';

type TextAreaProps = {
  label: string;
  required?: boolean;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, required, error, id, className, ...props },
  ref
) {
  const textareaId = id || props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={textareaId} className="text-sm font-medium text-text-primary">
        {label} {required ? <span className="text-gold">*</span> : null}
      </label>
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          'gold-focus min-h-[120px] w-full resize-y rounded-input border border-border bg-bg-altCard px-4 py-3 text-text-primary placeholder:text-text-muted',
          error && 'border-gold',
          className
        )}
        {...props}
      />
      <FieldError error={error} />
    </div>
  );
});

TextArea.displayName = 'TextArea';
