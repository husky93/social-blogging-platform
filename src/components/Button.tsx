import React, { useEffect, useState } from 'react';

interface ButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string | React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ handleClick, text, variant }) => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'primary':
        setClasses(
          'transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-900'
        );
        break;
      case 'danger':
        setClasses(
          'transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 active:bg-red-900'
        );
        break;
      default:
        setClasses(
          'transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-gray-400 active:bg-gray-600'
        );
    }
  }, []);

  return (
    <button onClick={handleClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
