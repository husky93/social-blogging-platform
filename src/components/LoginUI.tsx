import React from 'react';

interface LoginUIProps {}

const LoginUI: React.FC<LoginUIProps> = ({}) => {
  return (
    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <button className="transition-all ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-900">
        Sign in
      </button>
    </div>
  );
};

export default LoginUI;
