import { useParams, Link } from "react-router";

function RecipeDetails({ recipes, onToggleFavourite }) {
  const { id } = useParams();
  const currentRecipe = recipes.find((item) => String(item.id) === String(id));

  if (!currentRecipe) {
    return (
      <div className="missing-recipe-card">
        <h2>Recipe Not Found</h2>
        <p>Sorry, we could not locate any recipe with this identifier.</p>
        <Link to="/recipes" className="action-button secondary">
          ← Back to All Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="details-view">
      <Link to="/recipes" className="navigation-back-link">
        ← Back to Recipes
      </Link>

      <div className="details-hero-panel">
        <div className="hero-emoji-wrap">
          <span className="hero-emoji">{currentRecipe.emoji}</span>
        </div>

        <div className="hero-content">
          <div className="pill-group">
            <span
              className={`tag-pill ${
                currentRecipe.type === "Veg" ? "is-veg" : "is-nonveg"
              }`}
            >
              {currentRecipe.type}
            </span>
            {currentRecipe.cookingTime <= 20 && (
              <span className="tag-pill is-quick">⚡ Fast</span>
            )}
          </div>

          <h1 className="hero-recipe-name">{currentRecipe.name}</h1>
          {currentRecipe.description && (
            <p className="hero-recipe-desc">{currentRecipe.description}</p>
          )}
        </div>
      </div>

      <div className="specs-strip">
        <div className="spec-item">
          <span className="spec-title">Cuisine</span>
          <span className="spec-detail">{currentRecipe.cuisine}</span>
        </div>
        <div className="spec-item">
          <span className="spec-title">Cooking Time</span>
          <span className="spec-detail">{currentRecipe.cookingTime} mins</span>
        </div>
        <div className="spec-item">
          <span className="spec-title">Difficulty</span>
          <span className="spec-detail">{currentRecipe.difficulty}</span>
        </div>
      </div>

      <div className="recipe-guide-grid">
        <section className="guide-card">
          <h3 className="guide-heading">
            Ingredients ({currentRecipe.ingredients?.length || 0})
          </h3>
          <ul className="ingredient-items">
            {(currentRecipe.ingredients || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {currentRecipe.instructions && (
          <section className="guide-card">
            <h3 className="guide-heading">Preparation Instructions</h3>
            <p className="instruction-paragraph">{currentRecipe.instructions}</p>
          </section>
        )}
      </div>

      <div className="details-bottom-bar">
        <button
          type="button"
          className={`favourite-btn large ${
            currentRecipe.isFavourite ? "is-active" : ""
          }`}
          onClick={() => onToggleFavourite(currentRecipe.id)}
        >
          {currentRecipe.isFavourite
            ? "❤️ Remove from Favourites"
            : "🤍 Save to Favourites"}
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;
