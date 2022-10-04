import { Link } from 'react-router-dom';
import {
  Home,
  Bookmark,
  BrandFacebook,
  BrandTwitter,
  BrandLinkedin,
  InfoSquare,
  Lock,
  QuestionMark,
} from '@ricons/tabler';
import { Icon } from '@ricons/utils';
import React from 'react';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <nav className="w-full overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      <ul className="space-y-2">
        <li>
          <Link to="/" className="nav-link">
            <Icon>
              <Home className="nav-icon" />
            </Icon>
            <span className="ml-3 text-base">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/bookmarks" className="nav-link">
            <Icon>
              <Bookmark className="nav-icon" />
            </Icon>
            <span className="ml-3 text-base">Bookmarks</span>
          </Link>
        </li>
      </ul>
      <ul className="pt-4 mt-4 border-t border-gray-200 ">
        <li>
          <Link to="/" className="nav-link">
            <Icon>
              <InfoSquare className="nav-icon" />
            </Icon>
            <span className="ml-3 text-base">About</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <Icon>
              <Lock className="nav-icon" />
            </Icon>
            <span className="ml-3 text-base">Privacy Policy</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <Icon>
              <QuestionMark className="nav-icon" />
            </Icon>
            <span className="ml-3 text-base">FAQ</span>
          </Link>
        </li>
      </ul>
      <ul className="pt-4 mt-4 border-t border-gray-200 flex items-center">
        <li className="transition-all cursor-pointer text-2xl flex items-center p-2 font-normal text-gray-500  rounded-lg hover:bg-gray-100 hover:text-green-50">
          <Icon>
            <BrandFacebook />
          </Icon>
        </li>
        <li className="transition-all m-0 cursor-pointer text-2xl flex items-center p-2 font-normal text-gray-500  rounded-lg hover:bg-gray-100 hover:text-green-500">
          <Icon>
            <BrandTwitter />
          </Icon>
        </li>
        <li className="transition-all m-0 cursor-pointer text-2xl flex items-center p-2 font-normal text-gray-500  rounded-lg hover:bg-gray-100 hover:text-green-500">
          <Icon>
            <BrandLinkedin />
          </Icon>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
