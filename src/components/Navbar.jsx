import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/movies?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const activeLink = "text-white font-bold";
  const inactiveLink = "text-gray-300 font-normal hover:text-white";

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-6">
        {/* Logo */}
        <NavLink
          to="/"
          end
          className="text-base sm:text-xl font-bold text-white whitespace-nowrap"
        >
          MovieRadar
        </NavLink>

        {/* Search bar */}
        <form onSubmit={handleSubmit} className="flex-1 min-w-0">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="w-full bg-background border border-border text-black text-sm sm:text-base rounded-md px-3 py-1.5 sm:py-2 placeholder-gray-500 focus:outline-none focus:border-accent transition"
          />
        </form>

        {/* Links */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hidden sm:inline text-sm sm:text-base transition ${isActive ? activeLink : inactiveLink}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `bg-accent hover:bg-accent-hover text-background px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base transition whitespace-nowrap ${isActive ? "font-bold" : "font-normal"}`
            }
          >
            Explore Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
