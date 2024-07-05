import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <div className="text-lg font-bold mb-4">Departmental List</div>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">S/N</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">SKU</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Brand</th>
            <th className="px-4 py-2">Cost Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Size</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.sku} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                <img src={`sample_image_${index + 1}.jpg`} alt={product.name} className="w-10 h-10" />
              </td>
              <td className="border px-4 py-2">{product.sku}</td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.brand}</td>
              <td className="border px-4 py-2">{product.costPrice}</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2">{product.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
