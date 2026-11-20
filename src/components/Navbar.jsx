import { Link } from "react-router";

function Navbar({ favouriteCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        📖 Recipe Book
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favourites">Favourites ({favouriteCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;