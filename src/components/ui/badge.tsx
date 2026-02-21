import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <div className="flex text-sm justify-center text-gray-400 bg-gray-50 w-10 border border-gray-300 rounded-full px-6 py-1">
      {children}
    </div>
  );
}
