import { useEffect, useState, type JSX } from "react";
import style from "./ChuckNorrisJokes.module.css";

type Joke = {
  id: string;
  value: string;
  icon_url: string;
  url: string;
};

export default function ChuckJoke(): JSX.Element {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string>("");

  async function fetchJoke() {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }

  // Ielādē joku tikai vienreiz, kad komponente tiek ielādēta (mount)
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={style.container}>
      <h2>Chuck Norris Joke 😂</h2>

      {error && <p className={style.error}>Error: {error}</p>}

      {joke ? (
        <div className={style.card}>
          <img src={joke.icon_url} alt="Chuck Norris" className={style.icon} />
          <p>{joke.value}</p>
          <button onClick={fetchJoke} className={style.btn}>
            Next Joke
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}