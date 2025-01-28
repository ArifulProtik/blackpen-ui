import Image from '@tiptap/extension-image';

export const ImageExtention = Image.extend({
  name: 'ImageBlock',
  group: 'block',
  defining: true,
  isolating: true,
  draggable: false,
  atom: true,
  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', HTMLAttributes];
  },

  addCommands() {
    return {
      setImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: 'ImageBlock',
            attrs: options,
          });
        },
    };
  },
});
