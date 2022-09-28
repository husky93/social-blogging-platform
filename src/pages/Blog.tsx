import React from 'react';
import Container from '../components/Container';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';
import Add from '../components/Ad';
import UserUI from '../components/UserUI';

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <main className="min-h-screen">
      <Header>
        <UserUI />
      </Header>
      <Container customClasses="flex">
        <div className="basis-1/4 my-4">
          <Menu />
        </div>
        <div className="basis-2/4 p-4">
          <BlogContent />
        </div>
        <div className="basis-1/4">
          <Add />
          <Add />
          <Add />
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default Blog;
