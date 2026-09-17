import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeLink = "text-white font-bold";
  const inactiveLink =
    "text-gray-300 font-normal hover:text-white transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
     
        <NavLink
          to="/"
          end
          className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white tracking-wide hover:opacity-80 transition-opacity"
        >
          <img 
            src="/logo.png" 
            alt="MovieRadar" 
            className="w-8 h-8 object-contain" 
          />
          <span>MovieRadar</span>
        </NavLink>

       
        <div className="flex items-center gap-4 sm:gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm sm:text-base ${isActive ? activeLink : inactiveLink}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="bg-accent hover:bg-accent-hover text-background px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors"
          >
            Explore Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
