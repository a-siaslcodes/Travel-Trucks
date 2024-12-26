import css from "./CamperForm.module.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import Calendar from "../Calendar/Calendar";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast("Thank you, we will get in touch with you shortly!", {
    duration: 1500,
    position: "top-right",
    icon: "👏",
  });
};

const BookFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "It's too short!")
    .max(50, "It's too long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  date: Yup.date()
    .nullable()
    .required("Booking date is required")
    .min(new Date(), "Booking date cannot be in the past"),
  comment: Yup.string().max(500, "Comment must be less than 500 characters"),
});

const CamperForm = () => {
  const handleSubmit = (values, actions) => {
    notify();

    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: "", email: "", date: null, comment: "" }}
        onSubmit={handleSubmit}
        validationSchema={BookFormSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="text"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <Calendar
                value={values.date}
                onChange={(date) => setFieldValue("date", date)}
              />
              <ErrorMessage
                className={css.error}
                name="date"
                component="span"
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.commentInput}
                type="text"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </div>

            <button className={css.button} type="submit">
              Send
            </button>
            <Toaster position="top-right" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CamperForm;
