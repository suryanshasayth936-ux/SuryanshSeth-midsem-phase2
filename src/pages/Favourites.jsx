import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";

function Favourites({ recipes, onToggleFavourite }) {
  const favourites = recipes.filter((item) => item.isFavourite);

  const totalCookingMinutes = favourites.reduce(
    (accum, item) => accum + item.cookingTime,
    0
  );

  return (
    <div className="favourites-view">
      <div className="view-heading-row">
        <div>
          <h2>My Saved Favourites</h2>
          {favourites.length > 0 && (
            <p className="subtext">
              {favourites.length} {favourites.length === 1 ? "recipe" : "recipes"} saved
              • Total cooking time: <strong>{totalCookingMinutes} mins</strong>
            </p>
          )}
        </div>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state-large">
          <span className="empty-illustration">📌</span>
          <h3>No favourite recipes saved yet</h3>
          <p>
            Whenever you see a dish you like, click the "Save" button on its card to
            bookmark it right here.
          </p>
          <Link to="/recipes" className="action-button primary">
            Browse All Recipes
          </Link>
        </div>
      ) : (
        <div className="recipe-grid">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
