export default function Input({
  label,
  type,
  name,
  required,
  minLength,
  placeholder,
}: {
  label: string;
  type: string;
  name: string;
  required?: boolean;
  minLength?: number;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block mb-1 text-teal-800">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        minLength={minLength}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        placeholder={placeholder}
      />
    </div>
  );
}
