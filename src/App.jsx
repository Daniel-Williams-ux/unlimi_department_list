import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductTable from './components/ProductTable';

const App = () => {
  const [productData, setProductData] = useState([]);
  // Fetch data from API and set it to productData

  useEffect(() => {
    // Fetch data from API and update productData
    // Example: fetchProducts().then((data) => setProductData(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      
      <ProductTable products={productData} />
    </div>
  );
};

export default App;