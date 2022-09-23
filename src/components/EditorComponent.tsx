import React, { useState } from 'react';
import Container from './Container';
import { createEditor, BaseEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';

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

const initialValue: Array<CustomElement> = [
  { type: 'paragraph', children: [{ text: 'A line of text in a paragraph.' }] },
];

const EditorComponent: React.FC<EditorProps> = ({}) => {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <Container>
      <Slate editor={editor} value={initialValue}>
        <Editable />
      </Slate>
    </Container>
  );
};

export default EditorComponent;
