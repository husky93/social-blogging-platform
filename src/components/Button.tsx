import React from 'react';

interface ButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ handleClick, text, variant }) => {
  const classes =
    variant === 'primary'
      ? 'transition-all ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-900'
      : 'transition-all ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-900';

  return (
    <button onClick={handleClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
