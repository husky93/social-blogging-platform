import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  customClasses?: string;
}

const Container: React.FC<ContainerProps> = ({ children, customClasses }) => {
  const classes = customClasses
    ? `mx-auto max-w-7xl px-4 sm:px-6 ${customClasses}`
    : 'mx-auto max-w-7xl px-4 sm:px-6';

  return <div className={classes}>{children}</div>;
};

export default Container;
