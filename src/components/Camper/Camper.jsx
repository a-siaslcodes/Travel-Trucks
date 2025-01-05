import css from "./Camper.module.css";
import CamperSpecs from "../CamperSpecs/CamperSpecs";
import specs from "../../assets/specs.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoritesSlice";
import { addFavorite } from "../../redux/favoritesSlice";
import SubInfo from "./SubInfo/SubInfo";

const Camper = ({ camper }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isActive = favorites.some((favorite) => favorite.id === camper.id);

  const handleFavoriteClick = () => {
    dispatch(addFavorite(camper));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imgBox}>
        {camper.gallery && camper.gallery.length > 0 ? (
          <img
            src={camper.gallery[0].thumb}
            alt={`Image of ${camper.name}`}
            width={292}
            height={320}
            className={css.camperImg}
          />
        ) : (
          <p>No Image</p>
        )}
      </div>

      <div className={css.infoBox}>
        <div className={css.header}>
          <h2 className={css.name}>{camper.name}</h2>
          <div className={css.priceBox}>
            <span className={css.price}>{`€${parseFloat(camper.price).toFixed(
              2
            )}`}</span>
            <button
              type="button"
              className={`${css.likeButton} ${isActive ? css.active : ""}`}
              onClick={handleFavoriteClick}
            >
              <svg className={css.specsIcon} width={26} height={24}>
                <use href={`${specs}#icon-favorite`}></use>
              </svg>
            </button>
          </div>
        </div>

        <SubInfo camper={camper} />

        <p className={css.description}>{camper.description}</p>

        <CamperSpecs camper={camper} />
        <Link className={css.button} to={`/catalog/${camper.id}`}>
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Camper;
