import { Link } from 'react-router-dom';
import { Home, Bookmark } from '@ricons/tabler';
import { Icon } from '@ricons/utils';
import React from 'react';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <nav className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="text-xl flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon>
              <Home className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </Icon>
            <span className="ml-3 text-base">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/bookmarks"
            className="text-xl flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icon>
              <Bookmark className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </Icon>
            <span className="ml-3 text-base">Bookmarks</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
