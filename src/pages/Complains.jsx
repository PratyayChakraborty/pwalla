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
    Text,
    Button,
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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Complain = () => {
    const [userData, setUserData] = useState([])
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const modal1=useDisclosure()
    const users = [
        {
            userId: 8744,
        
        },
        {
            userId: 8745,

        },
        {
            userId: 87411,

        },
    ]
    const userHandel = (id) => {
        console.log(id)

        users.map((ed) => {
            console.log( ed.userId,id)
            if (ed.userId == id) {
                
                setUserData([ed])

            }
        })


        console.log(userData)
        // console.log(resolutionData,emergencyData,data,rd)
        modal1.onOpen()
    }

    const complainData = [
        {
            complainId: 1,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",
            vehicleNo: "wb8745",
            missingLocation: "missingLocation",
            missingTime: "14:30",
            vehicleType: "vehicleType",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mIAp9JI0nM4wNmkorr0F2eNSHflf_PTzbZoliLD7w95xwE5tmdujEi2AE1w5BgEPOCE&usqp=CAU",
            vehicleCompany: "vehicleCompany",
            vehicleModel: "vehicleModel",
            vehicleColor: "vehicleColor",
            missingDate: "20/06/23",
            vehicleBodyNumber: "loj689474",

        },
        {
            complainId: 2,
            name: "name",
            userId: "8745",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",
            vehicleNo: "wb8745",
            missingLocation: "missingLocation",
            missingTime: "14:30",
            vehicleType: "vehicleType",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mIAp9JI0nM4wNmkorr0F2eNSHflf_PTzbZoliLD7w95xwE5tmdujEi2AE1w5BgEPOCE&usqp=CAU",
            vehicleCompany: "vehicleCompany",
            vehicleModel: "vehicleModel",
            vehicleColor: "vehicleColor",
            missingDate: "20/06/23",
            vehicleBodyNumber: "loj689474",
        },

    ]

    const complainDataH = [
        {
            complainId: 1,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",
            vehicleNo: "wb8745",
            missingLocation: "missingLocation",
            missingTime: "14:30",
            vehicleType: "vehicleType",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvBILAaSmr3sieRw-Ska6RKfg_f3dBt_Bvs-5DOBeFdLD_aSIQtZcg1X9VX-V3-G1kdM&usqp=CAU",
            vehicleCompany: "vehicleCompany",
            vehicleModel: "vehicleModel",
            vehicleColor: "vehicleColor",
            missingDate: "20/06/23",
            missingAadhar: "98745878",
            missingPersonName: "missingPersonName",
            missingPersonContactNumber: "987456321",
            missingPersonAge: "20",
            missingPersonGender: "Male",
            missingPersonHeight: "5.6",
            missingPersonIdentityMark: "No",

        },
        {
            complainId: 2,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",
            vehicleNo: "wb8745",
            missingLocation: "missingLocation",
            missingTime: "14:30",
            vehicleType: "vehicleType",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvBILAaSmr3sieRw-Ska6RKfg_f3dBt_Bvs-5DOBeFdLD_aSIQtZcg1X9VX-V3-G1kdM&usqp=CAU",
            vehicleCompany: "vehicleCompany",
            vehicleModel: "vehicleModel",
            vehicleColor: "vehicleColor",
            missingDate: "20/06/23",
            missingAadhar: "98745878",
            missingPersonName: "missingPersonName",
            missingPersonContactNumber: "987456321",
            missingPersonAge: 20,
            missingPersonGender: "Male",
            missingPersonHeight: "5.6",
            missingPersonIdentityMark: "No",


        },

    ]
    const complainDataAnimal = [
        {
            complainId: 1,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",

            missingLocation: "missingLocation",
            missingTime: "14:30",
            animalType: "dog",
            image: "https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png",

            animalBreed: "animal",
            animalColor: "Color",
            missingDate: "20/06/23",

            missingAnimalName: "AnimalName",

            missingAnimalAge: "2",
            missingAnimalGender: "Male",

            missingAnimalIdentityMark: "No",

        },
        {
            complainId: 2,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",

            missingLocation: "missingLocation",
            missingTime: "14:30",
            animalType: "dog",
            image: "https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png",

            animalBreed: "animal",
            animalColor: "Color",
            missingDate: "20/06/23",

            missingAnimalName: "AnimalName",

            missingAnimalAge: "2",
            missingAnimalGender: "Male",

            missingAnimalIdentityMark: "No",


        },

    ]
    const complainDataBag = [
        {
            complainId: 1,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",

            missingLocation: "missingLocation",
            missingTime: "14:30",

            image: "https://www.pngmart.com/files/14/Backpack-Bag-Transparent-PNG.png",
            bagType: "bag",
            bagCompany: "sky",
            bagColor: "Color",
            missingDate: "20/06/23",
            missingBagInside: "missingBagInside",
            missingBagIdentityMark: "No",

        },
        {
            complainId: 2,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",

            missingLocation: "missingLocation",
            missingTime: "14:30",
            animalType: "dog",
            image: "https://www.pngmart.com/files/14/Backpack-Bag-Transparent-PNG.png",

            bagType: "bag",
            bagCompany: "sky",
            bagColor: "Color",
            missingDate: "20/06/23",
            missingBagInside: "missingBagInside",
            missingBagIdentityMark: "No",


        },

    ]
    const complainDataMobile = [
        {
            complainId: 1,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",

            missingLocation: "missingLocation",
            missingTime: "14:30",

            image: "https://rukminim1.flixcart.com/image/850/1000/mobile/g/t/d/mi-redmi-note-4-na-original-imaeqdxhgnerzpeg.jpeg?q=20",
            mobileType: "mobile",
            mobileCompany: "mobile",
            mobileColor: "Color",
            missingDate: "20/06/23",
            missingMobileInsidePhoneNo: "98745698",
            missingMobileIMEI: "44454548",
            missingMobileIdentityMark: "No",

        },
        {
            complainId: 2,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",

            missingLocation: "missingLocation",
            missingTime: "14:30",
            animalType: "dog",
            image: "https://rukminim1.flixcart.com/image/850/1000/mobile/g/t/d/mi-redmi-note-4-na-original-imaeqdxhgnerzpeg.jpeg?q=20",

            mobileType: "mobile",
            mobileCompany: "mobile",
            mobileColor: "Color",
            missingDate: "20/06/23",
            missingMobileInsidePhoneNo: "98745896",
            missingMobileIdentityMark: "No",
            missingMobileIMEI: "44454548",
            missingMobileModel: "model",

            missingMobileMobileNo:"98744545",

        },

    ]

    const complainDataMud = [
        {
            complainId: 1,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",
            vehicleNo: "wb8745",
            missingLocation: "Location",
            missingTime: "14:30",
            vehicleType: "vehicleType",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvBILAaSmr3sieRw-Ska6RKfg_f3dBt_Bvs-5DOBeFdLD_aSIQtZcg1X9VX-V3-G1kdM&usqp=CAU",
            vehicleCompany: "vehicleCompany",
            vehicleModel: "vehicleModel",
            vehicleColor: "vehicleColor",
            missingDate: "20/06/23",
            missingAadhar: "98745878",
            missingPersonName: "PersonName",
            missingPersonContactNumber: "987456321",
            missingPersonAge: "20",
            missingPersonGender: "Male",
            missingPersonHeight: "5.6",
            missingPersonIdentityMark: "No",
            eyeWitness:"No",

        },
        {
            complainId: 2,
            name: "name",
            userId: "8744",
            email: "eg@example.com",
            subject: "subject",
            details: "details",
            gender: "gender",
            state: "state",
            city: "Pune",
            PinCode: "987451",
            address: "address",
            vehicleNo: "wb8745",
            missingLocation: "missingLocation",
            missingTime: "14:30",
            vehicleType: "vehicleType",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvBILAaSmr3sieRw-Ska6RKfg_f3dBt_Bvs-5DOBeFdLD_aSIQtZcg1X9VX-V3-G1kdM&usqp=CAU",
            vehicleCompany: "vehicleCompany",
            vehicleModel: "vehicleModel",
            vehicleColor: "vehicleColor",
            missingDate: "20/06/23",
            missingAadhar: "98745878",
            missingPersonName: "PersonName",
            missingPersonContactNumber: "987456321",
            missingPersonAge: 20,
            missingPersonGender: "Male",
            missingPersonHeight: "5.6",
            missingPersonIdentityMark: "No",
            eyeWitness: "No",

        },

    ]
    const complainTheft = [
        {
            complainId: '87455',
            userId: "87411",
            theftLocation: "location",
            theftDate: "20/06/22",
            theftTime: "20:30",
            theftDetails:"details"
        }
    ]

    const complainOther = [
        {
            complainId: '87455',
            userId: "87411",
            crimeLocation: "location",
            crimeDate: "20/06/22",
            crimeTime: "20:30",
            crimeType: "Type",
            crimeDetails: "details"
        },
        {
            complainId: '87875',
            userId: "87411",
            crimeLocation: "location",
            crimeDate: "20/06/22",
            crimeTime: "20:30",
            crimeType: "Type2",
            crimeDetails: "details"
        }
    ]
    return (
        <>
            <Box minHeight={"600px"}>
                <Heading>Complain</Heading>

                <Tabs>
                    <TabList>
                        <Tab>Missing Vehicle</Tab>
                        <Tab>Missing Human</Tab>
                        <Tab>Missing Animal</Tab>
                        <Tab>Missing Bag</Tab>
                        <Tab>Missing Mobile</Tab>
                        <Tab>Murder</Tab>
                        <Tab>Theft </Tab>
                        <Tab>Others</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                {/* variant='simple' */}
                                <Table variant='striped' colorScheme='white'>

                                    <Thead bg={"rgb(22,119,255)"}  >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User Id </Th>
                                            {/* <Th color={"white"}>Name </Th> */}
                                            {/* <Th color={"white"}>Subject</Th> */}
                                            {/* <Th color={"white"}>Vehicle No</Th> */}
                                            <Th color={"white"}>Missing Location </Th>
                                            <Th color={"white"}>Missing Date</Th>
                                            <Th color={"white"}>Missing Time</Th>
                                            {/* <Th color={"white"}>Vehicle Type</Th> */}
                                            {/* <Th color={"white"}>PinCode</Th> */}
                                            <Th color={"white"}>Missing Vehicle Details</Th>


                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainData.map((Complain) =>
                                            <Tr>
                                                <Td>{Complain.complainId}</Td>
                                                <Td
                                                    onClick={() => userHandel(Complain.userId)}
                                                >{Complain.userId}</Td>

                                                {/* <Td >{Complain.vehicleNo}</Td> */}
                                                {/* <Td >{Complain.subject}</Td> */}

                                                {/* <Td >{Complain.email}</Td> */}
                                                <Td >{Complain.missingLocation}</Td>
                                                <Td >{Complain.missingDate}</Td>
                                                <Td >{Complain.missingTime}</Td>
                                                {/* <Td >{Complain.vehicleType}</Td> */}
                                                {/* <Td >{Complain.PinCode}</Td> */}

                                                <Td >
                                                    <Box>
                                                        <Image src={Complain.image} w="200px" height="200px" alt="No Image"></Image>
                                                        <Text>
                                                            Company :{" "} {Complain.vehicleCompany}
                                                            <br />
                                                            Vehicle Type:{" "}{Complain.vehicleType}
                                                            <br />
                                                            Model:{" "}{Complain.vehicleModel}
                                                            <br />
                                                            Color:{" "}  {Complain.vehicleColor}
                                                            <br />
                                                            Body Number:{" "}{Complain.vehicleBodyNumber}
                                                            <br />
                                                            Vehicle Number:{" "}  {Complain.vehicleNo}

                                                        </Text>

                                                    </Box>
                                                </Td>





                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User ID </Th>
                                            <Th color={"white"}>Missing Location</Th>
                                            <Th color={"white"}>missing Date</Th>
                                            <Th color={"white"}>missing Time</Th>
                                            {/* <Th color={"white"}>State</Th> */}
                                            {/* <Th color={"white"}>City</Th>
                                            <Th color={"white"}>PinCode</Th> */}
                                            <Th color={"white"}>Missing Person Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainDataH.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td onClick={() => userHandel(Complain.userId)}>{Complain.userId}</Td>
                                                <Td >{Complain.missingLocation}</Td>

                                                <Td >{Complain.missingDate}</Td>
                                                <Td >{Complain.missingTime}</Td>
                                                {/* <Td >{Complain.state}</Td> */}

                                                {/* <Td >{Complain.city}</Td>
                                                <Td >{Complain.PinCode}</Td> */}

                                                <Td >
                                                    <Box>
                                                        <Image src={Complain.image} alt="No Image" width="200px" height="200px"></Image>
                                                        <Text>
                                                            Name:{" "}{Complain.missingPersonName}
                                                            <br />
                                                            Age:{" "} {Complain.missingPersonAge}<br />
                                                            Height:{" "} {Complain.missingPersonHeight} ft<br />
                                                            Gender:{" "} {Complain.missingPersonGender}<br />

                                                            Phone:{" "}{Complain.missingPersonContactNumber}
                                                            <br />
                                                            Aadhar:{" "}{Complain.missingAadhar}
                                                            <br />
                                                            Identity Mark:{" "}{Complain.missingPersonIdentityMark}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User ID </Th>
                                            <Th color={"white"}>Missing Location</Th>
                                            <Th color={"white"}>missing Date</Th>
                                            <Th color={"white"}>missing Time</Th>

                                            <Th color={"white"}>Missing Animal Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainDataAnimal.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td onClick={() => userHandel(Complain.userId)}>{Complain.userId}</Td>
                                                <Td >{Complain.missingLocation}</Td>

                                                <Td >{Complain.missingDate}</Td>
                                                <Td >{Complain.missingTime}</Td>
                                                {/* <Td >{Complain.state}</Td> */}

                                                {/* <Td >{Complain.city}</Td>
                                                <Td >{Complain.PinCode}</Td> */}

                                                <Td >
                                                    <Box>
                                                        <Image src={Complain.image} alt="No Image" width="200px" height="200px"></Image>
                                                        <Text>
                                                            {/* Name:{" "}{Complain.missingAnimalName} */}
                                                            <br />
                                                            Age:{" "} {Complain.missingAnimalAge}<br />
                                                            Breed:{" "} {Complain.animalBreed}<br />
                                                            Color:{" "} {Complain.animalColor}<br />

                                                            Gender:{" "} {Complain.missingAnimalGender}<br />

                                                            Identity Mark:{" "}{Complain.missingAnimalIdentityMark}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User ID </Th>
                                            <Th color={"white"}>Missing Location</Th>
                                            <Th color={"white"}>missing Date</Th>
                                            <Th color={"white"}>missing Time</Th>

                                            <Th color={"white"}>Missing Bag Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainDataBag.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td onClick={() => userHandel(Complain.userId)}>{Complain.userId}</Td>
                                                <Td >{Complain.missingLocation}</Td>

                                                <Td >{Complain.missingDate}</Td>
                                                <Td >{Complain.missingTime}</Td>
                                                {/* <Td >{Complain.state}</Td> */}

                                                {/* <Td >{Complain.city}</Td>
                                                <Td >{Complain.PinCode}</Td> */}

                                                <Td >
                                                    <Box>
                                                        <Image src={Complain.image} alt="No Image" width="200px" height="200px"></Image>
                                                        <Text>

                                                            Type:{" "} {Complain.bagType}<br />
                                                            Bag Company:{" "} {Complain.bagCompany}<br />
                                                            Bag Color:{" "} {Complain.bagColor}<br />

                                                            Bag Inside:{" "}{Complain.missingBagInside}
                                                            <br />

                                                            Identity Mark:{" "}{Complain.missingBagIdentityMark}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User ID </Th>
                                            <Th color={"white"}>Missing Location</Th>
                                            <Th color={"white"}>missing Date</Th>
                                            <Th color={"white"}>missing Time</Th>

                                            <Th color={"white"}>Missing Mobile Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainDataMobile.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td onClick={() => userHandel(Complain.userId)}>{Complain.userId}</Td>
                                                <Td >{Complain.missingLocation}</Td>

                                                <Td >{Complain.missingDate}</Td>
                                                <Td >{Complain.missingTime}</Td>
                                                {/* <Td >{Complain.state}</Td> */}

                                                {/* <Td >{Complain.city}</Td>
                                                <Td >{Complain.PinCode}</Td> */}

                                                <Td >
                                                    <Box>
                                                        <Image src={Complain.image} alt="No Image" width="200px" height="200px"></Image>
                                                        <Text>

                                                            Mobile Type:{" "} {Complain.mobileType}<br />
                                                            Mobile Company:{" "} {Complain.mobileCompany}<br />
                                                            Mobile Color:{" "} {Complain.mobileColor}<br />
                                                            Mobile Model:{" "} {Complain.missingMobileModel}<br />

                                                            IMEI:{" "}{Complain.missingMobileIMEI}
                                                            <br />
                                                            Mobile Inside PhoneNo:{" "}{Complain.missingMobileInsidePhoneNo}
                                                            <br />
                                                            Identity Mark:{" "}{Complain.missingMobileIdentityMark}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"} onClick={() => userHandel(Complain.userId)}>User ID </Th>
                                            <Th color={"white"}>Murder Location</Th>
                                            <Th color={"white"}>Murder Date</Th>
                                            <Th color={"white"}>Murder Time</Th>
                                            {/* <Th color={"white"}>State</Th> */}
                                            {/* <Th color={"white"}>City</Th>
                                            <Th color={"white"}>PinCode</Th> */}
                                            <Th color={"white"}>Victim Person Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainDataMud.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td >{Complain.userId}</Td>
                                                <Td >{Complain.missingLocation}</Td>

                                                <Td >{Complain.missingDate}</Td>
                                                <Td >{Complain.missingTime}</Td>
                                                {/* <Td >{Complain.state}</Td> */}

                                                {/* <Td >{Complain.city}</Td>
                                                <Td >{Complain.PinCode}</Td> */}

                                                <Td >
                                                    <Box>
                                                        <Image src={Complain.image} alt="No Image" width="200px" height="200px"></Image>
                                                        <Text>
                                                            Name:{" "}{Complain.missingPersonName}
                                                            <br />
                                                            Age:{" "} {Complain.missingPersonAge}<br />
                                                            Height:{" "} {Complain.missingPersonHeight} ft<br />
                                                            Gender:{" "} {Complain.missingPersonGender}<br />

                                                            Phone:{" "}{Complain.missingPersonContactNumber}
                                                            <br />
                                                            Aadhar:{" "}{Complain.missingAadhar}
                                                            <br />
                                                            Identity Mark:{" "}{Complain.missingPersonIdentityMark}
                                                            <br />
                                                            Eye Witness:{" "} {Complain.eyeWitness}<br />

                                                        </Text>
                                                    </Box>
                                                </Td>
                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User ID </Th>
                                            <Th color={"white"}>Theft Location</Th>
                                            <Th color={"white"}>Theft Date</Th>
                                            <Th color={"white"}>Theft Time</Th>

                                            <Th color={"white"}>Theft Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainTheft.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td onClick={() => userHandel(Complain.userId)}>{Complain.userId}</Td>
                                                <Td >{Complain.theftLocation}</Td>

                                                <Td >{Complain.theftDate}</Td>
                                                <Td >{Complain.theftTime}</Td>
                                                <Td >{Complain.theftDetails}</Td>

                                                {/* <Td >{Complain.city}</Td>
                                                <Td >{Complain.PinCode}</Td> */}

                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>

                                    <Thead bg={"rgb(22,119,255)"} >
                                        <Tr>
                                            <Th color={"white"}>Complain ID </Th>
                                            <Th color={"white"}>User ID </Th>
                                            <Th color={"white"}>Crime Location</Th>
                                            <Th color={"white"}>Crime Date</Th>
                                            <Th color={"white"}>Crime Time</Th>
                                            <Th color={"white"}>Crime Type</Th>
                                            <Th color={"white"}>Crime Details</Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {complainOther.map((Complain) =>
                                            <Tr>
                                                <Td >{Complain.complainId}</Td>
                                                <Td onClick={() => userHandel(Complain.userId)}>{Complain.userId}</Td>
                                                <Td >{Complain.crimeLocation}</Td>

                                                <Td >{Complain.crimeDate}</Td>
                                                <Td >{Complain.crimeTime}</Td>
                                                <Td >{Complain.crimeType}</Td>

                                                {/* {/* <Td >{Complain.city}</Td> */}
                                                <Td >{Complain.crimeDetails}</Td>

                                            </Tr>
                                        )}

                                    </Tbody>

                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/* {resolutionData?.[0]?.subject} */}
                    {/* <ModalHeader>{userData?.[0]?.subject}</ModalHeader> */}
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
        </>
    )
}

export default Complain
