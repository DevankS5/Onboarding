import { FieldError } from '@/components/ui/FieldError';
import { cn } from '@/lib/utils';

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  label: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
};

export function RadioGroup({ label, name, options, value, onChange, required, error }: RadioGroupProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-text-primary">
        {label} {required ? <span className="text-gold">*</span> : null}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const selected = value === option.value;

          return (
            <label
              key={option.value}
              className={cn(
                'flex cursor-pointer items-center gap-3 rounded-input border px-3 py-3 text-sm transition-all',
                selected
                  ? 'border-gold bg-gold/10 text-text-primary shadow-gold-sm'
                  : 'border-border bg-bg-altCard text-text-secondary hover:border-gold/60 hover:text-text-primary'
              )}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <span
                className={cn(
                  'grid h-4 w-4 place-items-center rounded-full border',
                  selected ? 'border-gold' : 'border-border'
                )}
              >
                <span className={cn('h-2 w-2 rounded-full', selected ? 'bg-gold' : 'bg-transparent')} />
              </span>
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      <FieldError error={error} />
    </fieldset>
  );
}
