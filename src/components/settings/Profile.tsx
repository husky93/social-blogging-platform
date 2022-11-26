import React, { useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  db,
  doc,
  updateDoc,
  uploadBytesResumable,
  getDownloadURL,
  storage,
  ref,
} from '../../app/firebase';
import { login } from '../../features/user/userSlice';
import { showAlert } from '../Alert';
import type { RootState } from '../../app/store';
import type { DocumentReference, DocumentData } from 'firebase/firestore';

const Button = React.lazy(() => import('../Button'));
const Alert = React.lazy(() => import('../Alert'));
const Spinner = React.lazy(() => import('../Spinner'));
const UserForm = React.lazy(() => import('./UserForm'));

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const alert: RootState['alert'] = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = useState('');
  const [displayNameValue, setDisplayNameValue] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user.data) {
      setNameValue(user.data.name);
      setDisplayNameValue(user.data.displayName);
    }
  }, [user]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (e.target.id === 'name') {
      setNameValue(e.target.value);
    }
    if (e.target.id === 'display-name') {
      setDisplayNameValue(e.target.value);
    }
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    var file;
    if (fileInput.current !== null) {
      const input = fileInput.current;
      if (input.files) {
        file = input.files[0];
      }
    }
    if (file && file.size > 1097152) {
      showAlert(
        'Error!',
        'The file you are trying to upload is too big! (Maximum accepted size is 1MB)',
        'danger',
        dispatch
      );
      e.target.value = '';
    }
  };

  const requestUserDataChange = async (newData: object): Promise<any> => {
    if (user.data) {
      const ref: DocumentReference<DocumentData> = doc(
        db,
        'users',
        user.data.uid
      );
      const newUserData = {
        ...user.data,
        ...newData,
      };
      await updateDoc(ref, { ...newData });
      dispatch(login(newUserData));
    }
  };

  const requestPostsDataChange = async (): Promise<any> => {
    if (user.data) {
      const posts = user.data.posts;
      posts.forEach(async (post) => {
        const ref: DocumentReference<DocumentData> = doc(db, 'posts', post);
        await updateDoc(ref, {
          'author.displayName': displayNameValue,
          'author.photoUrl': profileUrl ? profileUrl : user.data?.photoUrl,
        });
      });
    }
  };

  const requestFileUpload = async (file: File): Promise<any> => {
    const storageRef = ref(storage, `profilepics/${user.data?.uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setIsUploading(true);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.error('File upload failed!');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          requestUserDataChange({ photoUrl: downloadURL });
          setProfileUrl(downloadURL);
          setIsUploading(false);
        });
      }
    );
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<any> => {
    e.preventDefault();
    if (!nameValue || !displayNameValue) {
      showAlert(
        'Error!',
        'Some of the required inputs are empty. Please fill them up.',
        'danger',
        dispatch
      );
      return;
    }
    var file;
    if (fileInput.current !== null) {
      const input = fileInput.current;
      if (input.files) {
        file = input.files[0];
      }
    }
    if (file) await requestFileUpload(file);
    requestUserDataChange({ name: nameValue, displayName: displayNameValue });
    if (user.data && user.data.posts.length > 0) requestPostsDataChange();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="mx-4 mt-8 mb-4 text-center text-2xl font-bold text-gray-900">
        Profile settings
      </h1>
      {alert.data.isShown && (
        <Alert title={alert.data.title} variant={alert.data.variant}>
          {alert.data.text}
        </Alert>
      )}
      <UserForm
        handleFileChange={handleFileChange}
        handleInputChange={handleInputChange}
        nameValue={nameValue}
        displayNameValue={displayNameValue}
        user={user}
        fileInput={fileInput}
      />
      <div className="ml-auto w-fit">
        {isUploading ? (
          <Spinner />
        ) : (
          <Button type="submit" text="Submit changes" variant="primary" />
        )}
      </div>
    </form>
  );
};

export default Profile;
