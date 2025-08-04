import React from "react";
import Nav_logo from "../assets/components/Nav_logo";
import DesktopSearch from "../assets/components/Desktop-search-icon";
import MobileSearch from "../assets/components/Search-icon-mobile";
import { Flex, Box, Divider } from "@chakra-ui/react";
import DesignedHeading from "../assets/components/Designed-heading";
import Head from "../assets/components/Head";
import Diseases from "../assets/components/Tiles-contents";
import Carousel from "../assets/components/Carousel";
import MissionImg from "../assets/components/Mission-img";
import Subscribe from "../assets/components/Subscribe";
import FooterLinks from "../assets/components/Footer-links";
import FooterLogo from "../assets/components/Footer-logo";
import { Link } from "react-router-dom";

function LandingPage() {
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

            {/**Hero Section */}
            <div className="bg-hero-pattern w-full h-fit md:h-3/6 p-2 md:p-10 bg-fixed bg-cover bg-no-repeat bg-center">
                <div className="w-3/5 md:w-2/5 p-2 font-verdana">
                    <DesignedHeading heading="Stay Informed! Stay Healthy!" /><br />
                    <p>Learn about communicable diseases, understand the risks, and discover how you can protect 
                        yourself and your community.
                    </p>
                    <button type="button" className="bg-primary text-white rounded-3xl p-3 mt-10">
                        Learn more
                    </button>
                </div>
            </div>

            {/**Mission Statement */}
            <Flex flexDir={{ base: "column", md: "row" }} w={"100%"} justifyContent={"center"} alignItems={"center"}>
                <div className="md:w-1/2 self-start p-8">
                    <Head 
                    word="Our Mission"
                    paragraph="Our mission is to empower everyone with accurate, up-to-date information about 
                    communicable diseases like malaria, tuberculosis, COVID-19, and more. By spreading awareness, 
                    we can help prevent outbreaks and save lives."
                    />
                </div>
                <div className="md:w-1/2 m-auto">
                    <MissionImg />
                </div>
            </Flex>

            {/**Data and Insights */}
            <div className="w-full p-8 mt-5">
                <Head
                word="Communicable Diseases Data & Insights"
                paragraph="Our data comes from reputable public health APIs and organizations like the 
                World Health Organization (WHO) and Centers for Disease Control and Prevention (CDC). 
                We provide easy-to-read statistics and prevention tips for each disease."
                />
            </div>
            {/**Diseases tiles */}
            <div className="md:flex flex-row justify-center items-center font-verdana w-full mb-10 p-5 hidden">
                {/**D1 */}
                <div className="w-1/4 m-2 box-border">
                    <Link to={"/info/hepatitis_b"}>
                        <Diseases
                        pic="hepatitis.jpg" alt="Hepatitis B" topic="Hepatitis B"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D2 */}
                <div className="w-1/4 m-2 box-border">
                    <Link to={"/info/hiv"}>
                        <Diseases
                        pic="hiv.jpg" alt="HIV/AIDS" topic="HIV/AIDS"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D3 */}
                <div className="w-1/4 m-2 box-border">
                    <Link to={"/info/malaria"}>
                        <Diseases
                        pic="malaria.jpg" alt="malaria" topic="Malaria"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
                {/**D4 */}
                <div className="w-1/4 m-2 box-border">
                    <Link to={"/overviewpage"}>
                        <Diseases
                        pic="malaria.jpg" alt="malaria" topic="Malaria"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
                        ante eget aliquam venenatis. Donec congue at ligula in cursus"
                        />
                    </Link>
                </div>
            </div>
            {/**Diseases Carousel */}
            <div className="md:hidden">
                <Carousel />
            </div>

            {/**Footer notes */}
            <footer className="w-full h-fit p-5 bg-accent">
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


export default LandingPage;

