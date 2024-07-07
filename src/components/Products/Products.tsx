import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Products.css'; // Assuming you have some styles

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff', 
    },
  },
});

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`);
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / productsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="products-container container">
        <h1>новые поступления</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-cardn">
                <div className="product-image-wrapper">
                  <img src={product.images[0]} alt={product.title} />
                </div>
                <h2>{product.title}</h2>
                <p>{product.price} руб.</p>
              </div>
            ))}
          </div>
        )}
        <div className="pagination">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{
              button: {
                color: '#ffffff', 
              },
              '.Mui-selected': {
                backgroundColor: '#ffffff', 
                color: '#000000',
              },
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Products;
