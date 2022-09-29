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
        fontWeight: leaf.bold !== undefined ? 'bold' : 'inherit',
        fontStyle: leaf.italic !== undefined ? 'italic' : 'inherit',
        textDecoration:
          leaf.strikethrough !== undefined ? 'line-through' : 'inherit',
      }}
    >
      {children}
    </span>
  );
};
export default Leaf;
