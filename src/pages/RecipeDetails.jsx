import { useParams, Link } from "react-router";

function RecipeDetails({ recipes, onToggleFavourite }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="details-container">
        <h2>Recipe not found</h2>
        <Link to="/recipes" className="btn-details">
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  const isVeg = recipe.type === "Veg";
  const ingredients = recipe.ingredients || [];

  return (
    <div className="details-container">
      <Link to="/recipes" className="back-link">
        ← Back to Recipes
      </Link>

      <div className="details-header">
        <span className="emoji-large">{recipe.emoji}</span>
        <div>
          <h1>{recipe.name}</h1>
          <div className="badges">
            <span className={`badge ${isVeg ? "badge-veg" : "badge-nonveg"}`}>
              {isVeg ? "Veg" : "Non-Veg"}
            </span>
            {recipe.cookingTime <= 20 && (
              <span className="badge badge-quick">Quick</span>
            )}
          </div>
        </div>
      </div>

      <div className="details-meta">
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p>
          <strong>Cooking Time:</strong> {recipe.cookingTime} min
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
      </div>

      {recipe.description && <p className="description">{recipe.description}</p>}

      <div className="ingredients-section">
        <h3>Ingredients ({ingredients.length} ingredients)</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {recipe.instructions && (
        <div className="instructions-section">
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      )}

      <button
        className={`btn-fav ${recipe.isFavourite ? "active" : ""}`}
        onClick={() => onToggleFavourite(recipe.id)}
      >
        {recipe.isFavourite
          ? "❤ Remove from Favourites"
          : "♡ Add to Favourites"}
      </button>
    </div>
  );
}

export default RecipeDetails;