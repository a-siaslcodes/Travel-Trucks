import css from "./CamperFeatures.module.css";
import CamperSpecs from "../../CamperSpecs/CamperSpecs";
import VehicleDetails from "../../VehicleDetails/VehicleDetails";

const CamperFeatures = ({ camper }) => {
  console.log(camper);
  if (!camper) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.wrapper}>
      <div>
        <CamperSpecs camper={camper} />
      </div>

      <div className={css.box}>
        <h2 className={css.title}>Vehicle details</h2>
        <hr className={css.devider} />
        <VehicleDetails camper={camper} />
      </div>
    </div>
  );
};

export default CamperFeatures;
