import React from 'react';

interface AvatarProps {
  imgLink: string;
  sm?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ imgLink, sm }) => {
  const classes = sm ? 'w-4 h-4 rounded-full' : 'w-9 h-9 rounded-full';
  return (
    <>
      <img
        data-tooltip-target="tooltip-bonnie"
        className={classes}
        src={imgLink}
        alt="Avatar"
      />
    </>
  );
};

export default Avatar;
