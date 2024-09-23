import React, { useState } from "react";

const Card = () => {
  // Create state to track whether the button is favorited or not
  const [isFavorited, setIsFavorited] = useState(false);

  // Function to toggle the favorite state
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
    const [isModalOpen, setIsModalOpen] = useState(false);

   
  return (
    <div className="max-w-xs rounded-lg overflow-hidden cursor-pointer shadow-sm border border-gray-200 bg-white hover:-translate-y-1 hover:shadow-gray-400 transition-all duration-300">
      {/* Image Section */}
      <img
        className="w-full h-50 object-cover transition-transform duration-300 transform hover:scale-105"
        src="https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fea5ab3bc-cd92-4270-81a5-25b3680246fe.png&w=3840&q=100"
        alt="Product"
      />

      {/* Content Section */}
      <div className="min-dd-sm:pb-4 min-dd-sm:px-4 min-dd-sm:pt-3 dd-sm:pb-3 dd-sm:px-2 dd-sm:pt-2">
        {/* Title */}
        <h3 className="min-md:text-[19px] md:text-[17px] sm:text-[16px] dd-sm:text-[15px] font-semibold text-gray-700 line-clamp-3">
          show-image show-image show-image show-image Skin1004 Hyalu-Cica
          Water-Fit Sun Serum Spf50+ Pa++++
        </h3>

        {/* By */}
        <p className="min-dd-sm:text-sm dd-sm:text-[12px] text-gray-500 mt-2 mb-[7px]">
          By: Mony
        </p>

        {/* Category */}
        <p className="min-dd-sm:text-sm dd-sm:text-[12px] text-gray-500">
          Category:{" "}
          <span className="bg-gray-400 px-2 ml-1 pt-[2px] pb-[4px] rounded-md min-dd-sm:text-[12px] dd-sm:text-[12px] text-white">
            Electronics
          </span>
        </p>

        {/* Discount */}
        <p className="min-dd-sm:text-sm dd-sm:text-[12px] text-red-500 mt-[7px]">
          Discount: 20% OFF
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-gray-600 mt-2">$199.99</p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-[10px] mt-4">
          <button className="flex items-center bg-blue-500 text-white text-sm py-2 px-[10px] rounded hover:bg-blue-600 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </button>
          <button
            className="flex gap-3 items-center bg-[#FFF4EA] text-gray-500 text-[12px] px-[10px] rounded hover:bg-gray-400 transition duration-200"
            onClick={toggleFavorite}
          >
            Favorite
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={isFavorited ? "red" : "currentColor"}
              className="bi bi-heart-fill text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
