import React from 'react';
import Header from '../components/Header';
import UserUI from '../components/UserUI';

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <main>
      <Header>
        <UserUI />
      </Header>
    </main>
  );
};

export default Blog;
