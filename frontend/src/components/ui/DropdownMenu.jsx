import { useState, useRef, useEffect } from 'react';

export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({ children, asChild }) {
  return asChild ? children : <button>{children}</button>;
}

export function DropdownMenuContent({ children, align = "end" }) {
  const alignmentClasses = {
    start: "left-0",
    end: "right-0",
  };

  return (
    <div className={`absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${alignmentClasses[align]}`}>
      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <button
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
} 