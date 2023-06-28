import { useState, useEffect } from "react";
import "./App.css";
import { BsFillCartPlusFill } from 'react-icons/bs';


function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return(
    <main className="products">
      <ul>
      {products?.map((product, index) => (
        <li key={product.id}>
          <img
          src={product.thumbnail}
          alt={product.title}
          />
          <div>
            <strong>{product.title}</strong>
          </div>
          <div>
            <button>
              <BsFillCartPlusFill />
            </button>
          </div>
        </li>
      ))}
      </ul>
    </main>
  ) 

}

export default App;
