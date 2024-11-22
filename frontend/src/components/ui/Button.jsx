import React from 'react'

export const Button = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick,
  ...props 
}) => {
  // Add new variant styles while keeping existing ones
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent hover:bg-gray-100",
    ...props.variantStyles // Allow custom variant styles from existing usage
  };

  // Add new size styles while keeping existing ones
  const sizeStyles = {
    default: "px-4 py-2",
    sm: "px-2 py-1 text-sm",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
    ...props.sizeStyles // Allow custom size styles from existing usage
  };

  // Combine styles while maintaining existing className prop
  const combinedClassName = `
    rounded-md 
    transition-colors 
    ${variantStyles[variant] || ''} 
    ${sizeStyles[size] || ''} 
    ${className}
  `.trim();

  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button