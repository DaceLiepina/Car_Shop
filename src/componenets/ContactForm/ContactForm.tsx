import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";

import * as Yup from "yup";

// Типы для данных формы

interface FormValues {
  name: string;
  email: string;
  message: string;
}

// Схема валидации Yup

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .required("Введите имя"),
  email: Yup.string()
    .email("Некорректный формат email")
    .required("Введите email")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  message: Yup.string()
    .min(10, "Сообщение должно быть не менее 10 символов")
    .required("Введите сообщение"),
});

function ContactForm() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };
  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Отправленные данные", values);
    alert(`Сообщение отправлено, ${values.name}`);
    resetForm(); // <-- Šī rindiņa attīra laukus pēc submit
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Feedback form</h2>

        {/* 👉 Здесь: */}
        {/* <Formik> управляет состоянием формы;
    <Form> автоматически подключается к Formik-контексту;
    <Field> связан с конкретным полем данных (name);
    <ErrorMessage> отображает ошибки для указанного поля. */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="Enter the name"
                className={styles.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="Enter the email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter the message"
                className={styles.input}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.error}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              To send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default ContactForm;

// Ключевые моменты:

// useFormik — это хук, поэтому:

// Следует правилам хуков React

// Схема Yup передается в конфигурацию через свойство validationSchema

// Formik автоматически:

// Выполняет валидацию при изменении значений и потере фокуса

// Сохраняет ошибки в formik.errors

// Отслеживает, какие поля были "тронуты" в formik.touched

// https://www.npmjs.com/package/yup
//https://formik.org/docs/guides/validation
// https://regex.sorokin.engineer/ru/regular_expressions/#escaping
//https://react-hook-form.com/

// Что проверяет регулярное выражение:
// ^ - начало строки
// [a-zA-Z0-9._%+-]+ - имя пользователя (буквы, цифры, специальные символы)
// @ - обязательный символ @
// [a-zA-Z0-9.-]+ - домен почтового сервиса
// \. - точка перед доменной зоной
// [a-zA-Z]{2,} - доменная зона (минимум 2 символа)
// $ - конец строки

//https://react-hook-form.com/get-started

//https://i-a.d-cd.net/cAAAAgM0JOA-1920.jpg

// alert - "Проверка завершена! Ваши данные теперь у нас 😂🥹💸💸💸💸 "
