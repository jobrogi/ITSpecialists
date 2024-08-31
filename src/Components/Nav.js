import React from "react";

function Navbar() {
  return (
    <div className="bg-black w-full h-24 text-white fixed top-0 z-50">
      <div className="flex w-full justify-center h-full items-center ">
        <button
          className="absolute z-10 text-4xl font-monts font-semibold"
          title="This button has been clicked X times"
        >
          Total IT Specialists{" "}
        </button>
      </div>

      <ul className="flex w-full h-full justify-between items-center absolute top-0 px-20">
        <li className="" title="Toggle site theme here!">
          <button> Toggle Button Here</button>
        </li>
        <li className="" title="Login Or Signup!">
          <button className="text-2xl text-black font-monts font-semibold bg-white rounded-lg p-2 transition-all hover:border-4 hover:border-white">
            Sign Up <i class="fa-solid fa-user ps-2"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
