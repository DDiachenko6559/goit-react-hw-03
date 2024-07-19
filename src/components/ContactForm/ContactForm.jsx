import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().min(3, "Invalid phone number").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <section className={s.ContactForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <div className={s.formField}>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>

          <div className={s.formField}>
            <label htmlFor="number">Number</label>
            <Field id="number" name="number" type="text" />
            <ErrorMessage name="number" component="div" className={s.error} />
          </div>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
