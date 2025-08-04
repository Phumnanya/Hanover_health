import React from "react";
import { Box, Image} from "@chakra-ui/react"

export default function Nav_logo() {

    return(
        <>
            <Box w={"fit-content"}>
            <Image src="/img/nav-logo.png" alt="Hanover logo" boxSize={"xs"} h={"120px"} objectFit={"cover"} />
            </Box>
        </>
    )
}

//<Avatar name='Hanover logo' src='/img/plain-logo.png' size={"2xl"} objectFit={"cover"} />

/**
 * <Heading bgGradient="linear(to-l, brand.vividpink, brand.vividazure, brand.vividazure)" 
                bgClip={"text"} fontSize={{ base: "3xl", md: "5xl" }} 
                fontWeight={"bold"}>
                    Hanover
                </Heading>
 */