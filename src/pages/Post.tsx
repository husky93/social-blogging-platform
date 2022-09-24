import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, db } from '../app/firebase';
import { DocumentData, CollectionReference } from 'firebase/firestore';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import Header from '../components/Header';
import Container from '../components/Container';
import UserUI from '../components/UserUI';
import LoginUI from '../components/LoginUI';
import Loading from './Loading';

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const params = useParams();
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const [post, setPost] = useState<null | undefined | DocumentData>(null);

  useEffect(() => {
    const postsRef: CollectionReference<DocumentData> = collection(db, 'posts');
    const usersRef: CollectionReference<DocumentData> = collection(db, 'users');
    getDoc(doc(postsRef, params.id))
      .then((document) => {
        const data: DocumentData | undefined = document.data();
        console.log(data);
        setPost(data);
      })
      .catch((error) =>
        console.error('Error loading Post from database', error)
      );
  }, []);
  return post === null ? (
    <Loading />
  ) : (
    <main>
      <Header>{user.data ? <UserUI /> : <LoginUI />}</Header>
      {post === undefined ? <Container>404! Post not found</Container> : ''}
      {post ? (
        <Container>
          <div className="my-12">
            <h1 className="text-center text-4xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-slate-800">
              {post.title}
            </h1>
          </div>
        </Container>
      ) : (
        ''
      )}
    </main>
  );
};

export default Post;
