import React from 'react';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Container from '../components/Container';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Container customClasses="flex flex-1">
        <Wrapper direction="column" alignItems="center" justifyContent="center">
          <Spinner />
        </Wrapper>
      </Container>
      <Footer />
    </main>
  );
};

export default Loading;
