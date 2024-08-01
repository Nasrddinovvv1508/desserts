import React from 'react'

function Home() {
    return (
        <div>
            <section className='main-container grid grid-cols-3 items-center mt-[70px]'>
                <div className='w-[400px]'>
                    <video autoPlay muted loop src="../assets/videos/rengoku-kyojuro.mp4"></video>
                </div>
                <div className='text-center'>
                    <h1 className='font-speacial text-6xl font-semibold mb-3'>
                        <span className='text-red-500'>Sweeten</span> Your <span className='text-orange-300'>Day!</span>
                    </h1>
                    <p className='font-speacial text-xl mt-6 capitalize text-gray-500'>
                        Experience the taste of happiness.
                    </p>
                </div>
                <div className='w-[400px]'>
                    <video autoPlay muted loop src="../assets/videos/cake.mp4"></video>
                </div>
            </section>

            
        </div>
    )
}

export default Home