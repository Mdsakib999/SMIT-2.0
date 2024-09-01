import img from '/public/pexels-alimadad-997512_prev_ui.png'
const Augment = () => {
    return (
        <div className='mb-24 md:mb-44'>
            <div className='section-container '>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center '>
                    <div className='md:ml-16'>
                        <img src={img} className='h-[250px] lg:h-[420px] ml-4' alt="" />
                        <div className='h-[200px] lg:h-[300px] w-[205px] lg:w-[350px] bg-red-500 -mt-[200px] lg:-mt-[300px]  rounded-xl'></div>
                        <p className='h-[100px] lg:h-[150px] px-3 lg:px-0 lg:w-[150px] bg-orange-400 text-white flex flex-col justify-center items-center rounded-xl  -mt-[150px] ml-[175px] lg:-mt-[230px] lg:ml-[300px]'>

                            <span className=' text-xl md:text-4xl font-bold'>2k</span>
                            <span className='text-sm md:text-base'>Happy Customer</span>
                        </p>
                    </div>
                    <div className='max-w-[80%] mt-16 md:mt-28 relative'>
                        <span className='absolute -left-28 top-56 text-xl'>😍</span>
                        <h1 className='text-2xl font-bold'>Augment your brand, and heighten your business</h1>
                        <p className='text-sm text-slate-400 font-semibold mt-4'>identify your authentic brand & shop elaewnts through an in-depth exploration, receivet unique strategies to clarify your vision, strengthen differentiation, and prime your company for growth
                            Get litertod</p>
                        <button
                            type="submit"
                            className="group mt-16  border border-orange-400 hover:border-none relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold bg-slate-50 text-lg shadow-md hover:shadow-lg"
                        >
                            <div className="absolute inset-0 w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black group-hover:text-white">
                                Get Start
                            </span>
                        </button>
                    </div>
                </div>

            </div>
            <div>

            </div>

        </div>
    );
};

export default Augment;