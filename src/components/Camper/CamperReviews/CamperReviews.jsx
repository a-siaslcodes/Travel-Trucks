import css from "./CamperReviews.module.css";
import specs from "../../../assets/specs.svg";

const CamperReviews = ({ camper }) => {
  // const results = camper.reviews.map((item) => {
  //   const name = item.reviewer_name;
  //   const rate = item.reviewer_rating;
  //   const comment = item.comment;
  //   console.log(name);
  //   console.log(rate);
  //   console.log(comment);
  // });

  const maxRating = 5;

  return (
    <div className={css.wrapper}>
      <ul className={css.listWrapper}>
        {camper.reviews.map((item, index) => (
          <li key={index}>
            <div className={css.header}>
              <p className={css.icon}>{item.reviewer_name[0]}</p>
              <span className={css.headerList}>
                <p className={css.name}>{item.reviewer_name}</p>
                <div>
                  {Array.from({ length: maxRating }, (_, index) => {
                    const iconType =
                      index < item.reviewer_rating ? "star-pressed" : "star";
                    return (
                      <svg key={index} width={16} height={16}>
                        <use href={`${specs}#icon-${iconType}`}></use>
                      </svg>
                    );
                  })}
                </div>
              </span>
            </div>

            <p className={css.comment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
