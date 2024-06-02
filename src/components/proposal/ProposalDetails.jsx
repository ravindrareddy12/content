import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pro from '../../assets/images/pro.png';
import Toast from '../common/Toast';

const ProposalDetails = () => {
    const content = useSelector(state => state.contents);
    const { id } = useParams();
    const contents= content.data.find(e=>e._id == id)
      console.log(contents)
    
    console.log()
    console.log(id)
    // console.log(contents.data[id])
    const tags = [{name:'Vistors',number:'1.5M'},{name:'Metric 2',number:'4.5M'},{name:'KPR Metric',number:'5.5M'}]
    const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2000); 
  };
    const onAddToCart = (id) => {
        let cartItems = contents.data.find(e=>e._id == id) || [];
        let existingProduct = cartItems.find(item => item._id == id);
    
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
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{contents.name}</div>
                    <p className="mt-2 text-gray-500">{contents.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded-full">
                          {tag.name}
                          <span className="ml-2 bg-blue-200 text-blue-800 text-xs font-semibold mr-1 px-2.5 py-0.5 rounded">
                            {tag.number}
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-700">Price: </span>
                        <span className="text-indigo-600 font-semibold">{contents.price}</span>
                    </div>
                    <div className="mt-4">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            onClick={()=>onAddToCart(contents._id)}
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
