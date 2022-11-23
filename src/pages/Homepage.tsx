import React from 'react';
import type { LazyExoticComponent } from 'react';

const Hero: LazyExoticComponent<any> = React.lazy(
  () => import('../components/homepage/Hero')
);
const Header: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Header')
);
const LoginUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/LoginUI')
);
const Footer: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Footer')
);
const Trending: LazyExoticComponent<any> = React.lazy(
  () => import('../components/homepage/Trending')
);

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
  return (
    <main>
      <Header>
        <LoginUI />
      </Header>
      <Hero />
      <Trending />
      <Footer />
    </main>
  );
};

export default Homepage;
