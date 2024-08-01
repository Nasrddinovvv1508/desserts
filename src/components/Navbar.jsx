import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className="navbar bg-base-100 shadow-lg py-2">
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
            <div className="navbar-center hidden lg:flex font-speacial">
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
                <Link className="btn">Button</Link>
            </div>
        </header>
    )
}

export default Navbar