import React, { createContext, useContext, useState, useEffect } from 'react';
import dog1 from '../assets/images/dog1.png';
import dog2 from '../assets/images/dog2.png';

const DogContext = createContext();

export const DogProvider = ({ children }) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchDogs = () => {
            const fakeDogs = [];
            const breeds = ['Small Dog', 'Medium Dog', 'Large Dog'];
            const colors = ['Red', 'Apricot', 'Black', 'Black & white', 'Silver' , 'Tan'];
            const randomCities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo'];
            const additionalInfo = "This is a loving dog that will be a great companion. Please provide a caring home.";

            //CREATE FAKE DOG OBJS TO SIMULATE THE FILTERING PROCESS
            for (let i = 1; i <= 50; i++) {
                
                const publishedDate = new Date(2024, 10, 18);
                const formattedDate = publishedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                // Include both images in the dog object
                const images = [dog1, dog2];

                fakeDogs.push({
                    id: i,
                    name: `Dog ${i}`,
                    breed: breeds[i % 3],
                    size : breeds[i % 3].split(' ')[0],
                    gender: i % 2 === 0 ? 'Male' : 'Female',
                    color: colors[i % colors.length],
                    price: i * 1000,
                    SKU: `#10000${i}`,
                    age: Math.ceil(Math.random()*12),
                    vaccinated: 'Yes',
                    dewormed: 'Yes',
                    microchip: 'Yes',
                    cert: 'Yes',
                    location: randomCities[i % randomCities.length],
                    publishedDate: formattedDate,
                    additionalInfo: additionalInfo,
                    images: images 
                });
            }
            setDogs(fakeDogs);
        };

        fetchDogs();
    }, []);

    return (
        <DogContext.Provider value={dogs}>
            {children}
        </DogContext.Provider>
    );
};

export const useDogs = () => {
    return useContext(DogContext);
};
