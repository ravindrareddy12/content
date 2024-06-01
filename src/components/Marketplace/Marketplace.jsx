import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';

const Marketplace = () => {
  const contents = useSelector(state => state.contents);
  console.log(contents)

  function goToProductDetailsPage(productId) {
    console.log(productId)
  }

  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex justify-between items-center">
        <span>Showing Result: 400</span>
        <div className="space-x-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contents.map(product => (
          <button key={product.id} onClick={() => goToProductDetailsPage(product.id)}>
            <ProductCard product={product} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
