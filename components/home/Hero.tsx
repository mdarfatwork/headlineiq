"use client";
import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const subscribers = ["2", "6", "2", "9", "1"];

const SubscriberList = () => {
  return (
    <span>
      {subscribers.map((num, index) => (
        <span
          key={index}
          className="inline-flex items-center justify-center font-bold text-[#00bbe4] bg-[rgba(0,187,228,0.1)] p-2 mx-0.5"
        >
          {num}
        </span>
      ))}
    </span>
  );
};

const HeroSection = memo(() => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center bg-white px-6 lg:px-10 py-10 lg:py-16">
      {/* Subscribers Sent */}
      <div className="text-center my-6">
        <p className="text-gray-600 text-sm md:text-base lg:text-lg flex flex-col sm:flex-row items-center gap-4">
          <motion.span
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            viewport={{ once: true }}>
            We&apos;ve sent over
          </motion.span>{" "}<SubscriberList />{" "}
          <motion.span
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            viewport={{ once: true }}>
            Headlines to Subscribers
          </motion.span>
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1] xl:leading-[1.5] font-bold text-center text-black mb-8 capitalize">
        <span className="text-gray-600 font-semibold">Experience</span>{" "}
        <span>the future of news</span>{" "}
        <span className="text-gray-600 font-semibold">with</span>{" "}
        <span>AI-driven personalized</span>{" "}
        <span className="text-gray-600 font-semibold">content</span>{" "}
        <span>texted directly to you.</span>
      </h1>

      {/* Start 15-Day Trial Now */}
      <motion.div
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
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;