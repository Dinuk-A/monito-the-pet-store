import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const CustomersComp = () => {
    const [customers, setCustomers] = useState([]);

    //FETCH CUSTOMER DATA FROM API
    const fetchImages = async () => {
        try {
            const response = await axios.get('https://monitor-backend-rust.vercel.app/api/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    //RUN THIS FN IN EVERY PAGE LOADING
    useEffect(() => {
        fetchImages();
    }, []);

    return (
        // MAIN CONTAINER
        <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-md">
                <h2 className="text-blue-500 font-bold text-lg">Our lovely customers</h2>

                {/* SWIPER COMPONENT FOR CAROUSAL FEATURES */}
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    className="mt-4"
                >
                    {/* USE FETCHED CX LIST TO CREATE IMAGES(CAROUSAL SLIDES) */}
                    {customers.map((customer, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={customer.image}
                                alt="Customer"
                                className="w-full max-h-[70vh] object-cover rounded-md"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CustomersComp;
