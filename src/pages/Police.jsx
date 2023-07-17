import React, { useEffect, useState } from 'react';

import {
    Box, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Image,
} from "@chakra-ui/react"
import logop from "../assets/logop.jpg"
const Police = () => {
    const policedata = [
        {
            batchid: 1,
            name: "name",
            
            email: "eg@example.com",
            image:"img",
            designation: "Officer in Charge",
            state: "Maharashtra",
            city: "Pune",
            policeStation: "Kothrud Peth",
            pincode: "987451",
            phoneNo: "987456325",
            aadhar:"8745874589"
        }

    ]
    return (
        <>
            <Box minHeight={"600px"}>
                <Heading>Police</Heading>
                <TableContainer>
                    <Table variant='simple'>

                        <Thead bg={"rgb(22,119,255)"} color={"white"} >
                            <Tr>
                                <Th color={"white"}>Batch ID </Th>
                                <Th color={"white"}>Name </Th>
                                <Th color={"white"}>Image </Th>
                                <Th color={"white"}>Aadhar</Th>
                                <Th color={"white"}>Email</Th>
                                <Th color={"white"}>Phone No.</Th>
                                <Th color={"white"}>Designation</Th>
                                <Th color={"white"}>State</Th>
                                <Th color={"white"}>City</Th>
                                <Th color={"white"}>Police Station</Th>
                                <Th color={"white"}>Pin Code</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {policedata.map((police) =>
                                <Tr>
                                    <Td >{police.batchid}</Td>
                                    <Td >{police.name}</Td>
                                    <Td><Image borderRadius={"50%"} width="60px" src={logop}></Image></Td>
                                    <Td >{police.aadhar}</Td>

                                    <Td >{police.email}</Td>
                                    <Td >{police.phoneNo}</Td>

                                    <Td>{police.designation} </Td>
                                    <Td >{police.state}</Td>

                                    <Td >{police.city}</Td>
                                    <Td >{police.policeStation}</Td>
                                    <Td >{police.pincode}</Td>



                                </Tr>
                            )}

                        </Tbody>

                    </Table>
                </TableContainer>

            </Box>
        </>
    )
}

export default Police
