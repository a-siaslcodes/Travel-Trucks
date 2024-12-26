import css from "./FavoritePage.module.css";
import { useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import { selectFavorites } from "../../redux/favoritesSlice";
import { selectCampers } from "../../redux/selectors";
import Container from "../../components/Container/Container";

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <div className={css.wrapper}>
        {favorites.length > 0 ? (
          <CatalogList campers={favorites} />
        ) : (
          <div className={css.text}>No campers added</div>
        )}
      </div>
    </Container>
  );
};

export default FavoritePage;
