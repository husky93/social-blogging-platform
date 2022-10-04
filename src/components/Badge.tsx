import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="bg-gray-100 transition-all text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 hover:bg-gray-200">
      {children}
    </span>
  );
};

export default Badge;
