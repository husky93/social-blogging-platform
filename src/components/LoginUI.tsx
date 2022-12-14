import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/user/userSlice';
import Button from '../components/Button';
import {
  auth,
  provider,
  signInWithPopup,
  db,
  doc,
  getDoc,
  collection,
  setDoc,
} from '../app/firebase';
import type { AppDispatch } from '../app/store';
import type { User, UserCredential } from 'firebase/auth';
import type {
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
} from 'firebase/firestore';

interface LoginUIProps {
  text?: string;
}

const LoginUI: React.FC<LoginUIProps> = ({ text }) => {
  const dispatch: AppDispatch = useAppDispatch();

  const saveUser: Function = async (user: User) => {
    try {
      const usersRef: CollectionReference<DocumentData> = collection(
        db,
        'users'
      );
      await setDoc(doc(usersRef, user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        name: user.displayName,
        photoUrl: user.photoURL,
        posts: [],
        bookmarks: [],
        education: '',
        job: '',
      });
    } catch (error: any) {
      console.error('Error writing new data to Firebase Database', error);
    }
  };

  const loginToApp: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then(async (result: UserCredential) => {
        const user: User = result.user;
        const docRef: DocumentReference<DocumentData> = doc(
          db,
          'users',
          user.uid
        );
        const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
        if (!docSnap.exists()) {
          saveUser(user);
        }
      })
      .catch((error: any) => {
        const errorCode: string = error.code;
        const errorMessage: string = error.message;
        console.error(
          errorCode + ' Error occured while trying to log in: ' + errorMessage
        );
      });
  };

  return (
    <div className={text ? '' : 'items-center justify-end flex flex-1'}>
      <Button
        variant="primary"
        handleClick={loginToApp}
        text={text ? text : 'Sign in'}
      />
    </div>
  );
};

export default LoginUI;
