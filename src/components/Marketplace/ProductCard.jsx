import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <img src="https://via.placeholder.com/150" alt={product.name} className="mb-2"/>
      <h4 className="font-bold mb-1">{product.name}</h4>
      <p className="text-sm mb-2">Region: {product.region}</p>
      <p className="text-sm mb-2">Starting from: ₹{product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add to Cart</button>
      <button className="bg-gray-200 text-black px-4 py-2 rounded">Bookmark</button>
    </div>
  );
};

export default ProductCard;