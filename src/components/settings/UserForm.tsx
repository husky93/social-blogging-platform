import React from 'react';
import type { RootState } from '../../app/store';

const Card = React.lazy(() => import('../Card'));
const Avatar = React.lazy(() => import('../Avatar'));

interface UserFormProps {
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleFileChange: React.ChangeEventHandler<HTMLInputElement>;
  nameValue: string;
  displayNameValue: string;
  user: RootState['user'];
  fileInput: React.LegacyRef<HTMLInputElement>;
}

const UserForm: React.FC<UserFormProps> = ({
  handleFileChange,
  handleInputChange,
  nameValue,
  displayNameValue,
  user,
  fileInput,
}) => {
  return (
    <Card customClasses="p-4 my-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">User</h2>
      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name: *
        </label>
        <input
          onChange={handleInputChange}
          value={nameValue}
          id="name"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="display-name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Display Name: *
        </label>
        <input
          onChange={handleInputChange}
          value={displayNameValue}
          id="display-name"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="profile-pic"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Profile Picture:
        </label>
        <div className="flex gap-4 items-center">
          <Avatar imgLink={user.data!.photoUrl} />
          <input
            onChange={handleFileChange}
            id="profile-pic"
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInput}
          />
        </div>
      </div>
    </Card>
  );
};

export default UserForm;
