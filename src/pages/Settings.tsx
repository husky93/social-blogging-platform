import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Outlet } from 'react-router-dom';
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
const Menu: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Menu')
);
const SettingsMenu: LazyExoticComponent<any> = React.lazy(
  () => import('../components/settings/SettingsMenu')
);
const Profile: LazyExoticComponent<any> = React.lazy(
  () => import('../components/settings/Profile')
);
const Footer: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Footer')
);
interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);

  return (
    <main className="min-h-screen flex flex-col">
      <Header>
        <UserUI />
      </Header>
      <Container customClasses="flex-grow flex flex-col items-center w-full lg:items-start lg:flex-row">
        <div className="hidden basis-1/4 my-4 lg:block">
          <Menu>
            <SettingsMenu />
          </Menu>
        </div>
        <div className="md:p-4 lg:basis-3/4">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Settings;
