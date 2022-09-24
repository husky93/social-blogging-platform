import React from 'react';
import EditorBtn from './EditorBtn';

interface EditorUIProps {}

const EditorUI: React.FC<EditorUIProps> = ({}) => {
  return (
    <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
      <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
        <div className="flex items-center space-x-1 sm:pr-4">
          <EditorBtn handleClick={() => {}}>Test</EditorBtn>
          <EditorBtn handleClick={() => {}}>Test</EditorBtn>
          <EditorBtn handleClick={() => {}}>Test</EditorBtn>
          <EditorBtn handleClick={() => {}}>Test</EditorBtn>
        </div>
      </div>
    </div>
  );
};

export default EditorUI;
