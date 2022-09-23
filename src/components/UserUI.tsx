import React from 'react';
import { auth, signOut } from '../app/firebase';
import { AppDispatch } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { logout } from '../features/user/userSlice';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';
import Avatar from '../components/Avatar';

interface UserUIProps {}

const UserUI: React.FC<UserUIProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useAppDispatch();

  const logoutFromApp: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    signOut(auth);
    dispatch(logout());
  };
  return (
    <Wrapper direction="row" alignItems="center" customClasses="gap-x-4">
      {user.data ? (
        <>
          <Avatar imgLink={user.data.photoUrl} />
          <span className="font-medium text-sm">{user.data.displayName}</span>
          <Button
            variant="secondary"
            text="Sign Out"
            handleClick={logoutFromApp}
          />
        </>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default UserUI;
