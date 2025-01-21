'use client';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div className="container flex flex-row-reverse gap-4 py-6">
      <div className="flex w-56 flex-col gap-3">
        <div className="flex flex-row justify-between gap-2 py-2">
          <Button className="border border-primary bg-white text-primary hover:bg-muted">
            Save as Draft
          </Button>
          <Button>Publish</Button>
        </div>
      </div>
      <div className="prose mx-auto flex flex-1 flex-col">
        <textarea
          placeholder="Write your stunning title here..."
          rows={1}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              const target = e.target as HTMLTextAreaElement;
              target.blur();
            }
          }}
          className="h-auto w-full resize-none border-none bg-inherit px-2 py-2 font-inter text-2xl font-semibold outline-none"
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto'; // Reset height to auto for proper resizing
            target.style.height = `${target.scrollHeight}px`; // Adjust height based on scrollHeight
          }}
        />
      </div>
    </div>
  );
};

export default page;
