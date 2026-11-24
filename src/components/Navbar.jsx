import { Link, NavLink } from "react-router";

function Navbar({ favouriteCount }) {
  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          <span className="logo-icon">🍳</span>
          <span className="logo-text">RecipeBook</span>
        </Link>

        <nav className="nav-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          >
            All Recipes
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          >
            Favourites
            {favouriteCount > 0 && (
              <span className="badge-count">{favouriteCount}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
