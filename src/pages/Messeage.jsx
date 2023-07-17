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
    useDisclosure,
    Text,
    Textarea,
    TagLabel,

} from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
const Message = () => {
    const [resolutionData, setResolutionData] = useState([])
    const [data, setData] = useState([])
    const [emergencyData, setEmergencyData] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const edata = [
        {
            emergencyID: 2,
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
            emergencyID: 5,
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
            solved: true

        }

    ]
    useEffect(() => {
        setEmergencyData(edata)
    }, [])


    const resolutionHandel = (id) => {
        console.log(id)

        Messagedata.map((ed) => {
            console.log(ed)
            if (ed.uID == id) {
                // console.log(ed)
                // resolutionData[0] = ed
                setResolutionData([ed])

            }
        })


        console.log(resolutionData)
        // console.log(resolutionData,emergencyData,data,rd)
        onOpen()
    }
   
    const Messagedata = [
        {
            Message:"massage",
            msgFrom: "name",
            replyFrom: "Avi Das",
            batchId: "874565",
            reply:"reply",
            solved: true,
            uID: "68745",
            policeName: "Pandey",
            ask: "ask",

        },
        {
            Message: "massage",
            msgFrom: "name",
            replyFrom: "Avi Das",
            batchId: "874565",
            reply: "reply",
            solved: false,
            uID: "87455",
            policeName: "Pandey",
            ask:"ask"

        }

    ]
    return (
        <>
            <Box minHeight={"600px"}>
                <Heading>Message</Heading>
                <TableContainer>
                    <Table variant='simple'>

                        <Thead bg={"rgb(22,119,255)"} color={"white"}>
                            <Tr>
                                <Th color={"white"}>Message</Th>
                                <Th color={"white"}>Location </Th>

                                <Th color={"white"}>Reply From</Th>
                                <Th color={"white"}>Batch Id </Th>

                                <Th color={"white"} >Resolution</Th>
                                



                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                Messagedata.map((Message) =>
                                    <Tr>
                                        
                                    <Td>{Message.Message}</Td>
                                    <Td >{Message.msgFrom}</Td>
                                    <Td >{Message.replyFrom}</Td>
                                    <Td >{Message.batchId}</Td>
                                        <Td ><Button style={{ backgroundColor: Message.solved ? 'green' : 'red' }} onClick={() => resolutionHandel(Message.uID)}>Resolution
                                            {/* {" "}  {Message.solved ? 'Solved' : 'Not Solved'} */}
                                    </Button></Td>
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
                            <Text>Batch Id :{resolutionData?.[0]?.batchId}</Text>
                            <Text>Asking For:{resolutionData?.[0]?.ask}</Text>
                            <Text>Solution : {resolutionData?.[0]?.solution || "No Solution"}</Text>
                            <Text>Status : {resolutionData?.[0]?.solved?'Solved' : 'Pending'}</Text>
                            {/* <TagLabel>Reply</TagLabel> */}
                            {/* <label htmlFor="">Reply</label> */}
                            <Textarea placeholder="reply.."></Textarea>
                            <Button>Reply</Button>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default Message
