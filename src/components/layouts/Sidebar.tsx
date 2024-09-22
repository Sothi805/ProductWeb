import { useState } from "react";
import Logo from "../../assets/logo.png";
import SignInModal from "../SignInModal";

const NavBar = (props: any) => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleInput = () => {
    setIsVisible((prev) => !prev);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" w-full bg-[#7EACB5]">
      <div className="max-w-[1000px] bg-[#7EACB5] sm:max-w-[500px]: m-auto">
        <div className=" flex w-full justify-between items-center pt-2 pb-2 flex-wrap">
          <div className=" w-[65%] flex items-center justify-between sm:w-full flex-wrap">
            <img src={Logo} alt="logo" className="w-36 sm:m-auto" />
            <div className="relative sm:hidden">
              <input
                type="text"
                placeholder="Find Your Products..."
                className="w-80 py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            {/* mobile screen */}
            <div className=" hidden gap-2 sm:block py-2 sm:w-full sm:flex justify-between ">
              {isVisible && (
                <input
                  type="text"
                  placeholder="Find Your Products..."
                  className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              )}
              <svg onClick={toggleInput} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            {/*End mobile screen */}
          </div>
          <div className="flex gap-2">
            <button className="relative flex items-center justify-center  py-1 px-3 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none">
              <span className="absolute top-1 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                4
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>          </button>

            <button
              className="bg-red-500 border border-red-500 rounded-md shadow-md box-border text-white cursor-pointer inline-block font-sans text-base outline-none py-2 px-4 text-center select-none transition-opacity duration-200 hover:bg-transparent"
              onClick={openModal}
            >
              Log In
            </button>

            <SignInModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
      <div className="w-full bg-white shadow-lg">
        <div className="h-[50px] flex gap-3 items-center max-w-[1000px] mx-auto">
          <span className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </span>
          <span className="text-[15px] cursor-pointer">
            Options
          </span>
          <span className="text-[15px] cursor-pointer">
            All Products
          </span>
          <span className="text-[15px] cursor-pointer">
            Promotions
          </span>
          <span className="text-[15px] cursor-pointer">
            Category
          </span>
          <span className="text-[15px] cursor-pointer">
            Blog
          </span>
        </div>
      </div>

    </div>
  );
};

export default NavBar;

