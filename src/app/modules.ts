import { db, doc, getDoc } from './firebase';
import { addPost } from '../features/posts/postsSlice';
import type { AppDispatch } from './store';
import type {
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore';

export const fetchPost = async (
  postID: string | undefined,
  postsArray: Array<DocumentData>,
  dispatch: AppDispatch
): Promise<DocumentData | undefined> => {
  if (!postID) return;

  const desiredPost: DocumentData | undefined = postsArray.find(
    (post) => post.id === postID
  );

  if (desiredPost === undefined) {
    console.log('yo');
    const docRef: DocumentReference<DocumentData> = doc(db, 'posts', postID);
    const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
    const data: DocumentData | undefined = docSnap.data();
    if (data) {
      data.id = postID;
      dispatch(addPost(data));
      return data;
    }
  } else {
    return desiredPost;
  }
};
