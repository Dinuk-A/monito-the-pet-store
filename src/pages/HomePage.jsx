import FirstBannerComp from "../components/FirstBannerComp";
import DefaultPetsShowComp from "../components/DefaultPetsShowComp";
import ProductShowComp from "../components/ProductShowComp";
import sec_pic from "../assets/images/secondpic.png"
import partners_pic from "../assets/images/partners.png"
import third_pic from "../assets/images/thirdpic.png"
import Footer from "../components/FooterComp";


const HomePage = () => {
  return (
    <>
      {/* BANNER (HEADER IS INCLUDED) */}
      <FirstBannerComp />

      {/* DEFAULT DOGS LIST(BY API) */}
      <DefaultPetsShowComp />

      {/* 2ND BANNER */}
      <div className=" mx-auto flex items-center justify-center px-4 md:px-12 lg:px-24 rounded-b-3xl mt-8 ">
        <div className="container bg-blue-500 mx-auto flex flex-col lg:flex-row items-center justify-between">

          {/* Left Side: Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img src={sec_pic} alt="Woman holding a dog" className="max-h-[80vh] object-cover" />
          </div>

          {/* Right Side: Text and Buttons */}
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
              </button>
              <button className="bg-[#072D50] text-white font-medium px-6 py-3 rounded-full hover:bg-[#091A3C] transition duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2ND BANNER ENDS*/}

      {/*PRODUCTS CARD LIST (BY API) */}
      <ProductShowComp />

      {/*PARTNERING BRANDS LOGO LIST*/}
      <div className="container mx-auto py-12 hidden md:block">
        {/* Flexbox to align text left and button right */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xl font-medium text-gray-800">
            Proud to be part of <span className="text-blue-700 font-bold">Pet Sellers</span>
          </p>
          <button className="bg-transparent border-2 border-blue-700 text-blue-700 font-medium px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
            View all our sellers
          </button>
        </div>

        {/* Centered and wider logos */}
        <div className="flex justify-center">
          <img src={partners_pic} alt="Partners Logos" className="w-full max-w-6xl object-contain" />
        </div>
      </div>
      {/* PARTNERING BRANDS LOGO LIST* ENDS /}

      {/* 3 FAKE PET ARTICLES TO SHOWCASE >> NOT BY APIS >> HARDCODED */}
      <div className="bg-white p-4 rounded-lg shadow-md mx-4 md:mx-8 lg:mx-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Useful Pet Knowledge</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-4">
            <img src="{image}" alt="Pomeranian dog running" className="w-full h-auto max-w-sm rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-900 mt-2">What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
            <p className="text-sm text-gray-600 mt-1">The Pomeranian, also known as the Pomeranian Pom dog, is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...</p>

          </div>

          <div
            className="flex flex-col items-center justify-center p-4">
            <img src="image.jpg" alt="Dog diet" className="w-full h-auto max-w-sm rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-900 mt-2">Dog Diet You Need To Know</h3>
            <p className="text-sm text-gray-600 mt-1">Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...</p>

          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <img src="image.jpg" alt="Dog biting furniture" className="w-full h-auto max-w-sm rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-900 mt-2">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h3>
            <p className="text-sm text-gray-600 mt-1">Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</p>
          </div>
        </div>


        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View More</button>
        </div>
      </div>
      {/* SOME FAKE PET ARTICLES TO SHOWCASE ENDS*/}

      {/* 3RD BANNER */}
      <div className=" mt-8 flex items-center justify-center px-4 md:px-6 lg:px-12 xl:px-24 rounded-b-3xl">
        <div className="container bg-yellow-200 mx-auto flex flex-col lg:flex-row items-center justify-between p-4">

          {/* Left Side: Text and Buttons */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#072D50] mb-4">
              Adoption 🐶
            </h1>
            <p className="text-2xl">We Need Help. So Do They</p>
            <p className="text-lg text-gray-700 mb-8">
              Adopt a pet and give it a home. It will love you back unconditionally.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-[#072D50] text-white font-medium px-6 py-3 rounded-full hover:bg-[#091A3C] transition duration-300">
                Explore Now
              </button>

              <button className="border-2 border-[#072D50] text-[#072D50] font-medium px-6 py-3 rounded-full flex items-center hover:bg-[#072D50] hover:text-white transition duration-300">
                View Intro +
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end overflow-hidden">
            <img
              src={third_pic} // Make sure this path is correct
              alt="Woman holding a dog"
              className="h-auto max-h-[400px] object-cover transform rotate-90"
            />
          </div>
        </div>
      </div>
      {/* 3RD BANNER ENDS */}

      {/* FOOTER */}
      <Footer />
      {/* FOOTER ENDS */}


    </>
  );
};

export default HomePage;
