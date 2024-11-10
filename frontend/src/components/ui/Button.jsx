export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border-2 border-white bg-transparent hover:bg-accent hover:text-accent-foreground"
  }
  
  const sizes = {
    lg: "h-11 px-8 text-base",
    md: "h-10 px-4 py-2"
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
} 