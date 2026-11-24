import { Link } from "react-router";

function Home({ recipes }) {
  const total = recipes.length;
  const vegCount = recipes.filter((item) => item.type === "Veg").length;
  const favCount = recipes.filter((item) => item.isFavourite).length;

  return (
    <div className="home-view">
      <section className="welcome-banner">
        <h1 className="banner-title">Delicious Recipes Made Simple</h1>
        <p className="banner-text">
          Explore quick weeknight dinners, authentic traditional dishes, and your
          own curated collection of favourite meals.
        </p>
        <div className="banner-actions">
          <Link to="/recipes" className="action-button primary">
            Explore All Recipes
          </Link>
          <Link to="/favourites" className="action-button secondary">
            View Favourites ({favCount})
          </Link>
        </div>
      </section>

      <section className="stats-section">
        <h2 className="section-title">At a Glance</h2>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <span className="card-digit">{total}</span>
            <span className="card-title">Available Recipes</span>
          </div>

          <div className="dashboard-card">
            <span className="card-digit">{vegCount}</span>
            <span className="card-title">Vegetarian Dishes</span>
          </div>

          <div className="dashboard-card">
            <span className="card-digit">{total - vegCount}</span>
            <span className="card-title">Non-Veg Dishes</span>
          </div>

          <div className="dashboard-card">
            <span className="card-digit">{favCount}</span>
            <span className="card-title">Saved in Favourites</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
