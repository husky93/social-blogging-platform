import { Text, Element } from 'slate';
import Blockquote from './rendreres/Blockquote';
import Heading from './rendreres/Heading';
import Unordered from './rendreres/Unordered';
import type { Node } from 'slate';
import type { ReactElement } from 'react';

export const serialize = (
  node: Node,
  i: number
): string | React.DetailedHTMLProps<any, any> => {
  if (Text.isText(node)) {
    let string: ReactElement<any, any> | string = node.text;
    if (node.bold) {
      string = (
        <strong key={`serialized-${i}`} className="font-medium">
          {string}
        </strong>
      );
    }
    if (node.italic) {
      string = (
        <em key={`serialized-${i}`} className="italic">
          {string}
        </em>
      );
    }
    if (node.strikethrough) {
      string = (
        <s key={`serialized-${i}`} className="line-through">
          {string}
        </s>
      );
    }
    return string;
  }

  const children = node.children.map((n, i) => serialize(n, i));
  if (!Element.isElement(node)) return;
  switch (node.type) {
    case 'blockquote':
      return <Blockquote key={`serialized-${i}`}>{children}</Blockquote>;
    case 'paragraph':
      return <p key={`serialized-${i}`}>{children}</p>;
    case 'heading-1':
      return (
        <Heading key={`serialized-${i}`} variant="h1">
          {children}
        </Heading>
      );
    case 'heading-2':
      return (
        <Heading key={`serialized-${i}`} variant="h2">
          {children}
        </Heading>
      );
    case 'unordered':
      return <Unordered key={`serialized-${i}`}>{children}</Unordered>;
    default:
      return !!children[0] ? (
        <p key={`serialized-${i}`}>{children}</p>
      ) : (
        <br key={`serialized-${i}`}></br>
      );
  }
};
