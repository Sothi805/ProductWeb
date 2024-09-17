import React from "react";

const MenuBar = () => {
  return (
    <div className="w-full bg-[#e1f5f5] ">
      <div className="max-w-[1000px] h-[6rem] flex justify-between items-center mx-auto">
        <img src="src\assets\logo.PNG" alt=""  className="w-48"/>
        <div className="mr-[10rem] flex items-center">
          <input
            className="w-[20rem] px-3 outline-none border-2 border-gray-400 rounded-l-md h-[35px] "
            type="text"
            name=""
            id=""
          />
          <span className="bg-gray-400 -ml-1 h-[35px] flex items-center px-3 rounded-r-md">
            Search
          </span>
        </div>
        <div>
          <span>Icon</span>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
