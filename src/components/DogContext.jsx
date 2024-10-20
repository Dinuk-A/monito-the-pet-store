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
            const colors = ['Brown', 'White', 'Black', 'Golden', 'Spotted'];
            const randomCities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo'];
            const additionalInfo = "This is a loving dog that will be a great companion. Please provide a caring home.";

            for (let i = 1; i <= 50; i++) {
                const ageMonths = Math.floor(Math.random() * 60) + 1;
                const ageYears = Math.floor(ageMonths / 12);
                const monthsRemainder = ageMonths % 12;

                const publishedDate = new Date(2024, 1, 12);
                const formattedDate = publishedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                // Include both images in the dog object
                const images = [dog1, dog2];

                fakeDogs.push({
                    id: i,
                    name: `Dog ${i}`,
                    breed: breeds[i % 3],
                    gender: i % 2 === 0 ? 'Male' : 'Female',
                    color: colors[i % colors.length],
                    price: i * 1000,
                    SKU: `#10000${i}`,
                    age: `${monthsRemainder} Month${monthsRemainder !== 1 ? 's' : ''}, ${ageYears} Year${ageYears !== 1 ? 's' : ''}`,
                    vaccinated: 'Yes',
                    dewormed: 'Yes',
                    microchip: 'Yes',
                    location: randomCities[i % randomCities.length],
                    publishedDate: formattedDate,
                    additionalInfo: additionalInfo,
                    images: images // Store both images
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
