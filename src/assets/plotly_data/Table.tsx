import React from "react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";


export default function TableData() {
    return(
        <div className="w-4/5 mx-auto">
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                    <Tr>
                        <Th>Country</Th>
                        <Th>Year</Th>
                        <Th isNumeric>Deaths</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Nigeria</Td>
                        <Td>2020</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Ghana</Td>
                        <Td>2021</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>Benin</Td>
                        <Td>2022</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                    <Tr>
                        <Td>Togo</Td>
                        <Td>2023</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                    <Tr>
                        <Td>Cameroon</Td>
                        <Td>2024</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}