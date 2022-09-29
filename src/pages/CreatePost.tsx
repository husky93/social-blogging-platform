import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { LazyExoticComponent } from 'react';

interface CreatePostProps {}

const Editor: LazyExoticComponent<any> = React.lazy(
  () => import('../editor/EditorComponent')
);

const UserUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/UserUI')
);

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
