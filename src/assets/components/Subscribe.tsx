import React from "react";
import { Heading, Input, InputGroup, InputRightAddon, VStack, Button, Text } from "@chakra-ui/react";

export default function Subscribe() {
    return(
        <div className="text-center w-full my-7">
            <VStack fontFamily={"verdana"}>
                <Heading size={{base: "md", md: ""}}>
                    Want to stay updated?
                </Heading>
                <InputGroup w={{base: "90%", md: "60%"}} size={"lg"}>
                    <Input type="email" placeholder="Enter email" focusBorderColor="lime" bg={"white"} borderRadius={"3xl"}  />
                    <Button bg={"brand.vividpink"} color={"white"} borderRadius={"lg"} p={"10px"} size={{base: "lg", md: ""}}>
                    Subscribe</Button>
                </InputGroup>
                <Text>Subscribe for regular health tips and alerts.</Text>
            </VStack>
        </div>
    )
}