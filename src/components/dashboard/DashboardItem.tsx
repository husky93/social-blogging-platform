import React from 'react';
import { format } from 'date-fns';
import type { LazyExoticComponent } from 'react';
import { DocumentData } from 'firebase/firestore';

const Card: LazyExoticComponent<any> = React.lazy(() => import('../Card'));

const Button: LazyExoticComponent<any> = React.lazy(() => import('../Button'));

interface DashboardItemProps {
  handleModalOpen: React.MouseEventHandler<HTMLButtonElement>;
  post: DocumentData;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  handleModalOpen,
  post,
}) => {
  const date = new Date(post.timestamp.seconds * 1000);
  return (
    <>
      {!!post && (
        <Card customClasses="w-72">
          <div className="p-4 text-center">
            <h4 className="transition-all my-3 font-extrabold text-lg line-clamp-1 hover:text-green-700">
              {post.title}
            </h4>
            <span className="font-light text-gray-500 text-sm">
              {format(date, 'dd MMM')}
            </span>
            <div className="flex justify-center items-center mt-4">
              <Button
                text="Delete Article"
                variant="danger"
                id={post.id}
                handleClick={handleModalOpen}
              />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default DashboardItem;
