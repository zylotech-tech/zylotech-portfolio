import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full bg-surface border border-surface-raised rounded-xl px-6 py-4 text-white focus:border-cyan outline-none"
      {...props}
    />
  );
}