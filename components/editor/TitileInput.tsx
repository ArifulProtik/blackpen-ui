/* eslint-disable no-unused-vars */
type TitleInputProps = {
  value: string;
  onChange: (value: string) => void;
};
const TitileInput = ({ value, onChange }: TitleInputProps) => {
  return (
    <textarea
      placeholder="Write your stunning title here..."
      spellCheck="false"
      rows={1}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          const target = e.target as HTMLTextAreaElement;
          target.blur();
        }
      }}
      className="prose-gray my-2 h-auto w-full resize-none border-none bg-inherit py-1 text-justify text-3xl font-semibold outline-none placeholder:font-normal"
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = 'auto'; // Reset height to auto for proper resizing
        target.style.height = `${target.scrollHeight}px`; // Adjust height based on scrollHeight
      }}
    />
  );
};

export default TitileInput;
