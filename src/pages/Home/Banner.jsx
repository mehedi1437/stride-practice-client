import img from '../../assets/home-page.png';

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-full' src={img} alt="" />
            <div >
                <div className='text-7xl absolute top-48 left-10 text-[#da3f68] space-y-4'>
                    <p>Buy Best Product From </p>
                    <p>All of The World</p>
                     </div>
                
            </div>
        </div>
    );
};

export default Banner;