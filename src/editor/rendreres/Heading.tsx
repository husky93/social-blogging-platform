import React, { useEffect, useState } from 'react';

interface HeadingProps {
  attributes?: Array<any>;
  children: React.ReactNode;
  variant: 'h1' | 'h2';
}

const Heading: React.FC<HeadingProps> = ({ attributes, children, variant }) => {
  const ComponentName = variant === 'h1' ? 'h2' : 'h3';
  const [classes, setClasses] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'h1':
        setClasses('text-3xl font-bold dark:text-white');
        break;
      case 'h2':
        setClasses('text-2xl font-medium dark:text-white');
        break;
      default:
        setClasses('text-2xl font-medium dark:text-white');
    }
  }, [variant]);

  return (
    <ComponentName className={classes} {...attributes}>
      {children}
    </ComponentName>
  );
};

export default Heading;
