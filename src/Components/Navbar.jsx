import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">My Portfolio</div>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                    <li><a href="#about" className="hover:text-orange-500">About</a></li>
                    <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
