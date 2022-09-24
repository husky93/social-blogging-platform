import React from 'react';

interface LeafProps {
  attributes: Array<any>;
  children: React.ReactNode;
  leaf: { bold: boolean };
}

const Leaf: React.FC<LeafProps> = ({ attributes, children, leaf }) => {
  return (
    <span {...attributes} style={{ fontWeight: leaf.bold ? 'bold' : '' }}>
      {children}
    </span>
  );
};
export default Leaf;
