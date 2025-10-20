import { useState, type JSX } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("white");

  // создали переменную состояния counter
  // и функцию setCounter для изменения состояния
  // useState -  это хук
  // в круглых скобках начальное состояние переменной состояния
  // хук useState  принимает начальное значение переменной состояния
  // возвращает массив в котором на первом месте переменная состояния
  // а на втором месте функция  сетер
  // Хук - это функция которая используется только внутри компонента
  // В жизненном цикле компонента React есть 3 фазы:
  // Сборка (mounting)
  // Обновление (updating)
  // Разборка (unmounting)

  function handlePlus(): void {
    setCounter(counter + 1);
  }
  function handleMinus(): void {
    setCounter(counter - 1);
  }
  function handleAdd100(): void {
    setCounter(counter + 100);
  }

  function handleReset(): void {
    setCounter(0);
  }
  function changeColor(color: string): void {
    setBgColor(color);
  }

  return (
    <div>
      <h1>Money adding</h1>
      <img
        src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
        alt=""
      />
      <div
        className={`${style.container} ${style.counterClass}`}
        style={{ backgroundColor: bgColor }}
      >
        <button className={style.btn} type="button" onClick={handlePlus}>
          Add the money{" "}
        </button>
        <button className={style.btn} type="button" onClick={handleAdd100}>
          +100€
        </button>
        <span>
          {counter}€{" "}
        </span>
        <button type="button" onClick={handleMinus} className={style.btn}>
          Remove excess money{" "}
        </button>
        <button type="button" onClick={handleReset} className={style.btn}>
          Reset
        </button>
        <div className={style.colorButtons}>
          <button
            className={style.btn}
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => changeColor("red")}
          >
            Red
          </button>
          <button
            className={style.btn}
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => changeColor("green")}
          >
            Green
          </button>
          <button
            className={style.btn}
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => changeColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}
