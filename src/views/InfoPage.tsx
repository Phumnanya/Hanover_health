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

  //description for each disease
  const diseaseDescriptions: Record<string, string> = {
    tuberculosis: "TB is caused by bacteria (Mycobacterium tuberculosis) and it most often affects the lungs. TB is spread through the air when people with lung TB cough, sneeze or spit. 
      A person needs to inhale only a few germs to become infected. Every year, 10 million people fall ill with tuberculosis (TB). Despite being a preventable and curable disease, 
    1.5 million people die from TB each year – making it the world’s top infectious killer. TB is the leading cause of death of people with HIV and also a major contributor to antimicrobial 
    resistance. About a quarter of the global population is estimated to have been infected with TB bacteria, but most people will not go on to develop TB disease and some will 
      clear the infection. Those who are infected but not (yet) ill with the disease cannot transmit it. People infected with TB bacteria have a 5–10% lifetime risk of falling ill with TB. 
        Those with compromised immune systems, such as people living with HIV, malnutrition or diabetes, or people who use tobacco, have a higher risk of falling ill.",
    
    hepatitis: "Hepatitis is an inflammation of the liver that is caused by a variety of infectious viruses and non-infectious agents leading to a range of health problems, 
      including severe liver damage and cancer, some of which can be fatal. There are 5 main strains of the hepatitis virus, referred to as types A, B, C, D and E. While they 
      can all cause liver disease, they differ in important ways including modes of transmission, severity of the illness, geographical distribution and prevention methods. 
        In particular, types B and C lead to chronic disease in hundreds of millions of people and together are the most common cause of liver cirrhosis, liver cancer and viral 
        hepatitis-related deaths. They are among the main infectious disease killers, causing an estimated 1.3 million deaths per year. An estimated 304 million people worldwide 
          live with hepatitis B or C, and for most, testing and treatment remain beyond reach.",
      
    hiv: "Human immunodeficiency virus (HIV) is an infection that attacks the body’s immune system, specifically the white blood cells called CD4 cells. HIV destroys these CD4 cells, 
            weakening a person’s immunity against opportunistic infections, such as tuberculosis and fungal infections, severe bacterial infections and some cancers. WHO recommends 
      that every person who may be at risk of HIV should access testing. People at increased risk of acquiring HIV should seek comprehensive and effective HIV prevention, testing and 
        treatment services. HIV infection can be diagnosed using simple and affordable rapid diagnostic tests, as well as self-tests. It is important that HIV testing services follow 
          the 5Cs: consent, confidentiality, counselling, correct results and connection with treatment and other services. ",
      
    malaria: "Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. It is preventable and 
            curable. There are 5 parasite species that cause malaria in humans, and 2 of these species – Plasmodium falciparum and Plasmodium vivax – pose the greatest threat. 
            In 2024, nearly half of the world's population was at risk of malaria. While sub-Saharan Africa carries a disproportionately high share of the global malaria burden, 
            the WHO Regions of South-East Asia and Eastern Mediterranean, Western Pacific, and the Americas also report significant numbers of cases. There were an estimated 282 million 
            cases of malaria in 2024, and the estimated number of malaria deaths stood at 610 000. In 2024, the African Region was home to 94% and 95% of malaria cases and deaths, 
              respectively. Children under 5 years of age are most at risk of severe complications from malaria; in 2024, they accounted for nearly 75% of all malaria deaths in the 
              WHO African Region.",
  
    yellow fever: "Yellow fever is a viral disease that is transmitted to humans by the bites of infected mosquitoes. It is prone to epidemics and is preventable with a vaccine. 
      These day-biting mosquitoes breed around houses (domestic), in forests or jungles (wild), or in both habitats (semi-domestic). Yellow fever is a high-impact, high-threat disease, 
      with a risk of international spread, representing a potential threat to global health security. Occasionally, infected travellers have exported cases to countries that are free 
      of yellow fever. However, the disease can only spread easily to a new country if there are mosquito species able to transmit it, specific climatic conditions, and the animal 
        reservoir needed to maintain it.",
  }


    const description = diseaseDescriptions[diseaseName?.toLowerCase() || ""];
    

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
                {description || "No description available for this disease."}
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
