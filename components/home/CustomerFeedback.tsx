"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alice Johnson",
    review:
      "Headlines provides concise and fact-checked news tailored to my preferences. It has saved me so much time, and I love how balanced the news is!",
    rating: 5,
  },
  {
    name: "John Smith",
    review:
      "The service is excellent! It’s so refreshing to get news without bias, and the affordability makes it accessible to everyone.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    review:
      "Headlines keeps me updated with concise summaries. It’s perfect for my busy schedule. Highly recommended!",
    rating: 4.5,
  },
  {
    name: "Michael Brown",
    review:
      "I love how easy it is to use this service. The simplicity and efficiency of Headlines are unmatched.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    review:
      "This has completely changed how I consume news. The fact-checking and diverse sources make it stand out.",
    rating: 5,
  },
  {
    name: "Daniel Wilson",
    review:
      "Affordable and simple to use. It’s my go-to for staying informed without wasting time on endless scrolling.",
    rating: 4,
  },
];

const CustomerFeedback = () => {

  return (
    <motion.section className="w-11/12 mx-auto max-w-7xl py-12"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 10, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-black mb-2 lg:mb-4">They seem to like us</h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Real feedback from our valued customers highlights how Headlines has
          made their lives easier by providing concise, reliable, and
          cost-effective news updates.
        </p>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(({ name, review, rating }, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md p-4 shadow-sm flex flex-col gap-3"
          >
            {/* Rating */}
            {renderStars(rating)}
            {/* Name */}
            <h3 className="font-bold text-black">{name}</h3>
            {/* Review */}
            <p className="text-gray-600">{review}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star key={`full-${index}`} fillColor="#00BBE4" />
        ))}
      {halfStar && <Star fillColor="#00BBE4" half />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Star key={`empty-${index}`} fillColor="#D1D5DB" />
        ))}
    </div>
  );
};

const Star = memo(
  ({ fillColor, half = false }: { fillColor: string; half?: boolean }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        width="16"
        height="16"
        className="mr-1"
        aria-label="Star rating"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.31359 0.205137L10.5966 5.05692L15.7 5.83512C15.8321 5.85566 15.9417 5.95266 15.9829 6.0855C16.024 6.21834 15.9896 6.36408 15.8941 6.46169L12.202 10.2374L13.0737 15.57C13.0966 15.7075 13.0428 15.8466 12.9348 15.9288C12.8269 16.011 12.6836 16.0219 12.5655 15.9569L8.00052 13.4397L3.43557 15.9576C3.31748 16.0228 3.17417 16.0121 3.06616 15.93C2.95816 15.8478 2.9043 15.7086 2.92735 15.571L3.79908 10.2374L0.105869 6.46169C0.0103498 6.36408 -0.0240346 6.21834 0.0171182 6.0855C0.058271 5.95266 0.167857 5.85566 0.299974 5.83512L5.40341 5.05692L7.68745 0.205137C7.74557 0.0796823 7.86718 0 8.00052 0C8.13386 0 8.25547 0.0796823 8.31359 0.205137Z"
          fill={half ? `url(#half)` : fillColor}
        />
        {half && (
          <defs>
            <linearGradient id="half" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="50%" stopColor={fillColor} />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
        )}
      </svg>
    );
  }
);
Star.displayName = "Star";

export default CustomerFeedback;