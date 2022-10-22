import React from 'react';
import { Icon } from '@ricons/utils';
import { HeartOutline, Heart } from '@ricons/ionicons5';

interface LikeTogglerProps {
  handleToggle: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  id: number;
}

const LikeToggler: React.FC<LikeTogglerProps> = ({
  handleToggle,
  active,
  id,
}) => {
  const classes: string = active
    ? 'flex items-center transition-all p-1 text-green-500 rounded cursor-pointer hover:text-green-800'
    : 'flex items-center transition-all p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900';
  return (
    <button
      className={classes}
      onClick={handleToggle}
      data-id={id}
      aria-label="Like post"
    >
      <Icon>{active ? <Heart /> : <HeartOutline />}</Icon>
    </button>
  );
};

export default LikeToggler;
