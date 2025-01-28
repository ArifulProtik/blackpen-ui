// hooks/use-file-upload.ts
import { useState } from 'react';

type UploadState = {
  isUploading: boolean;
  error: string | null;
  imgUrl: string | null;
};

export const useFileUpload = () => {
  const [state, setState] = useState<UploadState>({
    isUploading: false,
    error: null,
    imgUrl: null,
  });

  const uploadFile = async (file: File) => {
    setState({
      isUploading: true,
      error: null,
      imgUrl: null,
    });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();

      setState({
        isUploading: false,
        error: null,
        imgUrl: data.imgUrl,
      });
    } catch (error) {
      setState({
        isUploading: false,
        error: error instanceof Error ? error.message : 'Upload failed',
        imgUrl: null,
      });
    }
  };

  const resetUpload = () => {
    setState({
      isUploading: false,
      error: null,
      imgUrl: null,
    });
  };

  return { ...state, uploadFile, resetUpload };
};
