import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="rounded text-muted-foreground px-4 py-1 w-full md:w-64 bg-muted focus-visible:outline-none"
      />
      <Search
        className="absolute text-muted-foreground top-1/2 -translate-y-1/2 right-2"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
