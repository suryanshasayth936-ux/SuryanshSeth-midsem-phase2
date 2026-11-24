import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipes, onToggleFavourite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const normalizedQuery = searchTerm.trim().toLowerCase();

  const visibleRecipes = recipes
    .filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.cuisine.toLowerCase().includes(normalizedQuery);

      const matchDiet =
        selectedDiet === "All" || item.type === selectedDiet;

      return matchSearch && matchDiet;
    })
    .sort((first, second) => {
      if (sortOrder === "asc") {
        return first.cookingTime - second.cookingTime;
      }
      if (sortOrder === "desc") {
        return second.cookingTime - first.cookingTime;
      }
      return 0;
    });

  function handleResetFilters() {
    setSearchTerm("");
    setSelectedDiet("All");
    setSortOrder("none");
  }

  return (
    <div className="recipes-view">
      <div className="view-heading-row">
        <div>
          <h2>Browse Recipes</h2>
          <p className="subtext">
            Showing {visibleRecipes.length} of {recipes.length} recipes
          </p>
        </div>
      </div>

      <div className="toolbar">
        <input
          type="search"
          className="search-field"
          placeholder="Search by recipe name or cuisine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="select-row">
          <select
            className="filter-dropdown"
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
          >
            <option value="All">All Diets</option>
            <option value="Veg">Vegetarian</option>
            <option value="Non-Veg">Non-Vegetarian</option>
          </select>

          <select
            className="filter-dropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Cooking Time</option>
            <option value="asc">Fastest first (Low to High)</option>
            <option value="desc">Longest first (High to Low)</option>
          </select>
        </div>
      </div>

      {visibleRecipes.length === 0 ? (
        <div className="empty-state">
          <p>No recipes match your current search or filters.</p>
          <button
            type="button"
            className="reset-btn"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="recipe-grid">
          {visibleRecipes.map((recipe) => (
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

export default Recipes;
