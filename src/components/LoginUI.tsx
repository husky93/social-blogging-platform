import React from 'react';
import { auth, provider, signInWithPopup } from '../app/firebase';
import { AppDispatch } from '../app/store';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/user/userSlice';
import Button from '../components/Button';

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
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
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
      <Button variant="primary" handleClick={loginToApp} text="Sign in" />
    </div>
  );
};

export default LoginUI;
