import React from 'react';
import EditorBtn from './EditorBtn';
import { Icon } from '@ricons/utils';
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import {
  H1,
  H2,
  Bold,
  Italic,
  Strikethrough,
  Quote,
  ListNumbers,
  List,
} from '@ricons/tabler';
import { useSlateStatic } from 'slate-react';

interface EditorUIProps {
  toggleHeadingOneBlock: React.MouseEventHandler<HTMLButtonElement>;
  toggleHeadingTwoBlock: React.MouseEventHandler<HTMLButtonElement>;
  toggleBlockquoteBlock: React.MouseEventHandler<HTMLButtonElement>;
  toggleBoldMark: React.MouseEventHandler<HTMLButtonElement>;
  toggleItalicMark: React.MouseEventHandler<HTMLButtonElement>;
  toggleStrikethroughMark: React.MouseEventHandler<HTMLButtonElement>;
  toggleUnorderedBlock: React.MouseEventHandler<HTMLButtonElement>;
}

const EditorUI: React.FC<EditorUIProps> = ({
  toggleHeadingOneBlock,
  toggleHeadingTwoBlock,
  toggleBlockquoteBlock,
  toggleBoldMark,
  toggleItalicMark,
  toggleStrikethroughMark,
  toggleUnorderedBlock,
}) => {
  const editor = useSlateStatic();

  return (
    <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
      <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
        <div className="flex items-center space-x-1 sm:pr-4">
          <EditorBtn handleClick={toggleHeadingOneBlock}>
            <Icon>
              <H1 />
            </Icon>
          </EditorBtn>
          <EditorBtn handleClick={toggleHeadingTwoBlock}>
            <Icon>
              <H2 />
            </Icon>
          </EditorBtn>
          <EditorBtn handleClick={toggleBlockquoteBlock}>
            <Icon>
              <Quote />
            </Icon>
          </EditorBtn>
          <EditorBtn handleClick={toggleUnorderedBlock}>
            <Icon>
              <List />
            </Icon>
          </EditorBtn>
        </div>
        <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
          <EditorBtn handleClick={toggleBoldMark}>
            <Icon>
              <Bold />
            </Icon>
          </EditorBtn>
          <EditorBtn handleClick={toggleItalicMark}>
            <Icon>
              <Italic />
            </Icon>
          </EditorBtn>
          <EditorBtn handleClick={toggleStrikethroughMark}>
            <Icon>
              <Strikethrough />
            </Icon>
          </EditorBtn>
        </div>
      </div>
    </div>
  );
};

export default EditorUI;
