import React from 'react';
import Header from '../components/Header';
import UserUI from '../components/UserUI';

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  return (
    <Header>
      <UserUI post={true} />
    </Header>
  );
};

export default Post;
