import { useEffect, useState, type JSX } from "react";
import style from "./Dogs.module.css";

export default function Dogs(): JSX.Element {
  const [image, setImage] = useState<string>("");

  async function loadImage(): Promise<void> {
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const obj = await resp.json();
    setImage(obj.message);
  }
  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Random dogs 🐶:</h1>
      <div className={style.btn}>
        <button type="button" onClick={loadImage}>
          Next Dog:
        </button>
      </div>

      <div className={style.imageContainer}>
        <img src={image} alt="Random dog" width="100%" />
      </div>
    </div>
  );
}
