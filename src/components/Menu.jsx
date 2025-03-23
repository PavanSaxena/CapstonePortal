import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Menu = ({ name, branch }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-2 text-sky-950 text-2xl font-semibold py-2 rounded-sm hover:text-blue-700">
                {name}
                <span className={`transition-transform duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    {isOpen ? <FaCaretUp /> : <FaCaretDown />}
                </span>
            </button>

            <div
                className={`absolute right-0 md:right-0 w-80 bg-white shadow-lg rounded-md transition-all duration-200 ${
                    isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                }`}
            >
                {branch.map((b, index) => (
                    <a
                        key={index}
                        href="#"
                        className="block px-4 py-5 text-xl text-gray-800 hover:bg-gray-200"
                    >
                        {b}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Menu;