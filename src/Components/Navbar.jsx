import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav
        className="bg-transparent text-[#4A7766] p-4 shadow-lg w-[90%] sm:w-[95%] md:w-[80%] mt-4 fixed top-4 rounded-lg border border-[#4A7766] backdrop-blur-md z-50"
        style={{
          boxShadow: "0 0 15px rgba(74, 119, 102, 0.4)",
        }}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <a
            href="#home"
            className="text-xl font-semibold tracking-wide hover:text-shadow transition duration-300"
            style={{
              textShadow: "0px 0px 10px rgba(74, 119, 102, 0)", // Initial shadow (invisible)
            }}
            onMouseEnter={(e) => (e.target.style.textShadow = "0px 0px 20px rgba(74, 119, 102, 1)")}
            onMouseLeave={(e) => (e.target.style.textShadow = "0px 0px 10px rgba(74, 119, 102, 0)")}
          >
            MyWebsite
          </a>
          <ul className="flex space-x-4 sm:space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-shadow transition duration-300"
                style={{
                  textShadow: "0px 0px 10px rgba(74, 119, 102, 0)", // Initial shadow (invisible)
                }}
                onMouseEnter={(e) => (e.target.style.textShadow = "0px 0px 20px rgba(74, 119, 102, 1)")}
                onMouseLeave={(e) => (e.target.style.textShadow = "0px 0px 10px rgba(74, 119, 102, 0)")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-shadow transition duration-300"
                style={{
                  textShadow: "0px 0px 10px rgba(74, 119, 102, 0)", // Initial shadow (invisible)
                }}
                onMouseEnter={(e) => (e.target.style.textShadow = "0px 0px 20px rgba(74, 119, 102, 1)")}
                onMouseLeave={(e) => (e.target.style.textShadow = "0px 0px 10px rgba(74, 119, 102, 0)")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-shadow transition duration-300"
                style={{
                  textShadow: "0px 0px 10px rgba(74, 119, 102, 0)", // Initial shadow (invisible)
                }}
                onMouseEnter={(e) => (e.target.style.textShadow = "0px 0px 20px rgba(74, 119, 102, 1)")}
                onMouseLeave={(e) => (e.target.style.textShadow = "0px 0px 10px rgba(74, 119, 102, 0)")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-shadow transition duration-300"
                style={{
                  textShadow: "0px 0px 10px rgba(74, 119, 102, 0)", // Initial shadow (invisible)
                }}
                onMouseEnter={(e) => (e.target.style.textShadow = "0px 0px 20px rgba(74, 119, 102, 1)")}
                onMouseLeave={(e) => (e.target.style.textShadow = "0px 0px 10px rgba(74, 119, 102, 0)")}
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
