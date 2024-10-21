import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ProductShowComp = () => {
    const [products, setProducts] = useState([]);

    //get products list
    const getProductsList = () => {
        axios.get("https://monitor-backend-rust.vercel.app/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    };

    //always run when the page loads
    useEffect(() => { getProductsList(); }, []);

    return (
        <div className="container mx-auto my-8 p-4">
    
            {/* 2 lines */}
            <p className="text-sm">Hard to choose the right product for your pets?</p>
            <div className="flex justify-between items-start mb-4">
                <p className="text-lg font-semibold">Our Products</p>
                <button className="bg-none text-blue-500 px-4 py-2 rounded-full">View More</button>
            </div>
            {/* 2 lines ends */}
    
            {/* Dynamic cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-auto cursor-pointer hover:shadow-xl transition-shadow duration-300">
                        {/* Image section */}
                        <img src={product.image} alt={product.name} className="w-full h-56 object-contain p-2" />
                        {/* Image section ends */}
    
                        {/* Text section */}
                        <div className="p-4 flex flex-col">
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-700 mb-1">
                                Product - {product.product}
                                {/* Conditionally render size if it's not small or large */}
                                {product.size !== 'small' && product.size !== 'large' && (
                                    <> , Size - {product.size}</>
                                )}
                            </p>
                            <p className="text-black-700 font-semibold mb-2">{product.price}</p>
                            <div className="bg-orange-400 p-2 rounded-lg text-center">
                                <p className="text-white">🎁 {product.description}</p>
                            </div>
                        </div>
                        {/* Text section ends */}
                    </div>
                ))}
            </div>
            {/* Dynamic cards section ends */}
    
        </div>
    );
    
};

export default ProductShowComp;
