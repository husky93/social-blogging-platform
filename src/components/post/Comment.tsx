import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { format } from 'date-fns';
import { db, doc, updateDoc } from '../../app/firebase';
import { updateComments } from '../../features/posts/postsSlice';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import type { RootState } from '../../app/store';
import type { CommentObject } from './CommentList';
import type { LazyExoticComponent } from 'react';
import { getTimeBetween } from '../../app/modules';

const Avatar: LazyExoticComponent<any> = React.lazy(() => import('../Avatar'));
const LikeToggler: LazyExoticComponent<any> = React.lazy(
  () => import('../LikeToggler')
);

interface CommentProps {
  id: number;
  postID: string;
  comments: Array<CommentObject>;
  updateCommentsList: (newList: Array<CommentObject>) => void;
}

const Comment: React.FC<CommentProps> = ({
  postID,
  id,
  comments,
  updateCommentsList,
}) => {
  const [likeActive, setLikeActive] = useState(false);
  const [likesCount, setLikesCount] = useState(comments[id].likes.length);
  const [comment, setComment] = useState(comments[id]);
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const date = new Date(comment.timestamp.seconds * 1000);

  useEffect(() => {
    if (user.data) {
      const uid = user.data.uid;
      const isCommentLiked =
        comment.likes.find((id) => id == uid) !== undefined;
      if (isCommentLiked) setLikeActive(true);
    }
  }, [comment]);

  const toggleLikeDatabase: Function = async (): Promise<void> => {
    if (user.data !== null) {
      const ref: DocumentReference<DocumentData> = doc(db, 'posts', postID);
      if (!likeActive) {
        const newCommentsArray = [
          ...comments.map((obj, index) => {
            if (index === id && user.data)
              return { ...obj, likes: [...obj.likes, user.data.uid] };
            return { ...obj, likes: [...obj.likes] };
          }),
        ];
        await updateDoc(ref, {
          comments: newCommentsArray,
        });
        setComment(newCommentsArray[id]);
        updateCommentsList(newCommentsArray);
        dispatch(updateComments({ comments: newCommentsArray, postID }));
      }
      if (likeActive) {
        const newCommentsArray = [
          ...comments.map((obj) => {
            return { ...obj, likes: [...obj.likes] };
          }),
        ];
        newCommentsArray[id].likes.splice(
          newCommentsArray[id].likes.indexOf(user.data.uid, 1)
        );
        await updateDoc(ref, {
          comments: newCommentsArray,
        });
        setComment(newCommentsArray[id]);
        updateCommentsList(newCommentsArray);
        dispatch(updateComments({ comments: newCommentsArray, postID }));
      }
    }
  };

  const handleLikeToggle: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    if (user.data !== null) {
      setLikeActive((prevState) => !prevState);
      if (!likeActive) setLikesCount((prevState) => (prevState += 1));
      if (likeActive) setLikesCount((prevState) => (prevState -= 1));
      toggleLikeDatabase();
    }
  };

  return (
    <div className="flex items-center py-8 gap-4 min-w-16" data-id={id}>
      <Avatar imgLink={comment.author.photoUrl} />
      <div className="w-full p-4 rounded border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-600">{comment.author.displayName}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm font-light text-gray-400">
            {format(date, 'do MMM yy')} ({getTimeBetween(date)})
          </span>
        </div>
        <p className="mb-4">{comment.text}</p>
        <div className="text-xl flex items-center">
          <LikeToggler
            id={id}
            handleToggle={handleLikeToggle}
            active={likeActive}
          />
          <span className="text-gray-600 text-sm">{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
