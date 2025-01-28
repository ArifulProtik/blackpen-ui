import Placeholder from '@tiptap/extension-placeholder';

export const placeholder = Placeholder.configure({
  includeChildren: true,
  emptyEditorClass: 'is-editor-empty',
  placeholder: () => '',
});
