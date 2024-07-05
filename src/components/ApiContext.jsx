import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);  // Add state for error handling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://3.88.1.181:8000/products/public/catalog');
        setProducts(response.data);
      } catch (error) {
        setError(error);  // Set error state
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ApiContext.Provider value={{ products, error }}>
      {children}
    </ApiContext.Provider>
  );
};