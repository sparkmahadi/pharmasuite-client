import Image from 'next/image';
import React from 'react';
import demoImage from "@/public/fluclox-500-1631442367478.png"
import Link from 'next/link';

const AddProducts = () => {
  return (
    <div>
      <h3>Add New Products</h3>

      <div className='flex justify-center items-center gap-5'>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <Image
              src={demoImage}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Main Product</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <Link href={'add-products/main-product'}><button className="btn btn-success">Select</button></Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <Image
              src={demoImage}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Other Product</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link href={'add-products/other-product'}><button className="btn btn-success">Select</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;