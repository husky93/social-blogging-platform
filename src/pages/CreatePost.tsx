import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <Footer />
    </main>
  );
};

export default CreatePost;
