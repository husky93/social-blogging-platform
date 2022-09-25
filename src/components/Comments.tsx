import React from 'react';
import Button from './Button';
import type { DocumentData } from 'firebase/firestore';

interface CommentsProps {
  post: null | undefined | DocumentData;
  postID: string;
}

const Comments: React.FC<CommentsProps> = ({ post, postID }) => {
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Add new comment:
      </label>
      <textarea
        id="message"
        rows={6}
        className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
      ></textarea>
      <div className="w-full flex justify-end mt-4">
        <Button text="Add comment" variant="primary" />
      </div>
    </div>
  );
};

export default Comments;
