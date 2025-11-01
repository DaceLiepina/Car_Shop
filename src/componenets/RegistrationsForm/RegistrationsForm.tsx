import style from './RegistrationsForm.module.css'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/\d/, "Password must contain at least one digit"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords do not match")
    .required("Re-enter password"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const initialValues: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Registration data:", values);
    alert("Registration successful!");
    resetForm();
  };

  return (
    <div className={style.container}>
      <h2>Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        {() => (
          <Form className={style.form}>
            <label className={style.label}>E-mail:</label>
            <Field name="email" type="email" className={style.input} />
            <ErrorMessage name="email" component="div" className={style.error} />

            <label className={style.label}>Password:</label>
            <div className={style.passwordContainer}>
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                className={style.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={style.toggle}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
            <ErrorMessage name="password" component="div" className={style.error} />

            <label className={style.label}>Re-enter password:</label>
            <div className={style.passwordContainer}>
              <Field
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                className={style.input}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className={style.toggle}
              >
                {showConfirm ? "👁️" : "🙈"}
              </button>
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={style.error}
            />

            <button type="submit" className={style.submit}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
