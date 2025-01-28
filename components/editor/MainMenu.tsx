import { useFileUpload } from '@/hooks/useUploader';
import { Editor, FloatingMenu } from '@tiptap/react';
import {
  CodeXmlIcon,
  GripVertical,
  Heading1,
  Heading2,
  ImageIcon,
  List,
  ListOrdered,
  Quote,
  Text,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface Props {
  editor: Editor;
}

const MainMenu = ({ editor }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadFile, imgUrl, isUploading, resetUpload } = useFileUpload();

  const imagePositionRef = useRef<number | null>(0);

  if (!editor) {
    return null;
  }
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    editor.chain().focus().setImage({ src: localUrl }).run();
    imagePositionRef.current = editor.state.selection.anchor;

    try {
      await uploadFile(file);
    } catch (error) {
      editor.commands.deleteNode('image');
    } finally {
      URL.revokeObjectURL(localUrl);
    }
  };

  useEffect(() => {
    if (imgUrl && imagePositionRef.current !== null) {
      const { doc, tr } = editor.state;
      const resolvedPos = doc.resolve(imagePositionRef.current);

      const node = resolvedPos.nodeAfter;
      if (node && node.type.name === 'ImageBlock') {
        const transaction = tr.setNodeMarkup(
          imagePositionRef.current,
          undefined,
          { ...node.attrs, src: imgUrl },
        );

        editor.view.dispatch(transaction);
      }

      imagePositionRef.current = null;
      resetUpload();
    }
  }, [imgUrl, editor, resetUpload]);

  const menuActions = [
    {
      icon: Text,
      color: 'text-blue-500',
      label: 'Text',
      action: () => editor.commands.setParagraph(),
    },
    {
      icon: Heading1,
      color: 'text-green-500',
      label: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      icon: Heading2,
      color: 'text-green-500',
      label: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      icon: List,
      color: 'text-purple-500',
      label: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      icon: ListOrdered,
      color: 'text-orange-500',
      label: 'Numbered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      icon: ImageIcon,
      color: 'text-cyan-500',
      label: 'Image',
      action: () => fileInputRef.current?.click(),
    },
    {
      icon: Quote,
      color: 'text-pink-500',
      label: 'Quote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      icon: CodeXmlIcon,
      color: 'text-red-500',
      label: 'Code',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
    },
  ];

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <FloatingMenu
        shouldShow={() => true}
        editor={editor}
        tippyOptions={{
          hideOnClick: false,
          offset: [-2, -32], // Adjust offset for proper positioning
          onClickOutside: () => setIsOpen(false),
          placement: 'right-start', // Position to the right of the reference
          getReferenceClientRect: () => {
            if (!editor?.view?.dom || !editor.state.selection) {
              return new DOMRect(0, 0, 0, 0);
            }

            // Get editor's left position
            const editorRect = editor.view.dom.getBoundingClientRect();
            const leftPos = editorRect.left; // Adjust left padding

            // Get cursor's vertical position
            const cursorCoords = editor.view.coordsAtPos(
              editor.state.selection.from,
            );

            return new DOMRect(
              leftPos,
              cursorCoords?.top || editorRect.top, // Fallback to editor top
              1, // Minimal width/height
              1,
            );
          },
        }}
      >
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <GripVertical className="" />
          </PopoverTrigger>

          <PopoverContent
            align="start"
            side="right"
            sideOffset={10}
            className="w-44 rounded-lg border bg-background p-2 shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {menuActions.map((action) => (
                <button
                  key={action.label}
                  onClick={action.action}
                  className="flex items-center gap-2 rounded p-1 hover:bg-accent/50"
                >
                  <action.icon className={`h-5 w-5 ${action.color}`} />
                  <span className="text-sm">{action.label}</span>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </FloatingMenu>
    </>
  );
};

export default MainMenu;
