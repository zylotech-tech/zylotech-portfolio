import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className = "", variant = "default", ...props }: ButtonProps) {
  const base = "px-8 py-4 rounded-xl font-medium transition-all active:scale-95";
  const styles = variant === "outline" 
    ? "border border-white/30 hover:bg-white/10 text-white" 
    : "bg-cyan hover:bg-cyan/90 text-black";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}