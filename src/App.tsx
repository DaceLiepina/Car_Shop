import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./componenets/Layout/Layout";
import Home from "./componenets/Home/Home";
import Alcohol from "./componenets/Alcohol/Alcohol";
import CarShop from "./componenets/CarShop/CarShop";
import Counter from "./componenets/Counter/Counter";
import UsePage from "./componenets/UsePage/UsePage";
import UserPage from "./componenets/UsePage/UserPage";
import { ThemeSwitcher } from "./componenets/ThemeSwitcher/ThemeSwitcher";
import RandomJoke from "./componenets/RandomJoke/RandomJoke";
import Sandwich from "./componenets/Sandwich/Sandwich";
import ChuckJoke from "./ChuckNorrisJokes/ChuckNorrisJokes";
import ProductsPage from "./Products/ProductsPage";
import ProductPage from "./Products/ProductPage";
import ContactForm from "./componenets/ContactForm/ContactForm";
import Money from "./componenets/Money/Money";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="home" element={<Home />} />
        <Route path="userspage" element={<UsePage />} />
        <Route path="/userspage/:userId" element={<UserPage />} />
        <Route path="themeswitcher" element={<ThemeSwitcher />} />
        <Route path="randomjoke" element={<RandomJoke />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="chucknorrisjoke" element={<ChuckJoke />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="contactform" element={<ContactForm />} />
        <Route path="carddetails" element={<Money />} />
      </Route>
    </Routes>
  );
}

export default App;

//path - linka nosaukums ar mazo burtu -

// index element - tas components, kas paradisies peec nokluseejuma pie pirma renderinga
