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
    Button,
    
    Text,
} from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
// import axios from "axios";

const Emergency = () => {
    const [resolutionData, setResolutionData] = useState([])
    const [data, setData] = useState([])
    const [emergencyData, setEmergencyData] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const edata = [
        {
            userId: 8744,
            batchid: 1,
            name: "name",
            subject: "Subject2",
            email: "eg@example.com",
            phone: "8745874596",
            location: "location",
            policeStation: "Kothrud Peth",
            date: "12/02/23",
            time: "20:30",
            solution: "solution given2",
            policeName: "avi das",
            need: "asking need1",
            solved: false
        },
        {
            userId: 8745,
            batchid: 10,
            name: "name",
            subject: "Subject5",
            email: "eg@example.com",
            phone: "8745877596",
            location: "location",
            policeStation: "Kothrud Peth",
            date: "12/07/23",
            time: "20:30",
            solution: null,
            policeName: "avi das",
            need: "asking need2",
            solved:true

        }

    ]


    useEffect(() => {
        setEmergencyData(edata)
    },[])


    const resolutionHandel = (id) => {
        console.log(id)

        emergencyData.map((ed) => {
            console.log(ed)
            if (ed.emergencyID == id) {
                // console.log(ed)
                // resolutionData[0] = ed
                setResolutionData([ed])
                    
            }
            })


        console.log(resolutionData)
        // console.log(resolutionData,emergencyData,data,rd)
        onOpen()
    }
    const [userData, setUserData] = useState([])
    
    const modal1 = useDisclosure()
    const users = [
        {
            userId: "8744",

        },
        {
            userId: "8745",

        },
    ]
    const userHandel = (id) => {
        console.log(id)

        users.map((ed) => {
            console.log(ed.userId, id)
            if (ed.userId == id) {

                setUserData([ed])

            }
        })


        console.log(userData)
        // console.log(resolutionData,emergencyData,data,rd)
        modal1.onOpen()
    }

    const [policeData, setPoliceData] = useState([])

    const modal2 = useDisclosure()
    const police = [
        {
            batchId: "1",

        },
        {
            batchId: "10",

        },
    ]
    const policeHandel = (id) => {
        console.log(id)

        police.map((ed) => {
            console.log(ed.batchId, id)
            if (ed.batchId == id) {

                setPoliceData([ed])

            }
        })


        console.log(userData)
        // console.log(resolutionData,emergencyData,data,rd)
        modal2.onOpen()
    }

    return (
        <>
            <Box minHeight={"600px"}>
                <Heading>Emergency</Heading>
                <TableContainer>
                    <Table variant='simple'>

                        <Thead bg={"rgb(22,119,255)"} color={"white"}>
                            <Tr>
                                <Th color={"white"}>User ID</Th>
                                <Th color={"white"}>Ask For Help </Th>
                                <Th color={"white"}>Email</Th>
                                <Th color={"white"}>Phone No</Th>
                                <Th color={"white"}>Location</Th>
                                <Th color={"white"}>Date</Th>
                                <Th color={"white"}>Time</Th>
                                <Th color={"white"}>Police Station</Th>
                                <Th color={"white"}>Batch ID</Th>
                                <Th color={"white"}>Resolution</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* emergencyData */}
                            {edata.map((Emergency) =>
                                <Tr>
                                    <Td onClick={() => userHandel(Emergency.userId)}>{Emergency.userId}</Td>
                                    <Td >{Emergency.name}</Td>
                                    <Td >{Emergency.email}</Td>
                                    <Td>{Emergency.phone} </Td>
                                    <Td >{Emergency.location}</Td>
                                    <Td >{Emergency.date}</Td>
                                    <Td >{Emergency.time}</Td>
                                    <Td >{Emergency.policeStation}</Td>
                                    <Td onClick={() => policeHandel(Emergency.batchid)}>{Emergency.batchid}</Td>
                                    <Td><Button style={{ backgroundColor: Emergency.solved ? 'green' : 'red' }} onClick={() => resolutionHandel(Emergency.emergencyID)}>Resolution</Button></Td>



                                </Tr>
                            )}

                        </Tbody>

                    </Table>
                </TableContainer>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        {/* {resolutionData?.[0]?.subject} */}
                        <ModalHeader>{resolutionData?.[0]?.subject}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Resolved By :{resolutionData?.[0]?.policeName}</Text>
                            <Text>Batch Id :{resolutionData?.[0]?.batchid}</Text>
                            <Text>AskingFor:{resolutionData?.[0]?.need}</Text>
                            <Text>Solution : {resolutionData?.[0]?.solution || "No Solution"}</Text>
                            <Text>Status : {resolutionData?.[0]?.solved?'Solved' : 'Pending'}</Text>
                            
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        {/* {resolutionData?.[0]?.subject} */}
                        <ModalHeader>User Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* <Text>Resolved By :{userData?.[0]?.policeName}</Text> */}
                            <Text>User Id :{userData?.[0]?.userId}</Text>
                            {/* <Text>AskingFor:{userData?.[0]?.need}</Text> */}
                            {/* <Text>Solution : {userData?.[0]?.solution || "No Solution"}</Text> */}
                            {/* <Text>Status : {userData?.[0]?.solved ? 'Solved' : 'Pending'}</Text> */}

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={modal1.onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        {/* {resolutionData?.[0]?.subject} */}
                        <ModalHeader>Police Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* <Text>Resolved By :{userData?.[0]?.policeName}</Text> */}
                            <Text>Batch Id :{policeData?.[0]?.batchId}</Text>
                            {/* <Text>AskingFor:{userData?.[0]?.need}</Text> */}
                            {/* <Text>Solution : {userData?.[0]?.solution || "No Solution"}</Text> */}
                            {/* <Text>Status : {userData?.[0]?.solved ? 'Solved' : 'Pending'}</Text> */}

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={modal2.onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default Emergency
