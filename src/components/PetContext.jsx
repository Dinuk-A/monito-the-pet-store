import React, { createContext, useContext, useState, useEffect } from 'react';
import dog1 from '../assets/images/dog1.png';
import dog2 from '../assets/images/dog2.png';

//CREATES A NEW CONTEXT TO HOLD FAKE DOG DATA
const DogContext = createContext();

//FUNCTIONAL COMP TO PROVIDE dogs TO OTHER COMPS
export const DogProvider = ({ children }) => {

    //STATES TO HANDLE DOGS , THEIR UPDATES
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchDogs = () => {

            //THIS ARRAY WILL STORE DOG OBJECTS
            const fakeDogs = [];

            //PRE DEFINED DATA TO SUPPORT CREATE DOGS OBJS
            const breeds = ['Small Dog', 'Medium Dog', 'Large Dog'];
            const colors = ['Red', 'Apricot', 'Black', 'Black & white', 'Silver' , 'Tan'];
            const randomCities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo'];
            const additionalInfo = "This is a loving dog that will be a great companion. Please provide a caring home.";

            //CREATE 50 FAKE DOG OBJS TO SIMULATE THE FILTERING PROCESS
            for (let i = 1; i <= 50; i++) {
                
                const publishedDate = new Date(2024, 10, 18);
                const formattedDate = publishedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
                const images = [dog1, dog2];

                //STORE DOGS TO THE ARRAY
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

            //UPDATE THE 'dogs' STATE
            setDogs(fakeDogs);
        };

        fetchDogs();
    }, []);

    return (
        //PASSING dogs PROPS DATA TO ANY CHILDREN(ANY COMP) WHO IS WRAPPED WITH DOGCONTEXT.PROVIDER
        <DogContext.Provider value={dogs}>
            {children}
        </DogContext.Provider>
    );
};

//CUSTOM HOOK TO RETURN THE VALUE OF DOGCONTEXT
export const useDogs = () => {
    return useContext(DogContext);
};
