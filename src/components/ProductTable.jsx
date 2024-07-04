import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th>Image</th>
          <th>SKU</th>
          {/* Add other headers */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.sku}>
            <td>
              <img src={product.image} alt={product.name} />
            </td>
            <td>{product.sku}</td>
            {/* Add other product details */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;