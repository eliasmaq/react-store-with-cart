import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return(
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <img src={product.thumbnail} alt="Girl in a jacket"/>
        </div>
      ))}
    </div>
  ) 

}

export default App;
