import { FieldError } from '@/components/ui/FieldError';
import { cn } from '@/lib/utils';

type CheckboxOption = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  label: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  required?: boolean;
  error?: string;
};

export function CheckboxGroup({ label, options, values, onChange, required, error }: CheckboxGroupProps) {
  const toggle = (item: string) => {
    if (values.includes(item)) {
      onChange(values.filter((entry) => entry !== item));
      return;
    }

    onChange([...values, item]);
  };

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-text-primary">
        {label} {required ? <span className="text-gold">*</span> : null}
      </legend>
      <div className="grid gap-2">
        {options.map((option) => {
          const selected = values.includes(option.value);

          return (
            <label
              key={option.value}
              className={cn(
                'flex cursor-pointer items-start gap-3 rounded-input border px-3 py-3 text-sm transition-all',
                selected
                  ? 'border-gold bg-gold/10 text-text-primary shadow-gold-sm'
                  : 'border-border bg-bg-altCard text-text-secondary hover:border-gold/60 hover:text-text-primary'
              )}
            >
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggle(option.value)}
                className="sr-only"
              />
              <span
                className={cn(
                  'mt-0.5 grid h-4 w-4 place-items-center rounded-[4px] border',
                  selected ? 'border-gold bg-gold' : 'border-border bg-bg-altCard'
                )}
              >
                <span className={cn('h-1.5 w-1.5 rounded-[2px]', selected ? 'bg-black' : 'bg-transparent')} />
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
