import React from 'react';

interface UnorderedProps {
  attributes?: Array<any>;
  children: React.ReactNode;
}

const Unordered: React.FC<UnorderedProps> = ({ attributes, children }) => {
  return (
    <li className="list-outside" {...attributes}>
      {children}
    </li>
  );
};

export default Unordered;
