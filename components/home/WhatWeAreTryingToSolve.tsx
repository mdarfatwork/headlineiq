"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WhatWeAreTryingToSolve = () => {
  const boxes = [
    {
      imgSrc: "/images/efficiency.svg",
      title: "Efficiency",
      desc: "Stop endless scrolling trying to find news",
    },
    {
      imgSrc: "/images/non-biased.svg",
      title: "Non-Biased",
      desc: "Diverse sources ensure balanced news.",
    },
    {
      imgSrc: "/images/affordable.svg",
      title: "Affordable",
      desc: "Equivalent to two cups of coffee per month",
    },
    {
      imgSrc: "/images/simplicity.svg",
      title: "Simplicity",
      desc: "We do the work; you get the news",
    },
  ];

  return (
    <section className="w-full bg-gray-100 p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <motion.div className="text-center mb-8 max-w-3xl mx-auto"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">What we are trying to solve</h2>
          <p className="text-gray-600 text-sm lg:text-base mt-2 lg:mt-4">
            Headlines is designed for efficiency, providing concise, fact-checked news texts
            based on your preferences, saving you time and money while ensuring a balanced
            view of the world.
          </p>
        </motion.div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map(({ imgSrc, title, desc }, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 flex flex-col gap-3 shadow-sm"
            >
              {/* SVG */}
              <Image
                src={imgSrc}
                alt={title}
                width={60}
                height={60}
                className="w-12 h-12"
                loading="lazy"
                priority={false}
              />
              {/* Title */}
              <motion.h3 className="text-lg font-bold text-black"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 10, opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                viewport={{ once: true }}>{title}</motion.h3>
              {/* Description */}
              <motion.p className="text-gray-600"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 10, opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                viewport={{ once: true }}>{desc}</motion.p>
            </div>
          ))}
        </div>

        <motion.span className="w-full mt-4 md:mt-8 lg:mt-12 flex items-center justify-center"
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/sign-up"
            className="bg-[#00bbe4] text-white px-6 py-3 lg:px-8 lg:py-4 text-lg lg:text-xl rounded-full transition-colors hover:bg-white hover:text-[#00bbe4] border border-[#00bbe4] font-bold"
          >
            Start 15-Day Trial Now
          </Link>
        </motion.span>
      </div>
    </section>
  );
};

export default WhatWeAreTryingToSolve;