import React from "react";

interface tiles {
    pic: string;
    alt: string;
    topic: string;
    desc: string;
}

export default function OV_Diseases_Flexbox({pic, alt, topic, desc} : tiles) {
    return(
        <div className="flex flex-row justify-between items-center w-full border-solid border-2 hover:border-black
         focus:border-black active:border-black">
            <div className="w-1/2 md:w-1/6">
                <img src={`/img/${pic}`} alt={`/img/${alt}`} className="w-full md:h-32 object-contain 
                md:object-cover" />
            </div>
            <div className="p-4 w-1/2 md:w-full">
                <h3 className="md:my-2">{topic}</h3>
                <p className="line-clamp-3">{desc}</p>
            </div>
        </div>
    )
}