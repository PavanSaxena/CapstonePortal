import React from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu"
const campus = [
    {
        name: "Staff",
        branch: ["A to Z",
            "Domain",
        ],
    },
    {
        name: "EC Campus",
        branch: ["Computer Science",
            "Electronics and Communications",
        ],
    },
    {
        name: "RR Campus",
        branch: ["Computer Science",
            "Electronics and Communications",
            "Electrical",
            "Mechanical",
        ],
    }
]

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4 w-screen fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center w-full px-6">
                <div className="flex items-center">
                    <img 
                        src="https://staff.pes.edu/static/images/pes-favicon/PESU-new-logo.png" 
                        alt="PES"
                        className="h-16"
                    />
                    <div className="ml-20">
                        <SearchBar />
                    </div>
                </div>
                <div className="flex gap-20 mr-10 items-center">
                    {campus.map((campus, index) => {
                        return <Menu key={index} {...campus} />
                    })}
                    {/* <button className="text-2xl bg-blue-950 text-white rounded-md px-5 py-2">Login</button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
