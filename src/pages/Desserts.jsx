import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProducts, removeFromCart } from '../features/cartSlice';
import { Button } from '@material-tailwind/react';
import { BsCartPlusFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';

function Desserts() {
  const [desserts, setDesserts] = useState([]);
  const dispatch = useDispatch();
  const { products, isLoading, cartProducts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const storedDesserts = JSON.parse(localStorage.getItem('addedDesserts')) || [];
    const updatedDesserts = products.map(dessert => ({
      ...dessert,
      isAdded: storedDesserts.includes(dessert.id)
    }));
    setDesserts(updatedDesserts);
  }, [products]);

  useEffect(() => {
    const updatedDesserts = desserts.map(dessert => ({
      ...dessert,
      isAdded: cartProducts.some(cartItem => cartItem.id === dessert.id)
    }));
    setDesserts(updatedDesserts);
    localStorage.setItem('addedDesserts', JSON.stringify(cartProducts.map(item => item.id)));
  }, [cartProducts]);

  const handleAddToCart = (dessert) => {
    dispatch(addToCart(dessert));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className='main-container my-[70px]'>
        {isLoading ? (
          <div className='w-full h-full flex items-center justify-center'>
            <img className='w-[100px]' src='../assets/loader/loader.svg' alt='loader' />
          </div>
        ) : (
          <div className='w-full grid lg:grid-cols-2 items-center gap-8'>
            {desserts.map((dessert) => (
              <div key={dessert.id} className='grid grid-cols-2 shadow-lg rounded-3xl'>
                <div className='object-cover select-none'>
                  <img className='w-full rounded-l-3xl' src={dessert.image.desktop} alt={dessert.name} />
                </div>
                <div className='flex flex-col justify-between'>
                  <div className='w-full p-8'>
                    <p className='mb-2 text-xl tracking-[1px] text-[#87635A]'>
                      {dessert.category}
                    </p>
                    <h1 className='text-[22px] font-semibold leading-[25px]'>{dessert.name}</h1>
                    <p className='text-[18px] w-full font-semibold flex justify-between mt-5'>
                      <span className='text-[#87635A] inline-block'>100g</span>
                      <span className='text-gray-500'>price: ${dessert.price}</span>
                    </p>
                  </div>
                  <div className='w-full flex justify-between p-5 border-t-2'>
                    <Button size='sm' className='flex gap-2' color='amber'>
                      quick view
                    </Button>
                    {dessert.isAdded ? (
                      <Button onClick={() => handleRemoveFromCart(dessert.id)} size='sm' className='flex gap-2' color='red'>
                        <FaCheckCircle size={16} color='green' />
                        added
                      </Button>
                    ) : (
                      <Button onClick={() => handleAddToCart(dessert)} size='sm' className='flex gap-2' color='red'>
                        <BsCartPlusFill className='mt-[1px]' />
                        add to cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Desserts;