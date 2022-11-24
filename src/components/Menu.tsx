import React from 'react';

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav className="w-full overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      {children}
    </nav>
  );
};

export default Menu;
