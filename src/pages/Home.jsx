import { Link } from "react-router";

function Home({ recipes }) {
  const totalRecipes = recipes.length;
  const vegRecipes = recipes.filter((r) => r.type === "Veg").length;
  const favouriteRecipes = recipes.filter((r) => r.isFavourite).length;

  return (
    <div className="home">
      <h1>Recipe Book</h1>
      <p className="intro">
        Browse recipes by cuisine, cooking time, and dietary type, and save your
        favourites for quick access.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{totalRecipes}</h2>
          <p>Total Recipes</p>
        </div>
        <div className="stat-card">
          <h2>{vegRecipes}</h2>
          <p>Veg Recipes</p>
        </div>
        <div className="stat-card">
          <h2>{favouriteRecipes}</h2>
          <p>Favourite Recipes</p>
        </div>
      </div>

      <Link to="/recipes" className="btn-primary">
        Explore Recipes
      </Link>
    </div>
  );
}

export default Home;