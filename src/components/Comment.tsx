import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { format } from 'date-fns';
import { db, doc, updateDoc } from '../app/firebase';
import Avatar from './Avatar';
import LikeToggler from './LikeToggler';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import type { RootState } from '../app/store';
import type { CommentObject } from './Comments';

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
          <span className="dark:text-white text-gray-600">
            {comment.author.displayName}
          </span>
          <span className="dark:text-white text-gray-400">•</span>
          <span className="text-sm font-light dark:text-white text-gray-400">
            {format(new Date(comment.timestamp.seconds * 1000), 'do MMM yy')}
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
