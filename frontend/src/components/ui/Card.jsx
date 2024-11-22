export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="p-4 border-b">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-xl font-semibold">{children}</h3>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
} 