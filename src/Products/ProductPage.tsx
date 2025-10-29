import { useEffect, useState, type JSX } from "react";
import { useParams, Link } from "react-router-dom";
import type Product from "./types/Product";
import { useTheme } from "../themeContext/useTheme";
import style from './Products.module.css'

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { theme, toggleTheme } = useTheme(); // pielietojam hook teemai

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const obj = await res.json();
      setProduct(obj);
    }
    loadProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }} className={`${style.container} ${theme === "dark" ? style.dark : style.light }`}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />
      <h3>{product.title}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
      <Link to="../products">Back to products</Link>
       <button type="button"  onClick={toggleTheme}>Switch theme to (tekosaa : {theme})</button>
    </div>
  );
}