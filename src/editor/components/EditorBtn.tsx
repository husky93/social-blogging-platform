import React from 'react';

interface EditorBtnProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const EditorBtn: React.FC<EditorBtnProps> = ({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default EditorBtn;
