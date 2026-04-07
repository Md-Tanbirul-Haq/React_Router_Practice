import React from 'react';
import { useLoaderData } from "react-router";
import Product from '../product/product';
const Products = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="grid gap-10
                  grid-cols-1 
                  sm:grid-cols-1 
                  md:grid-cols-3 
                  lg:grid-cols-4 
                  justify-items-center  mx-5" >
            {
        data.map((data_,index) => (<Product key={index} data_={data_}></Product>))

            }
        </div>
    );
};

export default Products;