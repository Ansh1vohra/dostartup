import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) => {
  const base =
    "rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ";
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-100 border border-transparent",
  };
  const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-sm h-8",
    md: "px-4 py-2 text-base h-10",
    lg: "px-6 py-3 text-lg h-12",
  };
  return (
    <button
      {...props}
      className={`${base}${
        variants[variant] || variants.default
      } ${sizes[size] || sizes.md} ${className}`}
    >
      {children}
    </button>
  );
};