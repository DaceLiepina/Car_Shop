import { useEffect, useState, type JSX } from 'react'
import type Product from './types/Product';
import { Link } from 'react-router-dom';


export default function ProductsPage(): JSX.Element {
     const [products, setProduct] = useState<Product[]>([]);
     

     async function loadProducts(): Promise<void> {
         const res = await fetch("https://fakestoreapi.com/products");
         const arr = await res.json();
         setProduct(arr);
       }
       useEffect(() => {
         loadProducts();
       }, []);
  return (
   <div>
      <h2>Product list</h2>
      <ul style={{ padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #666",
              margin: "10px",
              padding: "10px",
              listStyle: "none",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div>Category: {product.category}</div>
            <div>Price: ${product.price}</div>
            <Link to={String(product.id)}>See details</Link>
            
          </li>
        ))}
      </ul>
    </div>
  )
}