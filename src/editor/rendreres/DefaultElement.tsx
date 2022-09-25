import React from 'react';

interface DefaultElementProps {
  attributes?: Array<any>;
  children: React.ReactNode;
}

const DefaultElement: React.FC<DefaultElementProps> = ({
  attributes,
  children,
}) => {
  return <p {...attributes}>{children}</p>;
};

export default DefaultElement;
