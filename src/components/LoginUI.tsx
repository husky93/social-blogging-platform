import React from 'react';
import { auth, provider, signInWithPopup } from '../app/firebase';
import { AppDispatch } from '../app/store';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/user/userSlice';

interface LoginUIProps {}

const LoginUI: React.FC<LoginUIProps> = ({}) => {
  const dispatch: AppDispatch = useAppDispatch();

  const loginToApp: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          errorCode + ' Error occured while trying to log in: ' + errorMessage
        );
      });
  };

  return (
    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <button
        onClick={loginToApp}
        className="transition-all ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-900"
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginUI;
