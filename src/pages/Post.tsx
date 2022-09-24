import React from 'react';
import Header from '../components/Header';
import UserUI from '../components/UserUI';
import Editor from '../editor/EditorComponent';

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  return (
    <main>
      <Header>
        <UserUI post={true} />
      </Header>
      <Editor />
    </main>
  );
};

export default Post;
