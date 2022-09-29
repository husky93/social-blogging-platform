/// <reference types="vite/client" />

import { BaseElement } from 'slate';

declare module 'slate' {
  export interface BaseElement {
    type: string;
  }
  export interface BaseText {
    strikethrough?: boolean;
    bold?: boolean;
    italic?: boolean;
  }
}
