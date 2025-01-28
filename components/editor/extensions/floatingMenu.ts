import FloatingMenu from '@tiptap/extension-floating-menu';

export const fmenu = FloatingMenu.configure({
  shouldShow: ({ editor, view, state, oldState }) => {
    // show the floating within any paragraph
    return editor.isActive('paragraph');
  },
});
