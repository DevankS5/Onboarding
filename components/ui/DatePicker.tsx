import { TextInput } from '@/components/ui/TextInput';

type DatePickerProps = {
  label: string;
  name: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};

export function DatePicker({ label, name, value, onChange, error }: DatePickerProps) {
  return (
    <TextInput
      label={label}
      type="date"
      name={name}
      value={value || ''}
      onChange={(event) => onChange(event.target.value)}
      error={error}
      className="[color-scheme:dark]"
    />
  );
}
