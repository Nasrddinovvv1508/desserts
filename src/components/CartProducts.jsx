import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

function CartProducts({ product }) {
    let dispatch = useDispatch();

    // functions
    let handleDelete = (id) => {
        dispatch(removeFromCart(id));
    }

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

                <div className='flex items-center'>
                    <div className="button-container flex items-center gap-2">
                        <button className="button-3d">
                            <div className="button-top">
                                <span className="material-icons">❮</span>
                            </div>
                            <div className="button-bottom"></div>
                            <div className="button-base"></div>
                        </button>
                        <p>
                            0
                        </p>
                        <button className="button-3d">
                            <div className="button-top">
                                <span className="material-icons">❯</span>
                            </div>
                            <div className="button-bottom"></div>
                            <div className="button-base"></div>
                        </button>
                    </div>

                    <button onClick={() => handleDelete(product.id)} className="deleteButton">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 50 59"
                            className="bin"
                        >
                            <path
                                fill="#B5BAC1"
                                d="M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"
                            ></path>
                            <path
                                fill="#B5BAC1"
                                d="M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"
                            ></path>
                            <path
                                fill="#B5BAC1"
                                d="M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            ></path>
                            <path fill="#B5BAC1" d="M2 13H48L47.6742 21.28H2.32031L2 13Z"></path>
                        </svg>
                        <span className="tooltip">Delete</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartProducts