import { useState, type JSX } from "react";

type Theme = "light" | "dark";

export function ThemeSwitcher(): JSX.Element {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme(): void {  // teemu paarsleedzeejs
    setTheme((prev: Theme) => (prev === "light" ? "dark" : "light"));
  }
// mainiigais, kas saglabaa css iipasiibas ar ternaraa operatora paliidziibu

  const pageStyle: React.CSSProperties =
    theme === "light"
      ? { backgroundColor: "#ffffff", color: "#000000", height: "50vh", padding: "20px" }
      : { backgroundColor: "#000000", color: "#ffffff", height: "50vh", padding: "20px" };

  return (
    <div style={pageStyle}>
      <h2>Текущая тема: {theme}</h2>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
}
// Theme — тип с ограниченными строковыми литералами ("light" | "dark").

// useState<Theme> — указывает, что состояние может принимать только эти два значения.

// toggleTheme(): void — функция ничего не возвращает.

// pageStyle: React.CSSProperties — встроенный тип React для inline-стилей.

// Компонент возвращает JSX.Element.



// 🧩 Задание 1: Переключатель темы (светлая / тёмная)
// Цель: Научиться хранить и изменять состояние (в данном случае — текущую 
// тему интерфейса).
// Условие
// Создайте компонент ThemeSwitcher, который:
// отображает кнопку с текстом "Сменить тему";
// при клике на кнопку переключает состояние между "light" и "dark";
// отображает текущую тему на экране;
// изменяет фон страницы в зависимости от темы:
// при "light" — белый фон, чёрный текст;
// при "dark" — чёрный фон, белый текст.
// Подсказка
// Используйте хук:
// const [theme, setTheme] = useState("light");
// Пример результатаuseState1
// Текущая тема: light
// [ Сменить тему ]
// После клика: фон станет чёрным, текст — белым, и надпись изменится на 
// “Текущая тема: darkˮ)