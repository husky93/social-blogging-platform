import { Text } from 'slate';
import Blockquote from './rendreres/Blockquote';
import Heading from './rendreres/Heading';
import Unordered from './rendreres/Unordered';
import type { Node } from 'slate';
import type { ReactElement } from 'react';

export const serialize = (
  node: Node
): string | React.DetailedHTMLProps<any, any> => {
  if (Text.isText(node)) {
    let string: ReactElement<any, any> | string = node.text;
    if (node.bold) {
      string = <strong className="font-medium">{string}</strong>;
    }
    if (node.italic) {
      string = <em className="italic">{string}</em>;
    }
    if (node.strikethrough) {
      string = <s className="line-through">{string}</s>;
    }
    return string;
  }

  const children = node.children.map((n) => serialize(n));

  switch (node.type) {
    case 'blockquote':
      return <Blockquote>{children}</Blockquote>;
    case 'paragraph':
      return <p>{children}</p>;
    case 'heading-1':
      return <Heading variant="h1">{children}</Heading>;
    case 'heading-2':
      return <Heading variant="h2">{children}</Heading>;
    case 'unordered':
      return <Unordered>{children}</Unordered>;
    default:
      return !!children[0] ? <p>{children}</p> : <br></br>;
  }
};
