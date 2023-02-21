import React from "react";
import { Link } from 'gatsby';
import Image from "../images/logo_f_p-removebg-preview.png";
import '../styles/global.css';

export function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="w-screen flex fixed z-10 flex-wrap items-center justify-between bg-primary px-2  mb-3">
            <div className="w-full px-4 h-full mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative bg-primary  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        to="/"
                        className="text-sm flex font-bold leading-relaxed mr-4 whitespace-nowrap uppercase "
                        href="#pablo"
                    >
                        <img className="w-16 py-1" src={Image} alt="Zamzam logo" />
                    </Link>
                    <button
                        className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <div className={navbarOpen ? "open" : " "} id="nav-icon4">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col h-full lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary"
                                href="#pablo"
                            >
                                <span className="ml-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/speisekarte"
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary"
                                href="#pablo"
                            >
                                <span className="ml-2">Speisekarte</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/catering"
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary"
                                href="#pablo"
                            >
                                <span className="ml-2">Catering</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/kontakt"
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary"
                                href="#pablo"
                            >
                                <span className="ml-2">Kontakt</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}