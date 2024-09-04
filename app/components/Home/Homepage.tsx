import React from 'react';
import ShopByCategory from './ShopByCategory';
import { myStyles } from '@/app/variables/myStyles';

const Homepage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className="text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-teal-800 font-semibold 2xl:font-black py-5 xl:py-10">Shop By Category</h3>
            <ShopByCategory/>
        </div>
    );
};

export default Homepage;