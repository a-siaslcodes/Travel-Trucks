import css from "./SubInfo.module.css";
import specs from "../../../assets/specs.svg";

const SubInfo = ({ camper }) => {
  return (
    <div className={css.subInfoBox}>
      <p className={css.wrapper}>
        <svg className={css.specsIcon} width={16} height={16}>
          <use href={`${specs}#icon-star-pressed`}></use>
        </svg>
        {camper.rating}
      </p>
      <p className={css.reviews}>({camper.reviews.length} Reviews)</p>
      <p className={css.wrapper}>
        <svg className={css.specsIcon} width={16} height={16}>
          <use href={`${specs}#icon-map`}></use>
        </svg>
        {camper.location}
      </p>
    </div>
  );
};

export default SubInfo;
