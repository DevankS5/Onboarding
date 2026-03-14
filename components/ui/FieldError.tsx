export function FieldError({ error }: { error?: string }) {
  if (!error) return null;

  return <p className="mt-2 text-sm text-gold">{error}</p>;
}
