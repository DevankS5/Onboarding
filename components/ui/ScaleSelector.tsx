import { FieldError } from '@/components/ui/FieldError';
import { cn } from '@/lib/utils';

type ScaleSelectorProps = {
  label: string;
  value?: number;
  onChange: (value: number) => void;
  required?: boolean;
  error?: string;
};

export function ScaleSelector({ label, value, onChange, required, error }: ScaleSelectorProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-text-primary">
        {label} {required ? <span className="text-gold">*</span> : null}
      </legend>
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5].map((score) => {
          const selected = value === score;

          return (
            <button
              key={score}
              type="button"
              onClick={() => onChange(score)}
              className={cn(
                'grid h-11 w-11 place-items-center rounded-full border text-sm font-semibold transition-all',
                selected
                  ? 'border-gold bg-gold text-black shadow-gold'
                  : 'border-border bg-bg-altCard text-text-secondary hover:border-gold hover:text-text-primary'
              )}
              aria-pressed={selected}
            >
              {score}
            </button>
          );
        })}
      </div>
      <FieldError error={error} />
    </fieldset>
  );
}
