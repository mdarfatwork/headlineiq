"use client"
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const MdMenu = dynamic(() => import("react-icons/md").then((mod) => mod.MdMenu));
const MdOutlineClose = dynamic(() =>
    import("react-icons/md").then((mod) => mod.MdOutlineClose)
);

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Features", href: "#features" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Customer Feedback", href: "#feedback" },
    ];

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    return (
        <nav className="max-w-7xl mx-auto">
            <div className="mx-auto px-6 lg:px-10 flex items-center justify-between min-h-20">
                {/* Heading */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold lg:font-extrabold text-black cursor-pointer">HEADLINEIQ</h1>

                {/* Links for larger screens */}
                <div className="hidden lg:flex items-center space-x-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-[#00bbe4] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex items-center space-x-6">
                    {/* Sign In */}
                    <Link
                        href="/sign-in"
                        className="text-[#00bbe4] border border-[#00bbe4] px-4 py-2 rounded-full hover:bg-[#00bbe4] hover:text-white transition-colors text-base md:text-lg"
                    >
                        Sign In
                    </Link>
                    {/* Start for Free */}
                    <Link
                        href="/sign-up"
                        className="bg-[#00bbe4] text-white px-4 py-2 rounded-full transition-colors text-base md:text-lg hover:bg-white border border-[#00bbe4] hover:text-[#00bbe4]"
                    >
                        Start for Free
                    </Link>
                </div>

                {/* More Icon for medium and smaller screens */}
                <div className="flex lg:hidden items-center space-x-4">
                    {/* Start for Free */}
                    <a
                        href="#start"
                        className="bg-[#00bbe4] text-white px-4 py-2 rounded-full transition-colors text-base md:text-lg hover:bg-white border border-[#00bbe4] hover:text-[#00bbe4] hidden sm:block"
                    >
                        Start for Free
                    </a>
                    {/* More Button */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Open menu"
                        className="text-gray-600 text-2xl"
                    >
                        <MdMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    className="fixed inset-0 bg-white z-50 p-8 flex flex-col items-center justify-center space-y-6"
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Close menu"
                        className="absolute top-4 right-4 text-2xl text-gray-600"
                    >
                        <MdOutlineClose />
                    </button>

                    {/* Links */}
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xl text-gray-600 hover:text-[#00bbe4] transition-colors text-center"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        href="/sign-in"
                        className="text-[#00bbe4] border border-[#00bbe4] w-full text-center py-2 rounded-full hover:bg-[#00bbe4] hover:text-white transition-colors text-base md:text-lg"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/sign-in"
                        className="bg-[#00bbe4] text-white w-full text-center py-2 rounded-full transition-colors text-base hover:bg-white border border-[#00bbe4] hover:text-[#00bbe4] sm:hidden"
                    >
                        Start For Free
                    </Link>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar