import React from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory
import ProductCard from './ProductCard';

const Marketplace = () => {
  // const history = useHistory(); // Initialize useHistory

  const products = [
    { id: 1, name: 'Today News', price: 5000, region: 'USA, India, Dubai' },
    // Add more product data here
    { id: 2, name: 'Today News', price: 5000, region: 'USA, India, Dubai' },
    { id: 3, name: 'Today News', price: 5000, region: 'USA, India, Dubai' },
    { id: 4, name: 'Today News', price: 5000, region: 'USA, India, Dubai' },
    { id: 5, name: 'Today News', price: 5000, region: 'USA, India, Dubai' },
    { id: 6, name: 'Today News', price: 5000, region: 'USA, India, Dubai' },
  ];

  function goToProductDetailsPage(productId) {
    console.log(productId)
    // history.push(`/product/${productId}`); // Navigate to product details page
  }

  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex justify-between items-center">
        <span>Showing Result: 400</span>
        <div className="space-x-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <button key={product.id} onClick={() => goToProductDetailsPage(product.id)}>
            <ProductCard product={product} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
