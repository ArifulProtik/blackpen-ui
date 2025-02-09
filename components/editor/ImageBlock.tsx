import { useFileUpload } from '@/hooks/useUploader';
import { Editor } from '@tiptap/react';
import { ChangeEvent, useEffect, useRef } from 'react';

interface ImageUploaderProps {
  editor: Editor;
  onTriggerUpload: () => void;
}

export const useImageUploader = ({ editor }: { editor: Editor }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadFile, imgUrl, isUploading, resetUpload } = useFileUpload();
  const imagePositionRef = useRef<number | null>(0);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
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

  const triggerImageUpload = () => fileInputRef.current?.click();

  return {
    fileInputRef,
    handleImageUpload,
    triggerImageUpload,
  };
};

export const ImageUploader = ({
  editor,
  onTriggerUpload,
}: ImageUploaderProps) => {
  const { fileInputRef, handleImageUpload } = useImageUploader({ editor });

  return (
    <input
      type="file"
      ref={fileInputRef}
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden"
    />
  );
};
