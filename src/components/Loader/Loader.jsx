import css from "./Loader.module.css";
import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <div className={css.container}>
      <img src={loader} alt="Loading..." className={css.loader} />
    </div>
  );
};

export default Loader;
