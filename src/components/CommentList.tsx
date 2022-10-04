import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { updateComments } from '../features/posts/postsSlice';
import { showAlert } from './Alert';
import { updateDoc, doc, arrayUnion, db } from '../app/firebase';
import { Timestamp } from 'firebase/firestore';
import type { RootState } from '../app/store';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import type { LazyExoticComponent } from 'react';

const Button: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Button')
);
const Comment: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Comment')
);
const Alert: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Alert')
);

interface CommentListProps {
  post: null | undefined | DocumentData;
  postID: string;
}

export type CommentObject = {
  text: string;
  timestamp: Timestamp;
  author: { uid: string; displayName: string; photoUrl: string };
  likes: Array<string>;
};

const CommentList: React.FC<CommentListProps> = ({ post, postID }) => {
  const [value, setValue] = useState('');
  const [commentList, setCommentList] = useState(post?.comments);
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const alert: RootState['alert'] = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  const addComment: Function = async (
    text: string,
    uid: string,
    displayName: string,
    photoUrl: string
  ): Promise<void> => {
    const postRef: DocumentReference<DocumentData> = doc(db, 'posts', postID);
    const commentObject: object = {
      author: { uid, displayName, photoUrl },
      text,
      timestamp: Timestamp.now(),
      likes: [],
    };
    await updateDoc(postRef, {
      comments: arrayUnion(commentObject),
    });
    setValue('');
    const newCommentList = [...commentList, commentObject];
    setCommentList(newCommentList);
    dispatch(updateComments({ postID, comments: newCommentList }));
  };

  const handleCommentSubmit: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    e.preventDefault();
    if (value.length >= 6 && user.data) {
      addComment(
        value,
        user.data.uid,
        user.data.displayName,
        user.data.photoUrl
      );
    } else if (!user.data) {
      showAlert(
        'Error!',
        'You need to be logged in in order to add comments!',
        'info',
        dispatch
      );
    } else {
      showAlert(
        'Error!',
        'Your comment needs at least 6 characters!',
        'danger',
        dispatch
      );
    }
  };

  const updateCommentsList = (newList: Array<CommentObject>) => {
    setCommentList(newList);
  };

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ): void => {
    setValue(e.target.value);
  };

  return (
    <div>
      {user.data ? (
        <div>
          {alert.data.isShown ? (
            <Alert title={alert.data.title} variant={alert.data.variant}>
              {alert.data.text}
            </Alert>
          ) : (
            ''
          )}
          <label
            htmlFor="comment"
            className="block mb-2 text-sm font-medium text-gray-90"
          >
            Add new comment:
          </label>
          <textarea
            value={value}
            onChange={handleTextareaChange}
            id="comment"
            rows={6}
            className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your comment..."
          ></textarea>
          <div className="w-full flex justify-end mt-4">
            <Button
              text="Add comment"
              variant="primary"
              handleClick={handleCommentSubmit}
            />
          </div>
        </div>
      ) : (
        ''
      )}

      {commentList
        ? commentList.map((comment: CommentObject, index: number) => (
            <Comment
              postID={postID}
              id={index}
              comments={commentList}
              updateCommentsList={updateCommentsList}
              key={`comment-${index}`}
            />
          ))
        : ''}
    </div>
  );
};

export default CommentList;
