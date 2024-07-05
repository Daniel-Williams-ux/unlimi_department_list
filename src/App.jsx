import React from 'react';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import { useApi } from './components/ApiContext';

const App = () => {
  const { products, error } = useApi();

  return (
    <div className="container mx-auto">
      <Header />
      {error ? (
        <div className="error-message">
          <p>Failed to load products. Please try again later.</p>
        </div>
      ) : (
        <ProductTable products={products} />
      )}
    </div>
  );
};

export default App;