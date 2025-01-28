import { BubbleMenu, Editor } from '@tiptap/react';
import {
  Bold,
  CodeXmlIcon,
  Heading1,
  Heading2,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
} from 'lucide-react';
import LinkPopover from './LinkPopover';

interface props {
  editor: Editor;
}
const ToolTipMenu = ({ editor }: props) => {
  return (
    <BubbleMenu editor={editor}>
      <div className="flex h-10 w-fit flex-row items-center justify-center gap-2 rounded border bg-white px-2 text-black shadow-sm">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${editor.isActive('bold') ? 'active-btn' : ''} p-1`}
        >
          <Bold className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${editor.isActive('italic') ? 'active-btn' : ''} p-1`}
        >
          <Italic className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`${editor.isActive('strike') ? 'active-btn' : ''} p-1`}
        >
          <Strikethrough className="h-5 w-5" />
        </button>

        <span className="text-border">|</span>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${editor.isActive('heading', { level: 1 }) ? 'active-btn' : ''} p-1`}
        >
          <Heading1 className="h-5 w-5" />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${editor.isActive('heading', { level: 2 }) ? 'active-btn' : ''} p-1`}
        >
          <Heading2 className="h-5 w-5" />
        </button>
        <span className="text-border">|</span>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${editor.isActive('bulletList') ? 'active-btn' : ''} p-1`}
        >
          <List className="h-5 w-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${editor.isActive('orderedList') ? 'active-btn' : ''} p-1`}
        >
          <ListOrdered className="h-5 w-5" />
        </button>

        <span className="text-border">|</span>

        <LinkPopover editor={editor}>
          <button
            className={`${
              editor.isActive('link') ? 'bg-muted text-muted-foreground' : ''
            } rounded p-1 hover:bg-accent/50`}
          >
            <Link className="h-5 w-5" />
          </button>
        </LinkPopover>

        <button
          onClick={() => editor.commands.toggleCodeBlock()}
          className={`${editor.isActive('codeBlock') ? 'active-btn' : ''} p-1`}
        >
          <CodeXmlIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${editor.isActive('blockquote') ? 'active-btn' : ''} p-1`}
        >
          <Quote className="h-4 w-4" />
        </button>
      </div>
    </BubbleMenu>
  );
};

export default ToolTipMenu;
