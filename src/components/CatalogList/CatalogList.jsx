import css from "./CatalogList.module.css";
import Camper from "../Camper/Camper";

const CatalogList = ({ campers }) => {
  return (
    <>
      <ul className={css.campersList}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogList;
