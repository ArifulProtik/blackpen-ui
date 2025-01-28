'use client';
import Editor from '@/components/editor/Editor';

const page = () => {
  return (
    <>
      <title>Write - Blackpen</title>
      <div className="container flex flex-row-reverse gap-4 py-6">
        <Editor />
      </div>
    </>
  );
};

export default page;
