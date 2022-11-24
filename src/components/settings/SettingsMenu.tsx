import React from 'react';
import { Link } from 'react-router-dom';
import { MoodSmile } from '@ricons/tabler';
import { Icon } from '@ricons/utils';

interface SettingsMenuProps {}

const SettingsMenu: React.FC<SettingsMenuProps> = ({}) => {
  return (
    <>
      <ul className="space-y-2">
        <li>
          <Link to="profile" className="nav-link">
            <Icon>
              <MoodSmile className="nav-icon" />
            </Icon>
            <span className="ml-3 text-base">Profile</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SettingsMenu;
