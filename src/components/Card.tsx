import React from 'react';

interface CardProps {
  children: React.ReactNode;
  customClasses?: string;
}
const Card: React.FC<CardProps> = ({ children, customClasses }) => {
  const classes = `w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700 ${customClasses}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
