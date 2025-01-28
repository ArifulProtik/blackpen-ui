import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight';

const lowlight = createLowlight(all);

export const CodeBlockLowLight = CodeBlockLowlight.configure({
  lowlight,
  defaultLanguage: '',
});
