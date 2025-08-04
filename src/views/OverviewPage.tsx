import React from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";
import Nav_logo from "../assets/components/Nav_logo";
import DesktopSearch from "../assets/components/Desktop-search-icon";
import MobileSearch from "../assets/components/Search-icon-mobile";
import Head from "../assets/components/Head";
import Diseases from "../assets/components/Tiles-contents";
import OV_Diseases_Flexbox from "../assets/components/Overview-Flexbox";
import Subscribe from "../assets/components/Subscribe";
import FooterLinks from "../assets/components/Footer-links";
import FooterLogo from "../assets/components/Footer-logo";
import { Link } from "react-router-dom";

function OverviewPage() {
    return(
        <>
            {/**Navigation Bar */}
            <Flex flexDir={"row"} justifyContent={"space-between"} alignItems={"center"} w={"100%"} 
            p={{ base: "0px 0px", md: "0px 16px" }}>
                <Box w={"fit-content"}><Nav_logo /></Box>
                <Box w={"40%"} paddingTop={"10px"} display={{ base: "none", md: "inline-block" }}><DesktopSearch /></Box>
                <Box w={"40%"} paddingTop={"15px"} display={{ base: "inline-block", md: "none" }}><MobileSearch /></Box>
            </Flex>
            <Divider boxShadow={"dark-lg"} />

            {/**Data and Insights */}
            <div className="w-full p-4 md:p-8 mt-2">
                <Head
                word="Communicable Diseases Data & Insights"
                paragraph="Our data comes from reputable public health APIs and organizations like the 
                World Health Organization (WHO) and Centers for Disease Control and Prevention (CDC). 
                We provide easy-to-read statistics and prevention tips for each disease."
                />
            </div>
            {/**Diseases tiles */}
            <div className="flex flex-col justify-center items-center font-verdana w-full md:w-4/5 mx-auto p-5">
                {/**D1 */}
                <div className="w-full m-2 box-border">
                    <Link to={"/info/hepatitis_b"}>
                        <OV_Diseases_Flexbox
                        pic="hepatitis.jpg" alt="Hepatits" topic="Hepatitis B"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D2 */}
                <div className="w-full m-2 box-border">
                    <Link to={"/info/hiv"}>
                        <OV_Diseases_Flexbox
                        pic="hiv.jpg" alt="HIV/AIDS" topic="HIV/AIDS"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D3 */}
                <div className="w-full m-2 box-border">
                    <Link to={"/info/malaria"}>
                        <OV_Diseases_Flexbox
                        pic="malaria.jpg" alt="Malaria" topic="Malaria"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D4 */}
                <div className="w-full m-2 box-border">
                    <Link to={"/info/yellow_fever"}>
                        <OV_Diseases_Flexbox
                        pic="yellow_fever.jpg" alt="yellow_fever" topic="Yellow Fever"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D5 */}
                <div className="w-full m-2 box-border">
                    <Link to={"/info/tuberculosis"}>
                        <OV_Diseases_Flexbox
                        pic="tuberculosis.jpg" alt="Tuberculosis" topic="Tuberculosis"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
            </div>

            {/**Footer notes */}
            <footer className="w-full h-fit p-5 mt-10 bg-accent">
                {/**Subscribe for updates */}
                <Subscribe />

                {/**Footer links */}
                <div className="flex flex-row flex-wrap justify-between md:justify-evenly items-center 
                my-5 w-full">
                    
                    <FooterLinks 
                    heading="About us" link0="Careers" link1="FAQ" link2="Library" link3="Publications" 
                    />
                    <FooterLogo />
                    <FooterLinks 
                    heading="Contact us" link0="Offices" link1="Reports" link2="Licensing" 
                    link3="Procurement" 
                    />
                </div>
                <p className="text-center">© 2025 Hanover Healthcare</p>
                <p className="text-center w-full">
                    <Link to={"/"}>| Privacy Policy </Link>
                    <Link to={"/"}>| Contact Us </Link>
                    <Link to={"/"}>| About Us |</Link>
                </p>
            </footer>
        </>
    )
}


export default OverviewPage;
