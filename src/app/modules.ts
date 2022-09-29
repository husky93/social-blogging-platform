import React from 'react';
import { db, doc, getDoc } from './firebase';
import type {
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore';

export const fetchPost = async (
  postID: string,
  setPosts: (value: React.SetStateAction<DocumentData[]>) => void
): Promise<void> => {
  const docRef: DocumentReference<DocumentData> = doc(db, 'posts', postID);
  const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
  const data: DocumentData | undefined = docSnap.data();
  if (data) {
    data.id = postID;
    setPosts((prevState) => [...prevState, data]);
  }
};
