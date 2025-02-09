import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import ImageUploader from './ImageUploader';
import MainMenu from './MainMenu';
import TitileInput from './TitileInput';
import ToolTipMenu from './ToolTipMenu';
import {
  CodeBlockLowLight,
  fmenu,
  ImageExtention,
  link,
  placeholder,
  TrailingNode,
} from './extensions';

const Editor = () => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      placeholder,
      CodeBlockLowLight,
      link,
      fmenu,
      ImageExtention,
      TrailingNode,
    ],
  });

  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log(imgUrl);
    console.log(title);
  }, [imgUrl, title]);

  const handleImageUpload = (url: string | null) => {
    setImgUrl(url);
  };

  const handleTitleChange = (newValue: string) => {
    setTitle(newValue);
  };

  useEffect(() => {
    const updatePosition = () => editor?.view?.updateState(editor.view.state);
    window.addEventListener('scroll', updatePosition, true);
    return () => window.removeEventListener('scroll', updatePosition, true);
  }, [editor]);

  return (
    <>
      <div className="prose mx-auto flex flex-1 flex-col">
        <div className="mb-6 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://github.com/shadcn.pnsdg"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="font-medium">ArifulProtik</div>
          </div>
          <Button>Publish</Button>
        </div>
        <TitileInput value={title} onChange={handleTitleChange} />
        <ImageUploader onImageUpload={handleImageUpload} />

        {editor && (
          <>
            <MainMenu editor={editor} />
            <ToolTipMenu editor={editor} />
          </>
        )}

        <EditorContent
          editor={editor}
          className="min-h-screen w-full py-4 outline-none"
        />
      </div>
    </>
  );
};

export default Editor;
