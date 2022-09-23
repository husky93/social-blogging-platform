import React, { LazyExoticComponent } from 'react';
import Header from '../components/Header';
import LoginUI from '../components/LoginUI';

const Hero: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Hero')
);

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
  return (
    <main>
      <Header>
        <LoginUI />
      </Header>
      <Hero />
    </main>
  );
};

export default Homepage;
