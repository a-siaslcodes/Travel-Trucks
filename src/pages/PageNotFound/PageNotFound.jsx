import css from "./PageNotFound.module.css";
import notFoundImage from "../../assets/img/not-found.png";

const PageNotFound = () => {
  return (
    <div className={css.wrapper}>
      <img
        src={notFoundImage}
        alt="Error logo"
        className={css.img}
        width={310}
        height={280}
      />
      <p className={css.error}>Page not found! </p>
    </div>
  );
};

export default PageNotFound;
