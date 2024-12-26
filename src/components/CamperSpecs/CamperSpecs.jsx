import css from "./CamperSpecs.module.css";
import specs from "../../assets/specs.svg";

const CamperSpecs = ({ camper }) => {
  return (
    <ul className={css.specsBox}>
      {camper.transmission && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-transmission`}></use>
          </svg>
          {camper.transmission}
        </li>
      )}
      {camper.engine && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-engine`}></use>
          </svg>
          {camper.engine}
        </li>
      )}
      {camper.AC && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-AC`}></use>
          </svg>
          AC
        </li>
      )}
      {camper.kitchen && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-kitchen`}></use>
          </svg>
          Kitchen
        </li>
      )}
      {camper.TV && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-tv`}></use>
          </svg>
          TV
        </li>
      )}
      {camper.bathroom && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-bathroom`}></use>
          </svg>
          Bathroom
        </li>
      )}

      {camper.radio && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-radio`}></use>
          </svg>
          Radio
        </li>
      )}

      {camper.refrigerator && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-refrigerator`}></use>
          </svg>
          Refrigerator
        </li>
      )}
      {camper.microwave && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-microwave`}></use>
          </svg>
          Microwave
        </li>
      )}
      {camper.gas && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-gas`}></use>
          </svg>
          Gas
        </li>
      )}
      {camper.water && (
        <li className={css.specsItem}>
          <svg className={css.specsIcon} width={20} height={20}>
            <use href={`${specs}#icon-water`}></use>
          </svg>
          Water
        </li>
      )}
    </ul>
  );
};

export default CamperSpecs;
