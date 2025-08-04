import React from "react";
import { Flex, Box, Divider, Skeleton, Stack, Alert, AlertIcon, AlertDescription, AlertTitle } from "@chakra-ui/react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import Nav_logo from "../assets/components/Nav_logo";
import DesktopSearch from "../assets/components/Desktop-search-icon";
import MobileSearch from "../assets/components/Search-icon-mobile";
import FooterLinks from "../assets/components/Footer-links";
import FooterLogo from "../assets/components/Footer-logo";
import Subscribe from "../assets/components/Subscribe";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchDiseaseData } from "./Disease";
import Plot from "react-plotly.js";

interface DiseaseEntry {
  disease: string;
  country: string;
  start_year: number;
  end_year: number;
  cases: {
    TimeDim: number;
    NumericValue: number;
  }[];
}

function InfoPage() {
    const { diseaseName } = useParams();
    console.log("diseaseName from params:", diseaseName);

    const { data, isLoading, error} = useQuery<DiseaseEntry[]>({
        queryKey: ["diseaseData"],
        queryFn: fetchDiseaseData,
    });

    if (isLoading) return(
        <Stack>
            <Skeleton height={"96"} />
            <Skeleton height="32" />
            <Skeleton height="32" />
        </Stack>
    );
    if (error instanceof Error) return(
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Error loading data</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
        </Alert>
    )
    const filtered = data?.filter(
  (entry) =>
    entry.disease?.toLowerCase().replace(/\s+/g, "_") ===
    diseaseName?.toLowerCase()
);


    const countries = ["UGA", "KEN", "COD"];
    const countryNames: Record<string, string> = {
        UGA: "Uganda",
        KEN: "Kenya",
        COD: "Congo DR",
    };

  const years = [2020, 2021, 2022, 2023, 2024];

  const chartData: Record<number, Record<string, number>> = {};
  years.forEach((year) => {
    chartData[year] = {};
    countries.forEach((code) => {
      chartData[year][code] = 0; // Default to 0
    });
  });

  filtered?.forEach((entry) => {
    entry.cases?.forEach((c: any) => {
      const year = c.TimeDim;
      const value = Number(c.NumericValue) || 0;
      const country = entry.country;

      if (chartData[year] && chartData[year][country] !== undefined) {
        chartData[year][country] = value;
      }
    });
  });

  const plotData = years.map((year) => ({
    x: countries.map((code) => countryNames[code]),
    y: countries.map((code) => chartData[year][code]),
    name: `${year}`,
    type: "bar",
  }));

    console.log("diseaseName from params:", diseaseName);
console.log("All diseases in data:");
data?.forEach((entry: any) => console.log(entry.disease));

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

            {/**Name */}
            <div className="bg-disease-photo w-full h-60 p-2 md:px-10 bg-fixed bg-cover 
            bg-no-repeat bg-center relative">
                <div className="bg-white text-black bottom-0 p-2 absolute font-verdana w-fit">
                    <h1>{diseaseName}</h1>
                </div>
            </div>

            {/**Geographical location/description */}
            <div className="p-10 font-verdana my-7 mx-auto">
                <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, 
                ante. Donec eu libero sit amet quam egestas semper.
                </p>
                <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, 
                ante. Donec eu libero sit amet quam egestas semper.
                </p>
            </div>

            {/**Table Data */}
            <div className="w-4/5 mx-auto">
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                        <Tr>
                            <Th>Country</Th>
                            <Th>Year</Th>
                            <Th isNumeric>Reported cases</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {plotData.map((yearSet) =>
                            yearSet.x.map((country: string, index: number) => (
                            <Tr key={`${yearSet.name}-${country}`}>
                                <Td>{country}</Td>
                                <Td>{yearSet.name}</Td>
                                <Td isNumeric>{yearSet.y[index]}</Td>
                            </Tr>
                            ))
                        )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>

            {/**BarChart of reported number of cases */}
            <div className="p-4">
            <h1 className="text-2xl font-bold capitalize mb-4">
                {diseaseName} - Reported Cases
            </h1>

            <div className="w-full h-fit mb-7">
                <Plot
                data={plotData}
                layout={{
                    title: {
                    text: "Reported Cases by Country and Year",
                    x: 100000,
                    },
                    barmode: "group",
                    xaxis: { title: "Country" },
                    yaxis: { title: "Reported Cases" },
                }}
                config={{ responsive: true }}
                style={{ width: "100%", height: "100%" }}
                />
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

export default InfoPage;