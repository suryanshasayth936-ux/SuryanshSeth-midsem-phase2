import { Link } from "react-router";

function RecipeCard({ recipe, onToggleFavourite }) {
  const isVeg = recipe.type === "Veg";

  return (
    <div className="card">
      <div className="card-header">
        <span className="emoji">{recipe.emoji}</span>
        <div className="badges">
          <span className={`badge ${isVeg ? "badge-veg" : "badge-nonveg"}`}>
            {isVeg ? "Veg" : "Non-Veg"}
          </span>
          {recipe.cookingTime <= 20 && (
            <span className="badge badge-quick">Quick</span>
          )}
        </div>
      </div>

      <h3>{recipe.name}</h3>
      <p className="meta">
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p className="meta">
        <strong>Cooking Time:</strong> {recipe.cookingTime} min
      </p>
      <p className="meta">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>

      <div className="card-actions">
        <button
          className={`btn-fav ${recipe.isFavourite ? "active" : ""}`}
          onClick={() => onToggleFavourite(recipe.id)}
        >
          {recipe.isFavourite
            ? "❤ Remove from Favourites"
            : "♡ Add to Favourites"}
        </button>
        <Link to={`/recipes/${recipe.id}`} className="btn-details">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;