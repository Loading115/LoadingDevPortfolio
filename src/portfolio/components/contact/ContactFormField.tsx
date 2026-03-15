import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  multiline?: boolean;
};

/**
 * Shared field renderer for the contact form demo.
 * It keeps field styling consistent and avoids duplicating label markup.
 */
export const ContactFormField = ({
  name,
  label,
  placeholder,
  type = "text",
  multiline = false,
}: ContactFormFieldProps) => {
  return (
    <div className="space-y-2.5">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-foreground"
      >
        {label}
      </label>

      {multiline ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={6}
          className="min-h-40 resize-none"
        />
      ) : (
        <Input id={name} name={name} type={type} placeholder={placeholder} />
      )}
    </div>
  );
};
