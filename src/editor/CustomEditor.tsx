import { Transforms, Editor, Text, Element } from 'slate';
import type { ReactEditor } from 'slate-react';
import type { BaseEditor } from 'slate';
import type { Node } from 'slate';

const CustomEditor = {
  isBoldMarkActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n: Node) => Text.isText(n) && n.bold === true,
      universal: true,
    });
    return !!match;
  },

  isItalicMarkActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.italic === true,
      universal: true,
    });
    return !!match;
  },

  isStrikethroughMarkActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.strikethrough === true,
      universal: true,
    });
    return !!match;
  },

  isHeadingOneBlockActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === 'heading-1',
    });

    return !!match;
  },

  isHeadingTwoBlockActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === 'heading-2',
    });

    return !!match;
  },

  isBlockquoteActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === 'blockquote',
    });

    return !!match;
  },

  isUnorderedActive(editor: BaseEditor & ReactEditor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && n.type === 'unordered',
    });

    return !!match;
  },

  toggleBoldMark(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleItalicMark(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleStrikethroughMark(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isStrikethroughMarkActive(editor);
    Transforms.setNodes(
      editor,
      { strikethrough: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleHeadingOneBlock(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isHeadingOneBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : 'heading-1' },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleHeadingTwoBlock(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isHeadingTwoBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : 'heading-2' },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleBlockquoteBlock(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isBlockquoteActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : 'blockquote' },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleUnorderedBlock(editor: BaseEditor & ReactEditor): void {
    const isActive = CustomEditor.isUnorderedActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : 'unordered' },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};

export default CustomEditor;
