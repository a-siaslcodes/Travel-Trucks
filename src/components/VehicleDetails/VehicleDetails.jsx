import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ camper }) => {
  const formatString = (str) => {
    if (!str) return "";
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (char) => char.toUpperCase());
  };

  return (
    <>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Form</span>
          <span>{formatString(camper.form)}</span>
        </li>
        <li className={css.listItem}>
          <span>Length</span>
          <span> {camper.length}</span>
        </li>
        <li className={css.listItem}>
          <span>Width</span>
          <span> {camper.width}</span>
        </li>
        <li className={css.listItem}>
          <span>Height</span>
          <span> {camper.height}</span>
        </li>
        <li className={css.listItem}>
          <span>Tank</span>
          <span> {camper.tank}</span>
        </li>
        <li className={css.listItem}>
          <span>Consumption</span>
          <span> {camper.consumption}</span>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
