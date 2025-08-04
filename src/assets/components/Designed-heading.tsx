import React from "react";
import { Heading } from "@chakra-ui/react";

interface Design {
        heading: string;
    }

export default function DesignedHeading({heading}: Design) {
    
    return(
        <Heading bgGradient="linear(to-l, brand.vividpink, black, brand.vividpink)" 
        bgClip={"text"} fontSize={{ base: "3xl", md: "5xl" }} 
        fontWeight={"extrabold"}>
            {heading}
        </Heading>
    )
}