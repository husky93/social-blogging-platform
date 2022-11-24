import React from 'react';
import { useAppSelector } from '../app/hooks';
import type { RootState } from '../app/store';
import type { LazyExoticComponent } from 'react';

const Header: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Header')
);
const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);
const UserUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/UserUI')
);
const LoginUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/LoginUI')
);
const Menu: LazyExoticComponent<any> = React.lazy(
  () => import('../components/LoginUI')
);
const Footer: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Footer')
);
interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);

  return (
    <main className="min-h-screen flex flex-col">
      <Header>{user.data ? <UserUI /> : <LoginUI />}</Header>
      <Container customClasses="flex-1 w-full flex items-center">
        <h1 className="text-center my-8 text-5xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800">
          Settings
        </h1>
      </Container>
      <Footer />
    </main>
  );
};

export default Settings;
