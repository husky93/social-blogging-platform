import React from 'react';
import Header from '../components/Header';
import UserUI from '../components/UserUI';
import Editor from '../editor/EditorComponent';

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = ({}) => {
  return (
    <main>
      <Header>
        <UserUI post={true} />
      </Header>
      <Editor />
    </main>
  );
};

export default CreatePost;
