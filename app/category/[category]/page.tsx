import getProductsByCat from '@/lib/getProductsByCat';
import React from 'react';

const CategoryDetails = async ({params}) => {
    const { category } = params;
    const products = await getProductsByCat(category);
    // console.log(products);

    return (
        <div>
            <h3>detailsssssss</h3>
        </div>
    );
};

export default CategoryDetails;