import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

export function Button({ className = "", variant = "default", size = "default", ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-medium transition-colors";
  const variants = variant === "outline" 
    ? "border border-white/30 text-white hover:bg-white/10" 
    : "bg-cyan text-black hover:bg-cyan/90";

  return (
    <button className={`${base} ${variants} ${className}`} {...props} />
  );
}