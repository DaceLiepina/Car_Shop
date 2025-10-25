import type { JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
          <li className={style.listelElement}>
          <NavLink to="home" className={style.home}>
            Home
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="alcohol" className={style.link}>
            Alcohol
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="carshop" className={style.link}>
            Car Shop
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="counter" className={style.link}>
            Counter
          </NavLink>
        </li>
      
        <li className={style.listelElement}>
          <NavLink to="userspage" className={style.link}>
            Users Page
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="sandwich" className={style.link}>
            Sandwich
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="randomjoke" className={style.link}>
            Randome Joke
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="chucknorrisjoke" className={style.link}>
            Cuck Norris Joke
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
