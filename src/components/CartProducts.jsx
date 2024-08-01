import React from 'react'

function CartProducts({ product }) {
    return (
        <div className='w-full py-[16px] border-b-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-semibold text-[#260F08] text-[16px]'>{product.name}</h1>
                    <div className='flex gap-[8px] mt-[6px]'>
                        <p className='font-semibold text-[#C73B0F]'>
                            1x
                        </p>
                        <p className='text-[#87635A]'>
                            @ ${product.price}
                        </p>
                        <p className='text-[#87635A] font-semibold'>
                            ${product.price}
                        </p>
                    </div>
                </div>

                <div>
                    delete
                </div>
            </div>
        </div>
    )
}

export default CartProducts