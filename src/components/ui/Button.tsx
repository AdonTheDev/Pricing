import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center';
  
  const colorClasses = {
    primary: 'bg-[#98FFB3] text-[#121212] hover:bg-[#98FFB3]/90 shadow-[0_0_15px_rgba(152,255,179,0.3)] hover:shadow-[0_0_20px_rgba(152,255,179,0.5)]',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    accent: 'bg-[#98F5FF] text-[#121212] hover:bg-[#98F5FF]/90 shadow-[0_0_15px_rgba(152,245,255,0.3)] hover:shadow-[0_0_20px_rgba(152,245,255,0.5)]',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-3',
    md: 'text-sm py-2.5 px-4',
    lg: 'text-base py-3 px-6',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${widthClass} ${className || ''}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;