import React from 'react';

interface CodeElementProps {
  attributes: Array<any>;
  children: React.ReactNode;
}

const CodeElement: React.FC<CodeElementProps> = ({ attributes, children }) => {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  );
};

export default CodeElement;
