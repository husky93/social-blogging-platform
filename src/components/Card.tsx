import React from 'react';

interface CardProps {
  children: React.ReactNode;
  customClasses?: string;
}
const Card: React.FC<CardProps> = ({ children, customClasses }) => {
  const classes = `w-full bg-white rounded-lg border shadow-md ${customClasses}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
