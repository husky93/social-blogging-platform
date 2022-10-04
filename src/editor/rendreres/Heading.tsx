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
        setClasses('text-3xl font-bold');
        break;
      case 'h2':
        setClasses('text-2xl font-medium');
        break;
      default:
        setClasses('text-2xl font-medium');
    }
  }, [variant]);

  return (
    <ComponentName className={classes} {...attributes}>
      {children}
    </ComponentName>
  );
};

export default Heading;
