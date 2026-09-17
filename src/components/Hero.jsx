import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-background text-white py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-surface border border-border rounded-3xl p-10 md:p-16 text-center shadow-lg">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-border bg-background text-sm font-semibold text-gray-300">
          Your Ultimate Movie Hub
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Next <br className="hidden md:block" /> Favorite Movie
        </h1>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Explore a world of endless entertainment. Find blockbusters, hidden
          gems, and timeless classics.
        </p>

        <Link
          to="/movies"
          className="inline-block px-8 py-3 bg-accent text-background font-bold rounded-full hover:bg-accent-hover transition-colors shadow-md"
        >
          Explore Now →
        </Link>
      </div>
    </section>
  );
}
