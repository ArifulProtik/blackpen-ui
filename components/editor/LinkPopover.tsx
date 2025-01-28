'use client';

import { Editor } from '@tiptap/react';
import { useEffect, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LinkPopoverProps {
  editor: Editor;
  children: React.ReactNode;
}

const LinkPopover = ({ editor, children }: LinkPopoverProps) => {
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && editor.isActive('link')) {
      setUrl(editor.getAttributes('link').href);
    } else {
      setUrl('');
    }
  }, [open, editor]);

  const handleSubmit = () => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      e.stopPropagation(); // Prevent event bubbling to editor
      handleSubmit();
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>

      <PopoverContent
        align="start"
        side="top"
        sideOffset={8}
        className="w-80 rounded border bg-background p-2 shadow-lg"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Input
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown} // Updated key handler
              className="h-8 flex-1 px-2 py-1 text-sm"
              autoFocus
            />
            <Button onClick={handleSubmit} size="sm" className="h-8 px-3">
              Apply
            </Button>
          </div>

          {/* ... rest of the component ... */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LinkPopover;
