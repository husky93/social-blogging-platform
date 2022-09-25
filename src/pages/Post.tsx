import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, db } from '../app/firebase';
import {
  useAppSelector,
  useAppDispatch,
  useCheckIfLoggedIn,
} from '../app/hooks';
import { serialize } from '../editor/serialize';
import Header from '../components/Header';
import Container from '../components/Container';
import UserUI from '../components/UserUI';
import LoginUI from '../components/LoginUI';
import PostUI from '../components/PostUI';
import Loading from './Loading';
import Card from '../components/Card';
import Alert from '../components/Alert';
import type { DocumentData, CollectionReference } from 'firebase/firestore';
import type { RootState } from '../app/store';
import type { Node } from 'slate';

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const alert: RootState['alert'] = useAppSelector((state) => state.alert);
  const loading = useCheckIfLoggedIn(dispatch);
  const [post, setPost] = useState<null | undefined | DocumentData>(null);

  useEffect(() => {
    const postsRef: CollectionReference<DocumentData> = collection(db, 'posts');
    getDoc(doc(postsRef, params.id))
      .then((document) => {
        const data: DocumentData | undefined = document.data();
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
        <Container customClasses="my-14">
          {alert.data.isShown ? (
            <div className="my-4">
              <Alert title={alert.data.title} variant={alert.data.variant}>
                {alert.data.text}
              </Alert>
            </div>
          ) : (
            ''
          )}
          <div className="flex">
            <PostUI postID={params.id} />
            <Card customClasses="p-6">
              <h1 className="my-4 text-center text-4xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-slate-800">
                {post.title}
              </h1>
              {post.content.map((item: Node) => serialize(item))}
            </Card>
          </div>
        </Container>
      ) : (
        ''
      )}
    </main>
  );
};

export default Post;
