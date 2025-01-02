import React from "react";

const Navbar = ({ toggleLoginPopup }) => {
  return (
    <>
      <nav className="bg-white/70 shadow-lg backdrop-blur-sm">
        <div className="container flex justify-between items-center ">
          {/* Logo Section */}
          <a
            href="#"
            className="text-3xl font-bold
          text-gray-800"
          >
            Logo
          </a>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul
              className="flex font-semibold
            justify-center items-center gap-6"
            >
              <li>
                <a
                  href=""
                  className="text-gray-800
                hover:text-gray-600 inline-block px-4 
                py-4 select-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <button
                onClick={() => {
                  toggleLoginPopup();
                }}
              >
                Login
              </button>
            </ul>
          </div>

          {/* mobile menu section*/}
          <div className="md:hidden">
            <button
              onClick={() => {
                toggleLoginPopup();
              }}
              className="text-xl font-semibold
                text-gray-800 py-4 px-4"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
