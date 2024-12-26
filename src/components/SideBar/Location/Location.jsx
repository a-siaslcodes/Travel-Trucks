import css from "./Location.module.css";
import specs from "../../../assets/specs.svg";

const Location = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.title}>Location</span>
      <div className={css.inputContainer}>
        <svg className={css.mapIcon} width={16} height={16}>
          <use href={`${specs}#icon-map`}></use>
        </svg>
        <input
          className={css.input}
          type="text"
          name="location"
          value={value}
          onChange={onChange}
          placeholder="City, Ukraine"
        />
      </div>
    </div>
  );
};

export default Location;
