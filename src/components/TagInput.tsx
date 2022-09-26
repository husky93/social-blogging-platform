import Tag from './Tag';
import React from 'react';

interface TagInputProps {
  tags: Array<string>;
  value: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleRemoveTag: React.MouseEventHandler<HTMLButtonElement>;
  handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

const TagInput: React.FC<TagInputProps> = ({
  value,
  tags,
  handleInputChange,
  handleRemoveTag,
  handleKeyDown,
}) => {
  return (
    <div className="flex-wrap mt-4 flex text-sm font-medium w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {tags.map((tag, index) => (
        <Tag handleRemove={handleRemoveTag} id={index}>
          {tag}
        </Tag>
      ))}
      <input
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onPaste={(e) => e.preventDefault()}
        placeholder="Type your tag name and hit space"
        type="text"
        id="large-input"
        autoComplete="off"
        className="block px-4 py-2 text-sm grow font-medium text-gray-900 rounded-lg sm:text-md focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
      />
    </div>
  );
};

export default TagInput;
