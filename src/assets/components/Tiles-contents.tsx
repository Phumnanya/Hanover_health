import React from "react";

interface tiles {
    pic: string;
    alt: string;
    topic: string;
    desc: string;
}

export default function Diseases({pic, alt, topic, desc} : tiles) {
    return(
        <>
            <img src={`/img/${pic}`} alt={`/img/${alt}`} className="w-full h-60 m-auto object-cover" />
            <h3 className="my-3">{topic}</h3>
            <p className="line-clamp-3">{desc}</p>
        </>
    )
}

//<Image src={`/img/${pic}`} alt={`/img/${alt}`} boxSize={"xs"} objectFit={"cover"} />