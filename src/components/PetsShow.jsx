import axios from "axios";
import { useEffect, useState } from "react";

const PetsShow = () => {
    // to maintain pets info
    const [pets, setPets] = useState([]);

    // get the pets info list via axios
    const getPetsInfo = () => {
        axios.get('https://monitor-backend-rust.vercel.app/api/pets')
            .then(res => {
                setPets(res.data); // store fetched data in pets state
            })
            .catch(err => console.log(err));
    };

    //runs it every time defaultly when the page loads
    useEffect(() => {
        getPetsInfo();
    }, []);

    return (
        <>
            <div className="container mx-auto my-8 p-4">
                <p className="text-sm">What's new?</p>
                <div className="flex justify-between items-start">
                    <p className="text-lg">Take a look</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full">View More</button>
                </div>

                {/* Pets info cards list below from here */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {pets.map((pet) => (
                        <div key={pet.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
                            <img
                                src={pet.image}
                                alt={pet.breed}
                                className="w-full h-[70%] object-contain" />
                            <div className="p-2 flex flex-col h-[30%]">
                                <h2 className="text-xl font-semibold">{pet.id} - {pet.breed}</h2>
                                <p className="text-gray-700">Gender - {pet.gender} , Age - {pet.age}</p>
                                <p className="text-gray-700 font-bold">{pet.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PetsShow;
