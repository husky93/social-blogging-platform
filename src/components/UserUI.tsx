import React from 'react';
import { auth, signOut } from '../app/firebase';
import { AppDispatch } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { RootState } from '../app/store';
import { logout } from '../features/user/userSlice';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

import Dropdown from '../components/Dropdown';

interface UserUIProps {
  post?: boolean;
}

const UserUI: React.FC<UserUIProps> = ({ post }) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const logoutFromApp: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    signOut(auth);
    dispatch(logout());
    navigate('/');
  };

  const navigateToPost: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/create-post');
  };
  return (
    <Wrapper
      direction="column"
      alignItems="center"
      customClasses="gap-x-4 gap-y-4 sm:gap-y-0 sm:flex-row"
    >
      {user.data ? (
        <>
          {post ? (
            ''
          ) : (
            <Button
              variant="primary"
              text="Create Post"
              handleClick={navigateToPost}
            />
          )}

          <Dropdown user={user} handleSignOut={logoutFromApp} />
        </>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default UserUI;
