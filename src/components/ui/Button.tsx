
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-medical-600 text-white border border-transparent hover:bg-medical-700 focus:ring-medical-500",
    secondary: "bg-medical-50 text-medical-700 border border-transparent hover:bg-medical-100 focus:ring-medical-500",
    outline: "bg-transparent border border-medical-300 text-medical-700 hover:bg-medical-50 focus:ring-medical-500",
    ghost: "bg-transparent text-medical-700 border border-transparent hover:bg-medical-50 focus:ring-medical-500"
  };
  
  const sizes = {
    sm: "text-sm h-9 px-3",
    md: "text-base h-11 px-5",
    lg: "text-lg h-14 px-8"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "shadow-sm hover:shadow transition-all duration-200",
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
