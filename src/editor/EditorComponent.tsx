import React, { useState, useCallback } from 'react';
import Container from '../components/Container';
import {
  createEditor,
  BaseEditor,
  Descendant,
  Transforms,
  Editor,
  Text,
} from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import CodeElement from './rendreres/CodeElement';
import DefaultElement from './rendreres/DefaultElement';
import Leaf from './Leaf';
import EditorUI from './components/EditorUI';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

interface EditorProps {}

const CustomEditor = {
  isBoldMarkActive(editor: BaseEditor & ReactEditor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor: BaseEditor & ReactEditor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'code',
    });

    return !!match;
  },

  toggleBoldMark(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleCodeBlock(editor: BaseEditor & ReactEditor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};

const initialValue: Array<CustomElement> = [
  {
    type: 'paragraph',
    children: [{ text: 'Start writing your article here...' }],
  },
];

const EditorComponent: React.FC<EditorProps> = ({}) => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement: (props: any) => JSX.Element = useCallback(
    (props: any) => {
      switch (props.element.type) {
        case 'code':
          return <CodeElement {...props} />;
        default:
          return <DefaultElement {...props} />;
      }
    },
    []
  );

  const renderLeaf: (props: any) => JSX.Element = useCallback((props: any) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Container>
      <Slate editor={editor} value={initialValue}>
        <div className="my-6 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <EditorUI />
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
                  case '`': {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                    break;
                  }

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
    </Container>
  );
};

export default EditorComponent;
