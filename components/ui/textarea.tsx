import { TextareaHTMLAttributes } from "react";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full bg-surface border border-surface-raised rounded-xl px-6 py-4 text-white focus:border-cyan outline-none min-h-[140px]"
      {...props}
    />
  );
}