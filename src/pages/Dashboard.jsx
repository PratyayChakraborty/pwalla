import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { LineChart, DoughnutChart } from '../components/Chart';
import { FaUserFriends, FaSitemap } from "react-icons/fa";
import { BsMotherboard } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [users,setUsers] = useState([]);
    const [products,setProducts] = useState([]);
    const [coaches,setCoaches] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get('https://dark-gray-nightingale-tam.cyclic.app/otp/alluser')
        setUsers(res.data.data)
        
        // console.log(res);
    }
    const fetchProducts = async () => {
        const res = await axios.get('https://dark-gray-nightingale-tam.cyclic.app/product/all')
        setProducts(res.data.data)
        
    }
    const fetchCoaches = async () => {
        const res = await axios.get('https://dark-gray-nightingale-tam.cyclic.app/coach/allcoach')
        setCoaches(res.data.data)
    }
    useEffect(() => {
        fetchUsers()
        fetchProducts()
        fetchCoaches()
    },[])
    

    return (
        <Flex >

            <Box w="full" >
                
                <Flex mt="30px" justifyContent={"space-evenly"} >
                    <Flex bg="white" p={4} borderRadius="md" boxShadow="md" alignItems="center" flexDirection="column" gap="10px">
                        <Heading fontSize="xl">Total Register Case</Heading>
                        
                        <Heading fontSize="xl">{users.length}</Heading>
                    </Flex>
                    
                    <Flex bg="white" p={4} borderRadius="md" boxShadow="md" alignItems="center" flexDirection="column" gap="10px">
                        <Heading fontSize="xl">Total Solved Case</Heading>
                        
                        <Heading fontSize="xl">{coaches.length}</Heading>
                    </Flex>
                </Flex>
                <Box display={"flex"} gap="50px" flexDirection={"row"} alignItems="center" p={9} mt="20px">
                    <Box width="70%" height="400px">
                        <LineChart />
                    </Box>
                    <Box width="30%" height="400px">
                        <DoughnutChart />
                    </Box>
                </Box>

            </Box>
        </Flex>
    );
}

export default Dashboard;