import React from 'react';
import { useAppSelector } from '../../app/hooks';
import type { RootState } from '../../app/store';
import type { LazyExoticComponent } from 'react';

const Card: LazyExoticComponent<any> = React.lazy(() => import('../Card'));

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1 className="mx-4 mt-8 mb-4 text-center text-2xl font-bold text-gray-900">
        Profile settings
      </h1>
      <Card customClasses="p-4 my-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">User</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md"
          />
          <label htmlFor="display-name">Display Name:</label>
          <input
            id="display-name"
            type="text"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md"
          />
          <label htmlFor="profile-pic">Profile Picture:</label>
          <input id="profile-pic" type="file" />
        </div>
      </Card>
    </form>
  );
};

export default Profile;
