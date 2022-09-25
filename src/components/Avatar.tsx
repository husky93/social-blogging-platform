import React from 'react';

interface AvatarProps {
  imgLink: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgLink }) => {
  return (
    <>
      <img
        data-tooltip-target="tooltip-bonnie"
        className="w-9 h-9 rounded-full"
        src={imgLink}
        alt="Avatar"
      />
    </>
  );
};

export default Avatar;
