import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import initialRecipes from "./data/recipes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  function handleToggleFavourite(recipeId) {
    setRecipes((currentList) =>
      currentList.map((item) =>
        item.id === recipeId
          ? { ...item, isFavourite: !item.isFavourite }
          : item
      )
    );
  }

  const favouriteCount = recipes.filter((item) => item.isFavourite).length;

  return (
    <BrowserRouter>
      <Navbar favouriteCount={favouriteCount} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                onToggleFavourite={handleToggleFavourite}
              />
            }
          />
          <Route
            path="/recipes/:id"
            element={
              <RecipeDetails
                recipes={recipes}
                onToggleFavourite={handleToggleFavourite}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                recipes={recipes}
                onToggleFavourite={handleToggleFavourite}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
