import { Link } from "react-router";

function RecipeCard({ recipe, onToggleFavourite }) {
  return (
    <article className="recipe-card">
      <div className="card-media">
        <span className="recipe-icon" role="img" aria-label={recipe.name}>
          {recipe.emoji}
        </span>
        <div className="pill-group">
          <span className={`tag-pill ${recipe.type === "Veg" ? "is-veg" : "is-nonveg"}`}>
            {recipe.type}
          </span>
          {recipe.cookingTime <= 20 && (
            <span className="tag-pill is-quick">⚡ Fast</span>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3 className="recipe-heading">{recipe.name}</h3>

        <ul className="recipe-meta-list">
          <li>
            <span className="meta-label">Cuisine:</span> {recipe.cuisine}
          </li>
          <li>
            <span className="meta-label">Time:</span> {recipe.cookingTime} mins
          </li>
          <li>
            <span className="meta-label">Difficulty:</span> {recipe.difficulty}
          </li>
        </ul>
      </div>

      <div className="card-footer">
        <button
          type="button"
          className={`favourite-btn ${recipe.isFavourite ? "is-active" : ""}`}
          onClick={() => onToggleFavourite(recipe.id)}
          aria-label={recipe.isFavourite ? "Remove from favourites" : "Save to favourites"}
        >
          {recipe.isFavourite ? "Saved" : "Save"}
        </button>

        <Link to={`/recipes/${recipe.id}`} className="details-link">
          View Recipe
        </Link>
      </div>
    </article>
  );
}

export default RecipeCard;
