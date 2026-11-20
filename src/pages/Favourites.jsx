import RecipeCard from "../components/RecipeCard";

function Favourites({ recipes, onToggleFavourite }) {
  const favouriteRecipes = recipes.filter((r) => r.isFavourite);

  const totalCookingTime = favouriteRecipes.reduce(
    (sum, recipe) => sum + recipe.cookingTime,
    0
  );

  return (
    <div>
      <h1>Favourite Recipes</h1>

      {favouriteRecipes.length === 0 ? (
        <p className="empty-msg">No favourites yet</p>
      ) : (
        <>
          <p className="total-time">
            <strong>Total Cooking Time:</strong> {totalCookingTime} min
          </p>
          <div className="card-grid">
            {favouriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onToggleFavourite={onToggleFavourite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;