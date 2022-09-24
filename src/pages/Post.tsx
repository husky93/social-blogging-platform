import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, db } from '../app/firebase';
import { DocumentData, CollectionReference } from 'firebase/firestore';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import Loading from './Loading';

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const params = useParams();
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const [post, setPost] = useState<null | undefined | DocumentData>(null);

  useEffect(() => {
    const usersRef: CollectionReference<DocumentData> = collection(db, 'posts');
    getDoc(doc(usersRef, params.id))
      .then((document) => {
        const data: DocumentData | undefined = document.data();
        setPost(data);
      })
      .catch((error) =>
        console.error('Error loading Post from database', error)
      );
  }, []);
  return (
    <main>
      {post === null ? <Loading /> : ''}
      {post === undefined ? <div>404! Post not found</div> : ''}
      {post ? <div>{params.id}</div> : ''}
    </main>
  );
};

export default Post;
