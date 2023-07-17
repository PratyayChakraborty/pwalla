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
} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Rating = () => {
    const RatingData = [
        {
            RatingId: 1,
            name: "name",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451"
        }

    ]
    const policeData = [
        {
            batchid: 1,
            name: "name",
            rating: 4.5,
            feedBack:"Good Work"
        },
        {
            batchid: 10,
            name: "name",
            rating: 2.5,
            feedBack: "Poor Performance"
        },
        {
            batchid: 5,
            name: "name",
            rating: 5,
            feedBack: "Excellent"
        }

    ]
    const policeStationData = [
        {
            officer_in_Charge: "Officer in Charge",
            state: "Maharashtra",
            city: "Pune",
            policeStation: "Kothrud Peth",
            pinCode: "987451",
            rating: 4.7,
            feedBack:"Good"
        }

    ]
    return (
        <>
            <Box minHeight={"600px"}>
                <Heading>Rating</Heading>

                <Tabs>
                    <TabList>
                        <Tab>Police</Tab>
                        <Tab>Police Station</Tab>
                        
                        
                    </TabList>

                    <TabPanels>
                        
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Batch ID </Th>
                                            <Th color={"white"}>Name </Th>
                                            <Th color={"white"}>Rating</Th>
                                            <Th color={"white"}>Feed Back</Th>


                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {policeData.map((Rating) =>
                                            <Tr>
                                                <Td>{Rating.batchid}</Td>
                                                <Td >{Rating.name}</Td>
                                                <Td >{Rating.rating}</Td>

                                                <Td >{Rating.feedBack}</Td>
                                
                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} color={"white"}>
                                        <Tr>
                                            <Th color={"white"}>Police Station </Th>
                                            <Th color={"white"}>Officer in Charge </Th>
                                            <Th color={"white"}>State</Th>
                                            <Th color={"white"}>City</Th>
                                            <Th color={"white"}>PinCode</Th>
                                            <Th color={"white"}>Rating </Th>
                                            <Th color={"white"}>Feedback</Th>



                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {policeStationData.map((Rating) =>
                                            <Tr>
                                                <Td>{Rating.policeStation}</Td>
                                                <Td >{Rating.officer_in_Charge}</Td>
                                                <Td >{Rating.state}</Td>

                                                <Td >{Rating.city}</Td>
                                                <Td >{Rating.pinCode}</Td>
                                                <Td >{Rating.rating}</Td>

                                                <Td >{Rating.feedBack}</Td>

                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>
                        
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

export default Rating
