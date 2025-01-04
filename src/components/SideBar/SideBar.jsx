import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../../redux/filtersSlice";
import css from "./SideBar.module.css";
import Location from "./Location/Location";
import Filters from "./Filters/Filters";

const SideBar = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    location: "",
    equipment: {},
    form: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormValues((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          [value]: checked,
        },
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const location = formValues.location.trim();

    const equipment = Object.keys(formValues.equipment).reduce((acc, key) => {
      if (formValues.equipment[key]) {
        acc[key] = true;
      }
      return acc;
    }, {});

    if (formValues.equipment.transmission) {
      equipment.transmission = "automatic";
    }

    const filters = {
      location,
      ...equipment,
      ...(formValues.form && { form: formValues.form }),
    };

    dispatch(clearFilter());
    dispatch(setFilter(filters));

    setFormValues({
      location: "",
      equipment: {},
      form: "",
    });
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <Location value={formValues.location} onChange={handleInputChange} />

        <Filters values={formValues} onChange={handleInputChange} />

        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SideBar;
