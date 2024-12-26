import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../../redux/filtersSlice";
import { fetchCampers } from "../../redux/operations";
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

    // Оновлення для чекбоксів (equipment)
    if (type === "checkbox") {
      setFormValues((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          [value]: checked, // Додаємо/оновлюємо ключ зі значенням true/false
        },
      }));
    } else {
      // Для текстових полів та radio
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Обробка відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();

    const location = formValues.location.trim();

    // Перетворення equipment об'єкта у формат { AC: true, TV: true }
    const equipment = Object.keys(formValues.equipment).reduce((acc, key) => {
      if (formValues.equipment[key]) {
        acc[key] = true;
      }
      return acc;
    }, {});

    // Спеціальна обробка transmission для automatic
    if (formValues.equipment.transmission) {
      equipment.transmission = "automatic";
    }

    // Підготовка об'єкта для фільтрації
    const filters = {
      location,
      ...equipment,
      ...(formValues.form && { form: formValues.form }),
    };

    // Відправка фільтрів у Redux
    dispatch(clearFilter());
    dispatch(setFilter(filters));
    dispatch(fetchCampers(filters));

    // Скидаємо стан форми
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default SideBar;
