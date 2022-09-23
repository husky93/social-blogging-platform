import React from 'react';
import { auth, signOut } from '../app/firebase';
import { AppDispatch } from '../app/store';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../features/user/userSlice';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

interface UserUIProps {}

const UserUI: React.FC<UserUIProps> = ({}) => {
  const dispatch: AppDispatch = useAppDispatch();

  const logoutFromApp: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    signOut(auth);
    dispatch(logout());
  };

  return (
    <Wrapper direction="row">
      <Button variant="secondary" text="Sign Out" handleClick={logoutFromApp} />
    </Wrapper>
  );
};

export default UserUI;
