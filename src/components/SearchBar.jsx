import { Search } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
          className="w-full py-3 pl-12 pr-4 bg-surface border border-border rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
        />
      </div>
    </div>
  );
}
