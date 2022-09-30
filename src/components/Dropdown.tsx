import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import { Link } from 'react-router-dom';
import type { RootState } from '../app/store';

interface DropdownProps {
  user: RootState['user'];
  handleSignOut: React.MouseEventHandler<HTMLButtonElement>;
}

const Dropdown: React.FC<DropdownProps> = ({ user, handleSignOut }) => {
  const [hidden, setHidden] = useState(true);
  const classes = hidden
    ? 'hidden absolute w-full z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700'
    : 'absolute w-full z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = () => {
    setHidden((prevState) => !prevState);
  };

  return (
    <div className="relative">
      {user.data && (
        <button
          onClick={toggleDropdown}
          className="transition-all py-1 px-4 flex gap-x-4 items-center bg-white border border-white hover:border-gray-200 rounded hover:bg-gray-100"
        >
          <Avatar imgLink={user.data.photoUrl} />
          <span className="font-medium text-sm">{user.data.displayName}</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {hidden ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 13l-6-5-6 5"
              ></path>
            )}
          </svg>
        </button>
      )}
      <div id="dropdown" className={classes}>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <Link
              to="/dashboard"
              className="block text-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="block text-center w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
