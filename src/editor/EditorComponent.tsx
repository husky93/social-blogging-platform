import React, { useState, useCallback, useEffect } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import {
  db,
  doc,
  updateDoc,
  collection,
  addDoc,
  arrayUnion,
  getDoc,
  serverTimestamp,
} from '../app/firebase';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import DefaultElement from './rendreres/DefaultElement';
import Heading from './rendreres/Heading';
import Blockquote from './rendreres/Blockquote';
import Unordered from './rendreres/Unordered';
import Leaf from './Leaf';
import EditorUI from './components/EditorUI';
import CustomEditor from './CustomEditor';
import BottomUI from './components/BottomUI';
import Container from '../components/Container';
import Alert, { showAlert } from '../components/Alert';
import type { RootState } from '../app/store';
import type { CollectionReference, DocumentData } from 'firebase/firestore';
import type { AppDispatch } from '../app/store';
import type { NavigateFunction } from 'react-router-dom';

export type CustomElement = { type: 'paragraph'; children: CustomText[] };
export type CustomText = { text: string };

interface EditorProps {}

const EditorComponent: React.FC<EditorProps> = ({}) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const dispatch: AppDispatch = useAppDispatch();
  const alert: RootState['alert'] = useAppSelector((state) => state.alert);
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const navigate: NavigateFunction = useNavigate();
  const initialValue: Array<CustomElement> = [
    {
      type: 'paragraph',
      children: [{ text: 'Start writing your article here...' }],
    },
  ];

  useEffect(() => {
    const usersRef: CollectionReference<DocumentData> = collection(db, 'users');
    if (user.data !== null) {
      getDoc(doc(usersRef, user.data.uid))
        .then((document) => {
          const data: DocumentData | undefined = document.data();
          if (data) {
            if (data.draft.title) {
              setTitle(data.draft.title);
              editor.children = data.draft.post;
            }
          }
        })
        .catch((error) => {
          console.error('Error loading Draft from Database', error);
        });
    }
  }, []);

  const renderElement: (props: any) => JSX.Element = useCallback(
    (props: any) => {
      switch (props.element.type) {
        case 'heading-1':
          return <Heading variant="h1" {...props} />;
        case 'heading-2':
          return <Heading variant="h2" {...props} />;
        case 'blockquote':
          return <Blockquote {...props} />;
        case 'unordered':
          return <Unordered {...props} />;
        default:
          return <DefaultElement {...props} />;
      }
    },
    []
  );

  const savePost: Function = async (post: Array<CustomElement>) => {
    try {
      if (title && user.data) {
        setSubmitting(true);
        const postsRef: CollectionReference<DocumentData> = collection(
          db,
          'posts'
        );
        const usersRef: CollectionReference<DocumentData> = collection(
          db,
          'users'
        );
        const path = await addDoc(postsRef, {
          author: {
            uid: user.data.uid,
            displayName: user.data.displayName,
            photoUrl: user.data.photoUrl,
          },
          title: title,
          content: post,
          timestamp: serverTimestamp(),
          likes: [],
          bookmarks: [],
          comments: [],
        });
        await updateDoc(doc(usersRef, user.data.uid), {
          posts: arrayUnion(path.id),
        });
        saveDraft(initialValue, '');
        navigate(`/post/${path.id}`);
      } else {
        showAlert(
          'Error!',
          'In order to Submit your post you need to specify a title!',
          'warning',
          dispatch
        );
      }
    } catch (error: any) {
      console.error('Error writing new data to Firebase Database', error);
    }
  };

  const saveDraft: Function = async (
    post: Array<CustomElement>,
    draftTitle: string
  ) => {
    try {
      if (user.data) {
        const usersRef: CollectionReference<DocumentData> = collection(
          db,
          'users'
        );
        await updateDoc(doc(usersRef, user.data.uid), {
          draft: { title: draftTitle, post: post },
        });
        showAlert(
          'Draft Saved!',
          'Your Post draft have been saved successfully! It will be automatically loaded when you visit this page again.',
          'success',
          dispatch
        );
      } else {
        showAlert(
          'Error!',
          'In order to Save Draft your post you need to be logged in!',
          'warning',
          dispatch
        );
      }
    } catch (error: any) {
      console.error('Error writing new data to Firebase Database', error);
    }
  };

  const handleSubmitPost: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    savePost(editor.children);
  };

  const handleSaveDraft: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    saveDraft(editor.children, title);
  };

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const renderLeaf: (props: any) => JSX.Element = useCallback((props: any) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Container>
      <div className="my-6">
        <input
          value={title}
          onChange={handleTitleChange}
          placeholder="Your article title..."
          type="text"
          id="large-input"
          className="block text-2xl font-bold p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-gren-500"
        />
        {alert.data.isShown ? (
          <div className="my-4">
            <Alert variant={alert.data.variant} title={alert.data.title}>
              {alert.data.text}
            </Alert>
          </div>
        ) : (
          ''
        )}
      </div>
      <Slate editor={editor} value={initialValue}>
        <div className="my-6 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <EditorUI
            toggleHeadingOneBlock={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleHeadingOneBlock(editor);
            }}
            toggleHeadingTwoBlock={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleHeadingTwoBlock(editor);
            }}
            toggleBlockquoteBlock={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleBlockquoteBlock(editor);
            }}
            toggleUnorderedBlock={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleUnorderedBlock(editor);
            }}
            toggleBoldMark={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleBoldMark(editor);
            }}
            toggleItalicMark={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleItalicMark(editor);
            }}
            toggleStrikethroughMark={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              e.preventDefault();
              CustomEditor.toggleStrikethroughMark(editor);
            }}
          />
          <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
            <Editable
              className="py-4 min-h-[500px]"
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) {
                  return;
                }
                switch (event.key) {
                  case 'b': {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                    break;
                  }
                }
              }}
            />
          </div>
        </div>
      </Slate>
      <BottomUI
        handleSubmit={handleSubmitPost}
        handleSave={handleSaveDraft}
        submitting={submitting}
      />
    </Container>
  );
};

export default EditorComponent;
