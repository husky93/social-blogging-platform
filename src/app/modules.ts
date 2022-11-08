import { db, doc, getDoc } from './firebase';
import { addPost } from '../features/posts/postsSlice';
import { intervalToDuration } from 'date-fns';
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

export const getTimeBetween = (start: Date): string => {
  const timeObj = intervalToDuration({
    start,
    end: new Date(),
  });
  console.log(timeObj);
  if (timeObj.years && timeObj.years > 0)
    return `${timeObj.years} ${timeObj.years > 1 ? 'years' : 'year'} ago`;
  if (timeObj.months && timeObj.months > 0)
    return `${timeObj.months} ${timeObj.months > 1 ? 'months' : 'month'} ago`;
  if (timeObj.days && timeObj.days > 0)
    return `${timeObj.days} ${timeObj.days > 1 ? 'days' : 'day'} ago`;
  if (timeObj.hours && timeObj.hours > 0)
    return `${timeObj.hours} ${timeObj.hours > 1 ? 'hours' : 'hour'} ago`;
  if (timeObj.minutes && timeObj.minutes > 0)
    return `${timeObj.minutes} ${
      timeObj.minutes > 1 ? 'minutes' : 'minute'
    } ago`;
  if (timeObj.seconds && timeObj.seconds > 0)
    return `${timeObj.seconds} ${
      timeObj.seconds > 1 ? 'seconds' : 'second'
    } ago`;
  return 'unknown time ago';
};
