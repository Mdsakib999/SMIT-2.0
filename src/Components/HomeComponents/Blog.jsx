import { Link } from 'react-router-dom';
import { blogData } from '../../utils/BlogData';

const Blog = () => {

    const mainData = blogData[0]
    const mainData2 = blogData.slice(1, 4)
    const backgroundColors = [
        // 'bg-[#C0B1FF]',  // Light purple
        'bg-[#FFD1C1]',  // Light coral
        'bg-[#C1FFD1]',  // Light green
        // 'bg-[#D1C1FF]',  // Light lavender
        'bg-[#FFC1D1]'   // Light pink
    ];
    const description = mainData.description[0].split(' ').slice(0, 20).join(' ')
    return (
        <div
            // style={{ background: 'url("/public/Round BG.png") no-repeat center center / cover' }} 

            className="section-container pb-8  md:py-10 ">
            <div>
                <p className="bg-[#a0e3fbb7] inline-block px-4 py-1 rounded-full">
                    <span className="size bg-orange-400 size-3 inline-block  rotate-45"></span> <span className="text-sm font-semibold ml-1">BLOG</span>
                </p>
                <p className="text-xl md:text-3xl font-bold mt-3">Latest From <span className=' font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-400'>SM IT Solution</span> </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 ">
                <div>
                    <div className='shadow-md rounded-xl'>
                        <img src={mainData.img} alt="" className='max-h-[245px] rounded-t-xl w-full' />
                        <div className='mt-3 space-y-3 px-4 pb-4'>
                            <div>
                                <p className='inline-block bg-[#C0B1FF] text-[#3f3285] text-sm font-semibold px-4 rounded-full py-1'>{mainData.department}</p>
                                <span className='text-xs ms-4 '>{mainData.date}</span>
                            </div>
                            <div className='space-y-3'>
                                <Link to={`/blog/${mainData.id}`} className='text-xl md:text-3xl font-bold '>{mainData.title}</Link>
                                <p className='text-sm text-slate-500 '>{description}... <Link to={`/blog/${mainData.id}`} className='text-black'>see more</Link></p>
                            </div >
                        </div >
                    </div >
                </div >
                <div className='space-y-8 '>
                    {
                        mainData2.map((item, index) => (
                            <Link to={`/blog/${item.id}`} key={index} className='shadow-md rounded-lg flex justify-between p-2 md:p-4 bg-slate-50'>
                                <div>
                                    <div>
                                        <p className={`inline-block ${backgroundColors[index % backgroundColors.length]} text-[#160f3a] text-sm font-semibold px-4 rounded-full py-1`}>{item.department}</p>
                                        <span className='text-xs ms-4 text-slate-700'>{item.date}</span>
                                    </div>
                                    <p className='text-base md:text-lg font-bold mt-4'>{item.title}</p>
                                </div>
                                <img src={item.img} alt="" className='w-28 md:w-36 rounded-xl' />
                            </Link>
                        ))
                    }
                </div>

            </div >
        </div >
    );
};

export default Blog;