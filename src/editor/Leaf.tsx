import React from 'react';

interface LeafProps {
  attributes: Array<any>;
  children: React.ReactNode;
  leaf: { bold: boolean; italic: boolean; strikethrough: boolean };
}

const Leaf: React.FC<LeafProps> = ({ attributes, children, leaf }) => {
  return (
    <span
      {...attributes}
      style={{
        fontWeight: leaf.bold ? 'bold' : 'inherit',
        fontStyle: leaf.italic ? 'italic' : 'inherit',
        textDecoration: leaf.strikethrough ? 'line-through' : 'inherit',
      }}
    >
      {children}
    </span>
  );
};
export default Leaf;
