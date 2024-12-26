import css from "./Filters.module.css";
import specs from "../../../assets/specs.svg";

const equipmentOptions = [
  { value: "AC", icon: "icon-AC", label: "AC" },
  { value: "transmission", icon: "icon-automatic", label: "Automatic" },
  { value: "kitchen", icon: "icon-kitchen", label: "Kitchen" },
  { value: "TV", icon: "icon-tv", label: "TV" },
  { value: "bathroom", icon: "icon-bathroom", label: "Bathroom" },
];

const formOptions = [
  { value: "panelTruck", icon: "icon-van", label: "Van" },
  {
    value: "fullyIntegrated",
    icon: "icon-fully-integrated",
    label: "Fully integrated",
  },
  { value: "alcove", icon: "icon-alcove", label: "Alcove" },
];

const Filters = ({ values, onChange }) => {
  const handleEquipmentChange = (event) => {
    onChange(event);
  };

  const handleFormChange = (event) => {
    onChange(event);
  };

  return (
    <div className={css.filtersWrapper}>
      <div className={css.equipmentBox}>
        <h2 className={css.filterTitle}>Vehicle Equipment</h2>
        <hr className={css.devider} />
        <ul className={css.filterList}>
          {equipmentOptions.map(({ value, icon, label }) => (
            <li key={value}>
              <label className={css.filterItem}>
                <input
                  className={css.checkbox}
                  type="checkbox"
                  name="equipment"
                  value={value}
                  checked={values.equipment[value] || false}
                  onChange={handleEquipmentChange}
                />
                <div className={css.checkboxCustom}>
                  <svg className={css.icon} width={32} height={32}>
                    <use href={`${specs}#${icon}`} />
                  </svg>
                  <p className={css.checkboxText}>{label}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className={css.filterTitle}>Vehicle Type</h2>
        <hr className={css.devider} />
        <ul className={css.filterList}>
          {formOptions.map(({ value, icon, label }) => (
            <li key={value}>
              <label className={css.filterItem}>
                <input
                  className={css.checkbox}
                  type="radio"
                  name="form"
                  value={value}
                  checked={values.form === value}
                  onChange={handleFormChange}
                />
                <div className={css.checkboxCustom}>
                  <svg className={css.icon} width={32} height={32}>
                    <use href={`${specs}#${icon}`} />
                  </svg>
                  <p className={css.checkboxText}>{label}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
