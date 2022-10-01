import React from 'react';
import type { LazyExoticComponent } from 'react';

const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);
const Menu: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Menu')
);
const Header: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Header')
);
const Footer: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Footer')
);
const BlogContent: LazyExoticComponent<any> = React.lazy(
  () => import('../components/BlogContent')
);
const Ad: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Ad')
);
const UserUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/UserUI')
);

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <main className="min-h-screen">
      <Header>
        <UserUI />
      </Header>
      <Container customClasses="flex flex-col items-center lg:items-start lg:flex-row">
        <div className="hidden basis-1/4 my-4 lg:block">
          <Menu />
        </div>
        <div className="md:p-4 lg:basis-2/4">
          <BlogContent />
        </div>
        <div className="hidden lg:basis-1/4 lg:block">
          <Ad />
          <Ad />
          <Ad />
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Blog;
