/* eslint-disable no-unused-vars */
import { useFileUpload } from '@/hooks/useUploader';
import { ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef } from 'react';
import { Input } from '../ui/input';
type ImageUploaderProps = {
  onImageUpload: (url: string | null) => void;
};

const ImageUploader = ({ onImageUpload }: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isUploading, error, imgUrl, uploadFile, resetUpload } =
    useFileUpload();

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await uploadFile(file);
    }
  };

  useEffect(() => {
    if (!isUploading && imgUrl) {
      onImageUpload(imgUrl);
    }
  }, [isUploading, imgUrl, onImageUpload]);

  const handleDeleteImage = () => {
    resetUpload();
    onImageUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="h-auto space-y-2">
      <Input
        id="featured-image"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        className="hidden"
        disabled={isUploading}
      />

      {imgUrl ? (
        <div className="group relative inline-block">
          <Image
            src={imgUrl}
            alt="Featured image"
            width={10000000000}
            height={500}
            className="z-50 my-0 aspect-video h-full w-full rounded-md object-cover py-0 group-hover:brightness-50"
          />
          <button
            className="absolute right-4 top-4 text-white hover:text-destructive"
            onClick={handleDeleteImage}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      ) : (
        <div
          className={`relative cursor-pointer rounded-md border p-12 text-center transition-colors ${
            isUploading ? 'opacity-50' : 'hover:border-gray-400'
          }`}
          onClick={() => !isUploading && fileInputRef.current?.click()}
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-400 border-t-transparent" />
              <p className="mt-2 text-xs text-gray-500">Uploading...</p>
            </div>
          ) : (
            <>
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="text-xs text-gray-500">
                Upload feature image for better reach
              </p>
            </>
          )}
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ImageUploader;
