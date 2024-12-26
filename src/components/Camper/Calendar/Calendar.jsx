import css from "./Calendar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ value, onChange }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <DatePicker
      className={css.input}
      selected={value}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date*"
    />
  );
};

export default Calendar;
