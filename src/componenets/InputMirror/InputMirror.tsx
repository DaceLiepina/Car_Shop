import { useState, type JSX } from "react";

export function InputMirror(): JSX.Element {
  const [text, setText] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    fontFamily: "sans-serif",
  };

  return (
    <div style={containerStyle}>
      <label>
        Введите текст:{" "}
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Начните вводить..."
        />
      </label>
      <p>Вы ввели: {text || "ничего"}</p>
    </div>
  );
}
// 🧠 Пояснение по типам:

// useState<string>("") — состояние хранит строку.

// handleChange принимает строго типизированное событие React.ChangeEvent<HTMLInputElement>.

// containerStyle типизирован через React.CSSProperties.

// Возвращаемое значение компонента — JSX.Element.#

// 🧩 Задание 2: Управление полем ввода (контролируемый 
// input)
// Цель: Освоить работу с состоянием при вводе текста пользователем.
// Условие
// Создайте компонент InputMirror, который:
// содержит текстовое поле (input);
// сохраняет значение поля в состоянии;
// отображает под полем текст "Вы ввели: <текст>", который обновляется при 
// каждом вводе символа.
// Подсказка
// Используйте хук:
// const [text, setText] = useState("");
// Пример поведения
// Пользователь вводит в поле: Привет
// Под полем отображается:
// Вы ввели: Привет