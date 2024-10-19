import w_w_dog from "../assets/images/firstpic.png"
import Header from "./Header"

const FirstBanner = () => {
    return (
        <>
        {/* header nav bar */}
            <Header></Header>

            <div className="bg-[#f4e3c9] h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 rounded-b-3xl">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">


                    {/* Left Side: Text and Buttons */}
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#072D50] mb-4">
                            One More Friend <span className="mt-0 text-3xl"> Thousands More Fun!</span> 
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                            We have 200+ different pets that can meet your needs!
                        </p>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <button className="border-2 border-[#072D50] text-[#072D50] font-medium px-6 py-3 rounded-full flex items-center hover:bg-[#072D50] hover:text-white transition duration-300">
                                View Intro +
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg> */}
                            </button>
                            <button className="bg-[#072D50] text-white font-medium px-6 py-3 rounded-full hover:bg-[#091A3C] transition duration-300">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <img src={w_w_dog} alt="Woman holding a dog" className="max-h-[80vh] object-cover" />
                    </div>
                </div>
            </div>
        </>
    );

}


export default FirstBanner;