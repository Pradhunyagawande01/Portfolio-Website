import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <nav
        className="bg-transparent text-[#4A7766] p-4 shadow-lg w-[90%] mt-4 fixed top-4 rounded-lg border border-orange-500 backdrop-blur-md"
        style={{
          boxShadow: "0 0 15px rgba(255, 165, 0, 0.7)",
        }}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <a
            href="#home"
            className="text-xl font-semibold tracking-wide hover:text-orange-500 transition duration-300"
          >
            MyWebsite
          </a>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-orange-500 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
