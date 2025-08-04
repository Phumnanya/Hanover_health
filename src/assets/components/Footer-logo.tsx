import React from "react";
import { Image } from "@chakra-ui/react";

export default function FooterLogo() {
    return(
        <div className="hidden md:block">
            <Image src="/img/removebg-logo.png" alt="healthcare" boxSize={"xs"} h={"150px"} objectFit={"contain"} />
        </div>
    )
}