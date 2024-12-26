import css from "./TabComponent.module.css";

const TabComponent = ({ isActiveTab, setIsActiveTab }) => {
  return (
    <div className={css.tabsWrapper}>
      <button
        onClick={() => setIsActiveTab({ feature: true, reviews: false })}
        className={`${css.tabButton} ${isActiveTab.feature ? css.active : ""}`}
      >
        Features
      </button>
      <button
        onClick={() => setIsActiveTab({ feature: false, reviews: true })}
        className={`${css.tabButton} ${isActiveTab.reviews ? css.active : ""}`}
      >
        Reviews
      </button>
    </div>
  );
};

export default TabComponent;
