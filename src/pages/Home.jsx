import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <section className='main-container grid grid-cols-3 items-center mt-[70px]'>
                <div className='w-[400px]'>
                    <video autoPlay muted loop src="../assets/videos/rengoku-kyojuro.mp4"></video>
                </div>
                <div className='text-center'>
                    <strong>
                        <h1 className='font-nemuae text-7xl font-bold mb-3'>
                            <span className='text-red-500'>Sweeten</span> Your <span className='text-orange-300'>Day!</span>
                        </h1>
                    </strong>
                    <p className='font-speacial text-xl mt-6 capitalize text-gray-500'>
                        Experience the taste of happiness.
                    </p>
                </div>
                <div className='w-[400px]'>
                    <video autoPlay muted loop src="../assets/videos/cake.mp4"></video>
                </div>
            </section>

            <section className="main-container grid grid-cols-2 h-[300px] gap-[30px] my-[120px]">
                <Link to={`/about`} className="text-2xl font-semibold text-center hover:scale-[105%]  capitalize border-2 w-full rounded-3xl shadow-xl flex justify-center items-center">
                    <p className="w-7/12">
                        Can You Satisfy Your Sweetness?
                        Comment this and let us know.
                    </p>
                </Link>

                <Link to={`/books`} className="text-2xl font-semibold text-center hover:scale-[105%] transitions capitalize w-full border-2  rounded-3xl shadow-xl flex justify-center items-center">
                    <p className="w-7/12">
                        learn how to make new sweeten dessert from out books.
                    </p>
                </Link>
            </section>
        </div>
    )
}

export default Home