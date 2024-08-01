// import { useSelector } from 'react-redux'
// import { Link, NavLink } from 'react-router-dom'
// import CartProducts from './CartProducts'

// function Navbar() {
//     let { cartProducts } = useSelector(state => state.cart)

//     return (
//         <header className="shadow-lg">
//             <div className="main-container navbar h-full  py-2">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             <li><Link to={`/about`}>about</Link></li>
//                             <li>
//                                 <button>desserts</button>
//                                 <ul className="p-2">
//                                     <li><Link to={`/desserts`}>All Desserts</Link></li>
//                                     <li><Link to={`/menus`}>Menu</Link></li>
//                                 </ul>
//                             </li>
//                             <li><Link to={`/books`}>books</Link></li>
//                         </ul>
//                     </div>

//                     <Link
//                         to={`/`}
//                         className="text-2xl ml-5 font-semibold bg-red-600 hover:bg-red-700 text-white py-1 px-5 rounded-xl">
//                         Desserts
//                     </Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex font-speacial">
//                     <ul className="menu menu-horizontal px-1 gap-3">
//                         <li><NavLink to={`/about`} className='lowercase text-lg'>About</NavLink></li>
//                         <li>
//                             <details className='w-[130px]'>
//                                 <summary className='lowercase text-lg'>Desserts</summary>
//                                 <ul className="flex flex-col gap-1 w-full">
//                                     <li><NavLink to={`/desserts`}>All Desserts</NavLink></li>
//                                     <li><NavLink to={`/menus`}>Menu</NavLink></li>
//                                 </ul>
//                             </details>
//                         </li>
//                         <li><NavLink to={`/books`} className='lowercase text-lg'>Books</NavLink></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <div className="dropdown dropdown-end">
//                         <div tabIndex={0} role="button" className="w-[60px] h-[80px] -mb-3 btn-circle">
//                             <div className="indicator">
//                                 <button data-quantity={cartProducts.length} className="btn-cart">
//                                     <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
//                                         <title>icon-cart</title>
//                                         <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
//                                     </svg>
//                                     <span className="quantity">12</span>
//                                 </button>
//                             </div>
//                         </div>
//                         <div
//                             tabIndex={0}
//                             className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-[500px] p-[12px] shadow">
//                             <div className="card-body p-0">
//                                 <div className='w-full h-full flex flex-col items-center'>
//                                     <div className='w-full font-bold text-2xl'>
//                                         <h1 className='text-[#C73B0F]'>Your Cart (0)</h1>
//                                     </div>
//                                     {
//                                         cartProducts.length > 0
//                                             ?
//                                             <>
//                                                 {
//                                                     cartProducts.map((product) => {
//                                                         return (
//                                                             <div className='w-full'>
//                                                                 <CartProducts product={product} />
//                                                                 <div className='w-full mt-[24px] flex justify-between'>
//                                                                     <p className='text-[#260F08]'>
//                                                                         Order Total
//                                                                     </p>
//                                                                     <p className='text-[#260F08] font-bold text-xl text-right'>
//                                                                         $46.50
//                                                                     </p>
//                                                                 </div>

//                                                                 <div className='mt-[24px] bg-[#FCF8F6] w-full py-[16px] flex items-center justify-center'>
//                                                                     <div className='flex items-center gap-2 mx-auto'>
//                                                                         <div className='w-[20px] h-[20px]'>
//                                                                             <img className='select-none' src="../assets/carbon_tree.svg" alt="carbon_tree" />
//                                                                         </div>
//                                                                         <p>
//                                                                             This is a <span className='font-semibold tracking-[1px]'>carbon-neutral</span> delivery
//                                                                         </p>
//                                                                     </div>
//                                                                 </div>

//                                                                 <div>
//                                                                     <div class="checkout-container">
//                                                                         <div class="left-side">
//                                                                             <div class="checkout-card">
//                                                                                 <div class="card-line"></div>
//                                                                                 <div class="buttons"></div>
//                                                                             </div>
//                                                                             <div class="post">
//                                                                                 <div class="post-line"></div>
//                                                                                 <div class="screen">
//                                                                                     <div class="dollar">$</div>
//                                                                                 </div>
//                                                                                 <div class="numbers"></div>
//                                                                                 <div class="numbers-line2"></div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div class="right-side">
//                                                                             <div class="new">Checkout</div>
//                                                                         </div>
//                                                                     </div>

//                                                                 </div>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }
//                                             </>
//                                             :
//                                             <>
//                                                 <div className='w-[128px] h-[128px]'>
//                                                     <img className='select-none' src="../assets/empty.png" alt="empty" />
//                                                 </div>
//                                                 <p className='font-semibold'>
//                                                     Your added items will appear here
//                                                 </p>
//                                             </>
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Navbar


import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import CartProducts from './CartProducts'
import toast from 'react-hot-toast'

function Navbar() {
    let { cartProducts } = useSelector(state => state.cart)

    return (
        <header className="shadow-lg">
            <div className="main-container navbar h-full py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={`/about`}>about</Link></li>
                            <li>
                                <button>desserts</button>
                                <ul className="p-2">
                                    <li><Link to={`/desserts`}>All Desserts</Link></li>
                                    <li><Link to={`/menus`}>Menu</Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/books`}>books</Link></li>
                        </ul>
                    </div>

                    <Link
                        to={`/`}
                        className="text-2xl ml-5 font-semibold bg-red-600 hover:bg-red-700 text-white py-1 px-5 rounded-xl">
                        Desserts
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex font-special">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        <li><NavLink to={`/about`} className='lowercase text-lg'>About</NavLink></li>
                        <li>
                            <details className='w-[130px]'>
                                <summary className='lowercase text-lg'>Desserts</summary>
                                <ul className="flex flex-col gap-1 w-full">
                                    <li><NavLink to={`/desserts`}>All Desserts</NavLink></li>
                                    <li><NavLink to={`/menus`}>Menu</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to={`/books`} className='lowercase text-lg'>Books</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="w-[60px] h-[80px] -mb-3 btn-circle">
                            <div className="indicator">
                                <button data-quantity={cartProducts.length} className="btn-cart">
                                    <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                        <title>icon-cart</title>
                                        <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                                    </svg>
                                    <span className="quantity">12</span>
                                </button>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-[500px] p-[12px] shadow">
                            <div className="card-body p-0">
                                <div className='w-full h-full flex flex-col items-center'>
                                    <div className='w-full font-bold text-2xl'>
                                        <h1 className='text-[#C73B0F]'>Your Cart (0)</h1>
                                    </div>
                                    {
                                        cartProducts.length > 0
                                            ?
                                            <>
                                                {
                                                    cartProducts.map((product) => {
                                                        return (
                                                            <div className='w-full' key={product.id}>
                                                                <CartProducts product={product} />
                                                                <div className='w-full mt-[24px] flex justify-between'>
                                                                    <p className='text-[#260F08]'>
                                                                        Order Total
                                                                    </p>
                                                                    <p className='text-[#260F08] font-bold text-xl text-right'>
                                                                        $46.50
                                                                    </p>
                                                                </div>

                                                                <div className='mt-[24px] bg-[#FCF8F6] w-full py-[16px] flex items-center justify-center'>
                                                                    <div className='flex items-center gap-2 mx-auto'>
                                                                        <div className='w-[20px] h-[20px]'>
                                                                            <img className='select-none' src="../assets/carbon_tree.svg" alt="carbon_tree" />
                                                                        </div>
                                                                        <p>
                                                                            This is a <span className='font-semibold tracking-[1px]'>carbon-neutral</span> delivery
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <div  
                                                                    className="checkout-container mt-[24px]"
                                                                    onClick={() => toast.success(`Order confirmed! You can can continue shopping`)}
                                                                    >
                                                                        <div className="checkout-left-side">
                                                                            <div className="checkout-card">
                                                                                <div className="checkout-card-line"></div>
                                                                                <div className="checkout-buttons"></div>
                                                                            </div>
                                                                            <div className="checkout-post">
                                                                                <div className="checkout-post-line"></div>
                                                                                <div className="checkout-screen">
                                                                                    <div className="checkout-dollar">$</div>
                                                                                </div>
                                                                                <div className="checkout-numbers"></div>
                                                                                <div className="checkout-numbers-line2"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="checkout-right-side h-full">
                                                                            <div className="checkout-new select-none">Checkout</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                            :
                                            <>
                                                <div className='w-[128px] h-[128px]'>
                                                    <img className='select-none' src="../assets/empty.png" alt="empty" />
                                                </div>
                                                <p className='font-semibold'>
                                                    Your added items will appear here
                                                </p>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
