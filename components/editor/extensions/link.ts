import Link from '@tiptap/extension-link';

export const link = Link.configure({
  openOnClick: true,
  autolink: true,
  defaultProtocol: 'https',
  protocols: ['http', 'https'],
});
