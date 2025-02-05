"use client";

import React from "react";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#27272A] text-white py-8 mt-5">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold hover:text-[#00bbe4] transition-colors cursor-pointer">
            HEADLINEIQ
          </h2>
          <p className="mt-2 max-w-xs">
            Embrace the future of news delivery with our AI-powered personalization.
          </p>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Products</h3>
          <ul className="space-y-2">
            {["Features", "How It Works", "Pricing", "Customer Feedback", "Top Headlines"].map(
              (item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-[#00bbe4] transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            {["Terms of Service", "Privacy Policy"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#00bbe4] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook"
              title="Visit Facebook"
              className="hover:text-[#00bbe4] transition-colors"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit X (formerly Twitter)"
              title="Visit X (formerly Twitter)"
              className="hover:text-[#00bbe4] transition-colors"
            >
              <FaXTwitter size={20} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram"
              title="Visit Instagram"
              className="hover:text-[#00bbe4] transition-colors"
            >
              <FaSquareInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-11/12 max-w-7xl mx-auto my-6 border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-sm">
        Copyright 2025 HeadlineIQ. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;