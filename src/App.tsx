import type { JSX } from "react";
import "./App.css";
import CarShop from "./componenets/CarShop/CarShop";
import Homework02 from "./componenets/homework02/Homework02";
import Counter from "./componenets/Counter/Counter";
import Sandwich from "./componenets/Sandwich/Sandwich";
import Alcohol from "./componenets/Alcohol/Alcohol";
import { ThemeSwitcher } from "./componenets/ThemeSwitcher/ThemeSwitcher";
import { InputMirror } from "./componenets/InputMirror/InputMirror";

function App(): JSX.Element {
  return (
    <div>
      <InputMirror/>
      <ThemeSwitcher/>
      <Alcohol/>
      <Sandwich />
      <CarShop />
      <h2> Profile Cards</h2>
      <Homework02 />
      <Counter />
    </div>
  );
}

export default App;
