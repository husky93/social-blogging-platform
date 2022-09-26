import React from 'react';
import Container from '../components/Container';
import Menu from '../components/Menu';
import Header from '../components/Header';
import BlogContent from '../components/BlogContent';
import UserUI from '../components/UserUI';

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <main>
      <Header>
        <UserUI />
      </Header>
      <Container customClasses="flex">
        <div className="sticky basis-1/4 my-4">
          <Menu />
        </div>
        <div className="basis-2/4">
          <BlogContent />
        </div>
        <div className="basis-1/4"></div>
      </Container>
    </main>
  );
};

export default Blog;
