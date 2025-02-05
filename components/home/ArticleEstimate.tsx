"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ArticleEstimate = () => {
  return (
    <section className="w-11/12 mx-auto max-w-7xl rounded-md relative overflow-hidden">
      {/* Background */}
      <Image
       src="/images/attracting-top-talent.webp"
       alt="Attracting Top Talent"
       className="absolute inset-0 object-cover object-center blur-sm"
       fill={true}
       loading="lazy"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-12 px-6">
        {/* Bold Text */}
        <motion.h1 className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          viewport={{ once: true }}
        >
          3,000,000+
        </motion.h1>
        {/* Description */}
        <motion.p className="text-white text-sm md:text-base lg:text-lg max-w-md mx-auto mt-4"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          viewport={{ once: true }}
        >
          Estimated articles make it to printed and online platforms every day.
        </motion.p>
        {/* Button */}
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/sign-up"
            className="mt-6 text-[#00bbe4] bg-white px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-6 text-lg lg:text-xl rounded-full transition-colors hover:text-white hover:bg-gray-950 font-bold"
          >
            Start 15-Day Trial Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleEstimate;