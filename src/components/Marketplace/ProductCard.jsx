import React, { useState } from 'react';
import pro from '../../assets/images/pro.png';
import Toast from '../common/Toast';

const ProductCard = ({ product }) => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000); // Toast disappears after 3 seconds
  };

  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Show toast notification
    showToast(`${product.name} added to cart!`);
  };

  const handleBookmark = (product) => {
    let bookmarkedItems = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    let isBookmarked = bookmarkedItems.find(item => item.id === product.id);

    if (!isBookmarked) {
      bookmarkedItems.push(product);
      localStorage.setItem('bookmarkedItems', JSON.stringify(bookmarkedItems));

      // Show toast notification
      showToast(`${product.name} bookmarked!`);
    } else {
      showToast(`${product.name} is already bookmarked!`);
    }
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <img src={pro} alt={product.name} className="mb-2" />
      <h4 className="font-bold mb-1">{product.name}</h4>
      <p className="text-sm mb-2">Region: {product.region}</p>
      <p className="text-sm mb-2">Starting from: ₹{product.price}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
      <button 
        className="bg-gray-200 text-black px-4 py-2 rounded"
        onClick={() => handleBookmark(product)}
      >
        Bookmark
      </button>
      {toast.show && <Toast message={toast.message} onClose={() => setToast({ show: false, message: '' })} />}
    </div>
  );
};

export default ProductCard;
