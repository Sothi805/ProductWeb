import React, { useState } from "react";
import Logo from "../assets/alogo.png";
import SignInModal from "../component/SignInModal"
const MenuBar = () => {
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
              <i className="bi bi-search cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
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
              <i
                className="bi bi-search px-3 py-2 rounded-lg cursor-pointer   text-black bg-white"
                onClick={toggleInput}
              ></i>
            </div>
            {/*End mobile screen */}
          </div>
          <div className="flex gap-2">
            <button className="relative flex items-center justify-center  py-1 px-3 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none">
              <span className="absolute top-1 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                4
              </span>
              <i className="bi bi-cart4 shadow-lg"></i>
            </button>

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
    </div>
  );
};

export default MenuBar;
