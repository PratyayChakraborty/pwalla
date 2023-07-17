import React, { useEffect, useState } from 'react'
import { Flex, Box, Text, Button, Thead, Tbody, Table, Th, Tr, Td } from "@chakra-ui/react"
import TableComponent from '../components/TableComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Complains = () => {

    const [data, setData] = useState()

    const fields = ["Id", "Subject", "Complain By", "Complain Details", "Gender", "Email", "State", "City",];
    const fetchComplains = async () => {
        // const res = await axios.get('https://dark-gray-nightingale-tam.cyclic.app/otp/alluser')
        // setData(res.data.data)
        // console.log(res.data , "user")
        // console.log(res);
    }

    useEffect(() => {
        fetchComplains()
    }, [])

    const handleDelete = async (id) => {
        // const res = await axios.delete(`https://dark-gray-nightingale-tam.cyclic.app/otp/alluser/${id}`)
        // setData(res.data.data)

    };

    const handleEdit = (id) => {
        console.log(`Editing user with id ${id}`);
        // window.location.href="/EditUser/{id}"

    };
    const handleActive = () => { }
    const handleInActive = () => { }
    return (

        <Box minH={"100vh"}>

            <Text fontSize="xl" fontWeight="bold" mt={2} >
                Complains
            </Text>

            <Flex mt="20px" >
                <TableComponent data={data} fields={fields} type={"complains"} />

            </Flex>
        </Box>

    )
}

export default Complains
