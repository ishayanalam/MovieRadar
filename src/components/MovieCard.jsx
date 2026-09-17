import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieModal from "../components/MovieModal.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function MovieListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        if (!searchQuery.trim()) {
          const response = await fetch("https://api.tvmaze.com/shows");
          const data = await response.json();
          setMovies(data.slice(0, 5));
          return;
        }

        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchQuery}`,
        );
        const data = await response.json();

        const results = data.map((item) => item.show);
        setMovies(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 relative">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {!searchQuery && !isLoading && (
        <p className="text-center text-accent text-lg mt-8 font-semibold">
          Here are a few quick picks. Type in the search bar above to find your
          favorites!
        </p>
      )}

      {isLoading ? (
        <p className="text-center text-gray-400 mt-10">Loading movies...</p>
      ) : movies.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          Hmm, no movies match that. Try a different title?
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}
