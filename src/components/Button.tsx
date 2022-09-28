import React, { useEffect, useState } from 'react';

interface ButtonProps {
  text: string | React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger' | 'hollow';
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, text, variant, id }) => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'primary':
        setClasses(
          'button bg-green-600 text-white hover:bg-green-700 active:bg-green-900'
        );
        break;
      case 'danger':
        setClasses(
          'button bg-red-600 text-white hover:bg-red-700 active:bg-red-900'
        );
        break;
      case 'hollow':
        setClasses(
          'button text-gray-500 bg-white hover:bg-gray-100 border border-gray-200 hover:text-gray-900'
        );
        break;
      default:
        setClasses(
          'button bg-gray-300 text-slate-800 hover:bg-gray-400 active:bg-gray-600'
        );
    }
  }, []);

  return (
    <button onClick={handleClick} className={classes} data-id={id}>
      {text}
    </button>
  );
};

export default Button;
