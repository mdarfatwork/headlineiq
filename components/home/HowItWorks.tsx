"use client"
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HowItWorks1 = dynamic(() => import("./svg/HowItWorks1"), { ssr: false });
const HowItWorks2 = dynamic(() => import("./svg/HowItWorks2"), { ssr: false });
const HowItWorks3 = dynamic(() => import("./svg/HowItWorks3"), { ssr: false });

const HowItWorks = () => {
    const steps = [
        {
            Svg: HowItWorks1,
            title: "Take the quiz",
            desc: "Complete a brief survey to tailor your news preferences",
        },
        {
            Svg: HowItWorks2,
            title: "Scanning news 24/7",
            desc: "Our AI scours the web, fact-checks across multiple sources",
        },
        {
            Svg: HowItWorks3,
            title: "Personalized News",
            desc: "Receive concise, relevant news texts directly to your phone",
        },
    ];
    return (
        <section className="max-w-7xl mx-auto my-4 px-8 md:my-8 lg:my-12">
            <div className="flex flex-col gap-6 lg:flex-row">
                {steps.map(({ Svg, title, desc }, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between rounded-md bg-gray-100 p-4 text-center lg:text-left"
                    >
                        <span className="max-w-xs h-auto mx-auto flex items-center justify-center">
                            <Svg aria-labelledby={`step-title-${index}`} />
                        </span>
                        <motion.div
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.6 }}
                            viewport={{ once: true }}>
                            <h2
                                id={`step-title-${index}`}
                                className="text-lg lg:text-xl font-bold mb-2"
                            >
                                {title}
                            </h2>
                            <p className="text-gray-600">{desc}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks