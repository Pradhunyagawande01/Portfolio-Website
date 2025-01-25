import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white bg-transparent-100">
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

        {/* Links */}
        <div className="flex pr-9">
          <Link to="https://instagram.com/pradhyumnya_patil">
            <img
              src="https://user-images.githubusercontent.com/74038190/235294013-a33e5c43-a01c-43f6-b44d-a406d8b4ab75.gif"
              alt="Instagram"
              width="50"
              height="50"
            />
          </Link>

          <Link to="https://linkedin.com/in/pradhunya-gawande-9a61a3304">
            <img
              src="https://user-images.githubusercontent.com/74038190/235294012-0a55e343-37ad-4b0f-924f-c8431d9d2483.gif"
              alt="LinkedIn"
              width="50"
              height="50"
            />
          </Link>

          <Link to="https://x.com/@pradhunya_patil">
            <img
              src="https://user-images.githubusercontent.com/74038190/235294011-b8074c31-9097-4a65-a594-4151b58743a8.gif"
              alt="X"
              width="50"
              height="50"
            />
          </Link>

          <Link to="">
            <img
              src="https://user-images.githubusercontent.com/74038190/235294015-47144047-25ab-417c-af1b-6746820a20ff.gif"
              alt="X"
              width="50"
              height="50"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
