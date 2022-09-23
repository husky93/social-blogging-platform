import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link className="flex items-center" to="/">
            <img className="h-14 w-auto sm:h-12" src={logo} alt="alt" />
            <span className="text-xl font-bold text-gray-800">Coach</span>
          </Link>
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
