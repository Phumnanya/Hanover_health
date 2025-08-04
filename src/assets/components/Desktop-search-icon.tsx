import React from "react";
import { Search2Icon, Input, InputRightElement, InputGroup, Box, IconButton } from "@chakra-ui/icons";

export default function DesktopSearch() {
    return(
        <Box w={"100%"}>
            <InputGroup size={"lg"}>
                <Input placeholder="Search disease by name" />
                <InputRightElement width={"4.5rem"}>
                    <IconButton bg={"brand.vividpink"} color={"brand.vividazure"} aria-label="search" p={"10px"} 
                    icon={<Search2Icon fontSize={"3xl"} />} />
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}