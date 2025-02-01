import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="relative text-white bg-transparent ">
      {/* <div className="absolute inset-0 -z-10">
        <Bg />
      </div> */}

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="pl-9">
          <Link to="/">
            <img
              src="/prada001.jpg"
              alt="Logo"
              className="h-12 w-12 border-2 border-white rounded-full"
            />
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex pr-9 space-x-4">
          <a
            href="https://instagram.com/pradhyumnya_patil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/74038190/235294013-a33e5c43-a01c-43f6-b44d-a406d8b4ab75.gif"
              alt="Instagram"
              width="50"
              height="50"
            />
          </a>

          <a
            href="https://linkedin.com/in/pradhunya-gawande-9a61a3304"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/74038190/235294012-0a55e343-37ad-4b0f-924f-c8431d9d2483.gif"
              alt="LinkedIn"
              width="50"
              height="50"
            />
          </a>

          <a
            href="https://x.com/pradhunya_patil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/74038190/235294011-b8074c31-9097-4a65-a594-4151b58743a8.gif"
              alt="Twitter/X"
              width="50"
              height="50"
            />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://user-images.githubusercontent.com/74038190/235294015-47144047-25ab-417c-af1b-6746820a20ff.gif"
              alt="Placeholder"
              width="50"
              height="50"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
