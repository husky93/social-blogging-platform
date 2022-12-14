import React from 'react';

interface TagProps {
  children: React.ReactNode;
  id: number;
  handleRemove: React.MouseEventHandler<HTMLButtonElement>;
}

const Tag: React.FC<TagProps> = ({ children, handleRemove, id }) => {
  return (
    <span className="m-2 inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded">
      {children}
      <button
        type="button"
        className="inline-flex items-center p-0.5 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900"
        aria-label="Remove"
        data-id={id}
        onClick={handleRemove}
      >
        <svg
          aria-hidden="true"
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          data-id={id}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-id={id}
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only" data-id={id}>
          Remove tag
        </span>
      </button>
    </span>
  );
};

export default Tag;
