import React, { useState, useCallback, useEffect } from 'react';
import { createEditor, Descendant } from 'slate';
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
import TagInput from '../components/TagInput';
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
  const [tagInputValue, setTagInputValue] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);
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
      if (title && user.data && tags.length > 0) {
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
            education: user.data.education,
            job: user.data.job,
          },
          title: title,
          content: post,
          timestamp: serverTimestamp(),
          likes: [],
          likesCount: 0,
          bookmarks: [],
          comments: [],
          tags,
        });
        await updateDoc(doc(usersRef, user.data.uid), {
          posts: arrayUnion(path.id),
        });
        navigate(`/post/${path.id}`);
      } else {
        showAlert(
          'Error!',
          'In order to Submit your post you need to specify a title and add at least one tag!',
          'danger',
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
      if (!draftTitle) {
        showAlert(
          'Error!',
          'You must enter an article title before saving a draft!',
          'danger',
          dispatch
        );
        return;
      }
      if (user.data) {
        const usersRef: CollectionReference<DocumentData> = collection(
          db,
          'users'
        );
        await updateDoc(doc(usersRef, user.data.uid), {
          draft: { title: draftTitle, post: post },
        });
        if (draftTitle) {
          showAlert(
            'Draft Saved!',
            'Your Post draft have been saved successfully! It will be automatically loaded when you visit this page again.',
            'success',
            dispatch
          );
        }
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

  const handleSubmitPost: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    savePost(editor.children);
  };

  const handleSaveDraft: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    saveDraft(editor.children, title);
  };

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setTitle(e.target.value);
  };

  const handleTagsChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (tags.length < 4) {
      setTagInputValue(e.target.value);
    } else {
      showAlert('Info!', 'You can add maximum 4 tags', 'info', dispatch);
    }
  };

  const handleTagsInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (e.key === ' ') {
      e.preventDefault();
      setTagInputValue('');
      const isTagAlreadyExists =
        tags.find((tag) => tag === tagInputValue) !== undefined;
      if (isTagAlreadyExists) {
        showAlert(
          'Error!',
          'You already added a tag with the same name, choose a different one!',
          'warning',
          dispatch
        );
        return;
      }
      if (tagInputValue.length >= 4) {
        setTags((prevState) => [...prevState, tagInputValue]);
      } else {
        showAlert(
          'Error!',
          'Your tag has to have at least 4 characters!',
          'warning',
          dispatch
        );
      }
    }
  };

  const handleRemoveTag: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    const newTags = [...tags];
    const clickedElement = e.target as HTMLElement;
    const index = parseInt(clickedElement.closest('button')!.dataset.id!, 10);
    newTags.splice(index, 1);
    setTags(newTags);
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
          className="block text-2xl font-bold p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-green-500 focus:border-green-500"
        />
        <TagInput
          tags={tags}
          handleInputChange={handleTagsChange}
          handleKeyDown={handleTagsInputKeyDown}
          value={tagInputValue}
          handleRemoveTag={handleRemoveTag}
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
        <div className="my-6 w-full bg-gray-50 rounded-lg border border-gray-200">
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
          <div className="py-2 px-4 bg-white rounded-b-lg">
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
