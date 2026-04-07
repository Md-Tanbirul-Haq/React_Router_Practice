import React from 'react';

const Product = ({data_}) => {
    return (
        <div>
            <div className="card bg-neutral-300 w-96 md:w-full shadow-sm px-5 py-10 h-full">
  <figure>
    <img
    className="w-48 h-48 object-contain"
      src={data_.image}
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data_.title}</h2>
    <p className='text-justify'>{data_.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;