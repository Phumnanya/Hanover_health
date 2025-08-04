import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

interface links {
    heading: string;
    link0: string
    link1: string
    link2: string
    link3: string
}

export default function FooterLinks({heading, link0, link1, link2, link3} : links) {
    return(
        <div className="flex flex-col justify-center items-center font-verdana p-3 w-1/2 md:w-1/3">
            <div>
                <h4 className="w-full text-start md:font-bold">{heading}</h4>
                <p className="w-full text-start"><Link to={"/"}>{link0}</Link></p>
                <p className="w-full text-start"><Link to={"/"}>{link1}</Link></p>
                <p className="w-full text-start"><Link to={"/"}>{link2}</Link></p>
                <p className="w-full text-start"><Link to={"/"}>{link3}</Link></p>
            </div>
        </div>
    )
}