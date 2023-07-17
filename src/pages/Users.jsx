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

import prf from "../assets/prf.png"
import { useDispatch, useSelector } from 'react-redux';
import { UserDetailsAction } from '../Store/User Details/UserDetails.Action';



const User = () => {
    const userdata = [
        {
            userid: 1,
            name: "name",
            image:"prf",
            email: "eg@example.com",
            gender: "male",
            state: "Maharashtra",
            city: "Pune",
            pincode: "987451",
            aadhar: "987456965",
            policeStation: "Khandar",
            address: "purani gali",
            phoneNo:"9134567890",
        }

    ]

    const  data  = useSelector((store) => store.UserDetails);
    const dispatch = useDispatch();
    console.log(data)
    
    useEffect(() => {
        dispatch(UserDetailsAction());
    }, []);
    return (
        <>
            <Box minHeight={"600px"}>
                <Heading>User</Heading>
                <TableContainer>
                    <Table variant='simple'>

                        <Thead bg={"rgb(22,119,255)"} >
                            <Tr >
                                <Th color={"white"}>User ID </Th>
                                <Th color={"white"}>Name </Th>
                                <Th color={"white"}>Image</Th>
                                <Th color={"white"}>Aadhar </Th>
                                <Th color={"white"}>Phone No </Th>
                                <Th color={"white"}>Email</Th>
                                <Th color={"white"}>Gender </Th>
                                <Th color={"white"}>State</Th>
                                <Th color={"white"}>City</Th>
                                <Th color={"white"}>Pin Code</Th>
                                <Th color={"white"}>Address </Th>
                                <Th color={"white"}>Police Station</Th>
                                

                                

                            </Tr>
                        </Thead>
                        <Tbody>
                            {userdata.map((User) =>
                                <Tr>
                                    <Td>{User.userid}</Td>
                                    <Td >{User.name}</Td>
                                    <Td ><Image src={prf}  w={"60px"} borderRadius={"50%"}></Image></Td>

                                    <Td >{User.aadhar}</Td>
                                    <Td >{User.phoneNo}</Td>

                                    <Td >{User.email}</Td>
                                    <Td >{User.gender}</Td>
                                    <Td >{User.state}</Td>

                                    <Td >{User.city}</Td>
                                    <Td>{User.pincode}</Td>
                                    <Td>{User.address}</Td>
                                    <Td>{User.policeStation}</Td>



                                </Tr>
                            )}

                        </Tbody>

                    </Table>
                </TableContainer>

            </Box>
        </>
    )
}

export default User
