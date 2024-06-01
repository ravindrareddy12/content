import { useState } from 'react';
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Header from '../common/Header';
import pro from '../../assets/images/pro.png';

function ProductItem({ product, index, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    
    <li key={product.id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={pro}
          alt={pro}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                  {product.name}
                </a>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{product.region}</p>
              {product.size && (
                <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.region}</p>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${index}`} className="sr-only">
              Quantity, {product.name}
            </label>
           

            <div className="absolute right-0 top-0">
              <button
                type="button"
                onClick={() => onRemove(product.id)}
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {product.inStock ? (
            <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
          ) : (
            <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
          )}
          <span>{product.inStock ? 'In stock' : `Ships in ${product.name}-${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}`}</span>
        </p>
      </div>
    </li>
  );
}

function OrderSummary({ subtotal, shipping, tax, total }) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">{subtotal}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Learn more about how shipping is calculated</span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">${shipping}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Learn more about how tax is calculated</span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">{tax}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">${total}</dd>
        </div>
      </dl>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

export default function ShoppingCart() {
//   const [cartProducts, setCartProducts] = useState(products);
  const [cartProducts, setCartProducts] = useState(() => {
    const storedProducts = localStorage.getItem('cartItems');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  const handleRemoveProduct = (productId) => {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
    localStorage.setItem('cartItems',JSON.stringify(cartProducts))
  };

//   const subtotal=()=>{
//     let total = 0
//     cartProducts.map((e)=>{
//         total +=e.price

//     })

//   }
  const subtotal = cartProducts.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0);
//   const subtotal = cartProducts.reduce((acc, curr) => acc + parseFloat(curr.price.replace('$', '')) * curr.quantity, 0).toFixed(2);
  const shipping = 5; // You can calculate this dynamically if needed
  const tax = (subtotal * 0.085).toFixed(2); // Assuming 8.5% tax rate
  const total = parseInt(subtotal)  +  parseInt(tax)  + shipping;

  return (
    <>
    <Header />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proposal Cart</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cartProducts.map((product, index) => (
                <ProductItem key={product.id} product={product} index={index} onRemove={handleRemoveProduct} />
              ))}
            </ul>
          </section>

          <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
        </form>
      </div>
    </div>
    </>
  );
}

