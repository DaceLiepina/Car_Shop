import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./Money.module.css";

// Datu tips
interface FormValues {
  card1: string;
  card2: string;
  card3: string;
  cvc: string;
}

// Validācija 
const validationSchema = Yup.object({
  card1: Yup.string()
    .matches(/^[0-9]{4}$/, "Enter 4 digits")
    .required("Required field"),
  card2: Yup.string()
    .matches(/^[0-9]{4}$/, "Enter 4 digits")
    .required("Required field"),
  card3: Yup.string()
    .matches(/^[0-9]{4}$/, "Enter 4 digits")
    .required("Required field"),
  cvc: Yup.string()
    .matches(/^[0-9]{3}$/, "Enter 3 digits")
    .required("Required field"),
});

export default function CardCheckForm() {
  const initialValues: FormValues = {
    card1: "",
    card2: "",
    card3: "",
    cvc: "",
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Entered data:", values);

    alert("Verification complete! Your data is now with us.😂🥹💸💸💸💸");

    resetForm();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Security check</h2>
        <p style={{color: "black"}}>Find out if your card is in the hackers' database! 😅</p>
        <p style={{color: "black"}}>Enter card details to verify</p>

        <img
          src="https://i-a.d-cd.net/cAAAAgM0JOA-1920.jpg"
          alt="Funny meme"
          className={styles.image}
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label>Card number:</label>
              <div className={styles.cardInputs}>
                <Field name="card1" 
                placeholder="1111"
                className={styles.inputSmall} maxLength={4} />
                <span>-</span>
                <Field name="card2"
                placeholder="2222" className={styles.inputSmall} maxLength={4} />
                <span>-</span>
                <Field name="card3" 
                placeholder="3333"className={styles.inputSmall} maxLength={4} />
              </div>
              <ErrorMessage name="card1" component="div" className={styles.error} />
              <ErrorMessage name="card2" component="div" className={styles.error} />
              <ErrorMessage name="card3" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label>CVC2:</label>
              <Field name="cvc" 
              placeholder="123"
              className={styles.inputSmall} maxLength={3} />
              <ErrorMessage name="cvc" component="div" className={styles.error} />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Check!
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}