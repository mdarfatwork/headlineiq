"use client"
import React from 'react'
import Image from 'next/image'

const InfiniteLogosHorizontal = () => {
    const logos = [
        "/images/BBC_logo.svg",
        "/images/CBS_News_logo_(2020)_logo.svg",
        "/images/CNN_logo.svg",
        "/images/Forbes_logo.svg",
        "/images/NBC_logo.svg",
        "/images/USA_logo.svg",
    ];

    return (
        <div className="w-full inline-flex flex-nowrap bg-[#27272A] py-4 lg:py-6 overflow-hidden">
            {Array.from({ length: 6 })
                .flat()
                .map((_, outerIndex) => (
                    <div key={outerIndex} className="flex items-center gap-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pr-10">
                        {logos.map((logo, LogoIndex) => (
                            <Image
                                src={logo}
                                key={LogoIndex}
                                alt=""
                                width={125}
                                height={125}
                                loading="lazy"
                                role="presentation" 
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default InfiniteLogosHorizontal;