import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pro from '../../assets/images/pro.png';
import Toast from '../common/Toast';

const ProposalDetails = () => {
    const contents = useSelector(state => state.contents);
    const { id } = useParams();
    console.log(contents[parseInt(id)])
    const tags = ['Tag1', 'Tag2', 'Tag3']
    const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000); 
  };
    const onAddToCart = (product) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let existingProduct = cartItems.find(item => item.id === product.id);
    
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          product.quantity = 1;
          cartItems.push(product);
        }
    
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        showToast(`${product.name} added to cart!`);
      };
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={pro} alt="Product" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{contents[parseInt(id)].name}</div>
                    <p className="mt-2 text-gray-500">{contents[parseInt(id)].description}</p>
                    <div className="mt-4">
                        {tags.map((tag, index) => (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-700">Price: </span>
                        <span className="text-indigo-600 font-semibold">{contents[parseInt(id)].price}</span>
                    </div>
                    <div className="mt-4">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            onClick={()=>onAddToCart(contents[parseInt(id)])}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                        >
                            Share
                        </button>
                        {toast.show && <Toast message={toast.message} onClose={() => setToast({ show: false, message: '' })} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProposalDetails;
