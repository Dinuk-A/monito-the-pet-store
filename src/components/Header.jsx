import monito_logo from "../assets/images/logo.png"

// reusable header for all pages
const Header = () => {

    return (
        <nav className=" py-4 bg-[#f4e3c9]">
            <div className="container mx-auto flex items-center justify-between">

                {/* logo first */}
                <div className="flex items-center space-x-2">
                    <img src={monito_logo} alt="logo" className="h-10" />

                </div>

                {/* menu items */}
                <ul className="flex space-x-8 text-[#072D50] text-lg">
                    <li><a href="/home" className="font-bold text-blue-900 hover:text-[#FFA500]">Home</a></li>
                    <li><a href="/category" className=" font-bold hover:text-[#FFA500]">Category</a></li>
                    <li><a href="/about" className=" font-bold hover:text-[#FFA500]">About</a></li>
                    <li><a href="/contact" className="hover:text-[#FFA500] font-bold ">Contact</a></li>
                </ul>

                {/* search input */}
                <div className="flex items-center bg-white rounded-full shadow-md">
                    <input
                        type="text"
                        placeholder="Search something here!"
                        className="w-72 px-4 py-2 rounded-l-full text-sm focus:outline-none"
                    />
                </div>

                {/* join commumity btn */}
                <div className="flex items-center space-x-4">
                    <button className="bg-[#072D50] text-white px-4 py-2 rounded-full hover:bg-[#091A3C]">
                        Join the community
                    </button>
                    <div className="relative">
                        <select
                            className="bg-transparent text-[#072D50] text-lg font-medium focus:outline-none cursor-pointer"
                        >
                            <option value="vnd" className="text-black">VND</option>
                            <option value="usd" className="text-black">USD</option>
                            <option value="eur" className="text-black">EUR</option>
                        </select>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Header;