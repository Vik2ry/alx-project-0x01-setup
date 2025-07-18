// components/Button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
}

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", className }) => {
  return (
    <button
      className={clsx(
        "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 transition-colors shadow-sm",
        sizeClasses[size],
        shape,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
