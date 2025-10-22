import { useEffect, useState, type JSX } from "react";
import style from "./RandomJoke.module.css"

type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export default function RandomJoke():JSX.Element {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string>("");

  // Funkcija, kas ielādē joku no API
  async function fetchJoke() {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
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

  // Izsaucam tikai vienreiz, kad komponente ielādējas (mount)
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2> Random Joke 😂😂😂</h2>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {joke ? (
        <div className={style.container}>
          <p><strong>Setup: </strong> {joke.setup}</p>
          <p><strong>Punchline: </strong> {joke.punchline}</p>
          <button
            onClick={fetchJoke}
            className={style.btn}
          >
            Next Joke
          </button>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
}