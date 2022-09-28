import React, { Suspense } from 'react';
import Loading from './Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserUI from '../components/UserUI';
import type { LazyExoticComponent } from 'react';

const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen flex flex-col">
        <Header>
          <UserUI />
        </Header>
        <Container customClasses="flex flex-1">
          <div></div>
        </Container>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Dashboard;
