import React from 'react';
import Header from '../components/Header';
import LoginUI from '../components/LoginUI';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
  return (
    <main>
      <Header>
        <LoginUI />
      </Header>
    </main>
  );
};

export default Homepage;
