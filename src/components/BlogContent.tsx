import PostCard from './PostCard';
import {
  collection,
  query,
  startAfter,
  orderBy,
  limit,
  getDocs,
  db,
} from '../app/firebase';
import React, { useState, useEffect } from 'react';
import type { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

interface BlogContentProps {}

const BlogContent: React.FC<BlogContentProps> = ({}) => {
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [posts, setPosts] = useState<Array<DocumentData> | null>(null);

  useEffect(() => {
    const getDocuments: Function = async () => {
      const q = query(collection(db, 'posts'), orderBy('likesCount'), limit(6));
      const documentSnapshots = await getDocs(q);
      setPosts(documentSnapshots.docs.map((item) => item.data()));
      setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
    };
    getDocuments();
  }, []);

  return (
    <div>{posts ? posts.map((post) => <PostCard post={post} />) : ''}</div>
  );
};

export default BlogContent;
