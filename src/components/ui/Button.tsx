
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
    primary: "bg-primary text-white border border-transparent hover:bg-primary/90 focus:ring-primary/50",
    secondary: "bg-secondary text-background border border-transparent hover:bg-secondary/90 focus:ring-secondary/50",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 focus:ring-white/30",
    ghost: "bg-transparent text-white border border-transparent hover:bg-white/10 focus:ring-white/30"
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
