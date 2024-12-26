import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
