"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdEditCalendar } from "react-icons/md";
import { motion } from "framer-motion";

const TopHeadlines = () => {
  const headlines = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        title: `Headline Title ${i + 1}`,
        desc: `This is the description of headline ${i + 1}. It provides a brief overview of the news content and is capped at four lines with an ellipsis if it exceeds the limit.`,
        date: new Date(2025, 0, 22), // January 22, 2025
        imgSrc: "/images/top_headline1.jpg",
      })),
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Debounced scroll handling
  const handleScroll = useCallback(
    (direction: "left" | "right") => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = container.offsetWidth;
      const maxScroll = container.scrollWidth - container.offsetWidth;

      const newScrollPosition =
        direction === "right"
          ? Math.min(scrollPosition + scrollAmount, maxScroll)
          : Math.max(scrollPosition - scrollAmount, 0);

      setScrollPosition(newScrollPosition);
      container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    },
    [scrollPosition]
  );

  return (
    <section className="w-11/12 mx-auto max-w-7xl py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <motion.h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          viewport={{ once: true }}
        >
          Top Headlines
        </motion.h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll Left"
            title="Scroll Left"
            disabled={scrollPosition === 0}
            className={`bg-[#00bbe4] text-white p-3 rounded-full opacity-80 active:opacity-100 ${scrollPosition === 0 ? "opacity-20 cursor-not-allowed" : ""
              }`}
          >
            <GoArrowLeft size={24} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll Right"
            title="Scroll Right"
            disabled={
              !!containerRef.current &&
              scrollPosition ===
              containerRef.current.scrollWidth - containerRef.current.offsetWidth
            }
            className={`bg-[#00bbe4] text-white p-3 rounded-full opacity-80 active:opacity-100 ${!!containerRef.current &&
              scrollPosition ===
              containerRef.current.scrollWidth - containerRef.current.offsetWidth
              ? "opacity-20 cursor-not-allowed"
              : ""
              }`}
          >
            <GoArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Headlines */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {headlines.map(({ id, title, desc, date, imgSrc }) => (
          <div
            key={id}
            className="flex-shrink-0 bg-gray-200 rounded-md p-4 w-[90%] sm:w-[48%] md:w-[32%] lg:w-[24%]"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-md mb-4">
              <Image
                src={imgSrc}
                alt={title}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Title */}
            <motion.h3 className="text-lg font-bold text-black mb-2"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              viewport={{ once: true }}>{title}</motion.h3>
            {/* Description */}
            <motion.p className="text-sm text-gray-600 line-clamp-4"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              viewport={{ once: true }}>{desc}</motion.p>
            {/* Date */}
            <motion.div className="flex items-center justify-center text-gray-600 mt-4"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              viewport={{ once: true }}>
              <MdEditCalendar className="mr-2" />
              <span>{date.toLocaleDateString("en-US", { dateStyle: "long" })}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopHeadlines;