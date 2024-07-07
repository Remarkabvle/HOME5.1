import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.scss";
import line from "../../assets/line.png";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  thumbnail: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="product-list">
      <div className="container product-list-container">
        <div className="season">
          <h2>СЕЗОН 2020/21</h2>
          <div className="imgn">
            <img src={line} alt="decorative line" />
          </div>
          {loading ? (
            <p className="loading">Loading products...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="product-grid">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-img">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <p>{product.brand}</p>
                    <p>{product.title}</p>
                    <p>{product.price} руб.</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="new-collection">
          <h2>НОВАЯ КОЛЛЕКЦИЯ</h2>
          <button className="catalog-button">КАТАЛОГ</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
