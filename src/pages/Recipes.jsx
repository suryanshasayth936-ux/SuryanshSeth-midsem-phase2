import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes({ recipes, onToggleFavourite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = typeFilter === "All" || recipe.type === typeFilter;

    return matchesSearch && matchesType;
  });

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortOrder === "low-high") return a.cookingTime - b.cookingTime;
    if (sortOrder === "high-low") return b.cookingTime - a.cookingTime;
    return 0;
  });

  return (
    <div>
      <h1>All Recipes</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or cuisine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by Cooking Time</option>
          <option value="low-high">Cooking Time: Low → High</option>
          <option value="high-low">Cooking Time: High → Low</option>
        </select>
      </div>

      {sortedRecipes.length === 0 ? (
        <p className="empty-msg">No recipes match your search or filter.</p>
      ) : (
        <div className="card-grid">
          {sortedRecipes.map((recipe) => (
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