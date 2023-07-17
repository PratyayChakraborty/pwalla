import { Avatar, Box, Circle, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleUser() {
    const [data, setData] = useState();
    const {id} = useParams();

    const fetchUsers = async () => {
        const res = await axios.get(`https://dark-gray-nightingale-tam.cyclic.app/otp/user/${id}`)
        setData(res.data.data[0])
        
        // console.log(res);
    }

    useEffect(() => {
        fetchUsers()
    },[]);

    console.log(data , "singleuser")
  return (
    <div>
        <Box boxShadow={"2xl"} borderRadius={"10px"} w={"50%"} m={"auto"} display={"flex"} alignItems={"center"} flexDirection={"column"} p={"20px"} gap={"10px"} >
            <Box>
                    <Circle size={"100px"} bg='blue.500' color='white' >
                        <Avatar size={"full"} src={data?.imgUrl} />
                    </Circle>
            </Box>
            <Box boxShadow={"2xl"} p={"20px"} borderRadius={"10px"}  w={"90%"} fontSize={"15px"} fontStyle={"italic"} fontWeight={"bolder"}  >
                <Flex justifyContent={"space-between"} borderBottom={"2px solid lightgrey"}>
                    <Text>Name - {data?.name}</Text>
                    <Text>Email - {data?.email}</Text>
                </Flex>
                <Flex  justifyContent={"space-between"} borderBottom={"2px solid lightgrey"} >
                    <Text>Age - {data?.age}</Text>
                    <Text>Gender - {data?.gender}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} borderBottom={"2px solid lightgrey"}>
                    <Text>Current Weight - {data?.currentweight}</Text>
                    <Text>Target Weight - {data?.targetweight}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} borderBottom={"2px solid lightgrey"}>
                    <Text>City - {data?.city}</Text>
                    <Text>Pincode - {data?.pincode}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} borderBottom={"2px solid lightgrey"}>
                    <Text>Subscription Type - {data?.subscriptionType}</Text>
                    <Text>Physically Update - {data?.physicallyactive}</Text>
                </Flex>
                <Box  borderBottom={"2px solid lightgrey"}>
                    <Text>Height - {data?.height}</Text>
                </Box>
                
                <Box  borderBottom={"2px solid lightgrey"}>
                    <Text>Phone Number - {data?.phoneNumber}</Text>
                </Box>
                <Box borderBottom={"2px solid lightgrey"}>
                    <Text>Language - {data?.language}</Text>
                </Box>
                
            </Box>           
            <Text fontSize={"20px"} fontWeight={"bolder"} >Medical Condition</Text>
            <Box fontStyle={"italic"} fontWeight={"semibold"} w={"50%"} border={"2px solid grey"} p={"10px 10px 10px 20px"} >
            <ol>    
                {
                    data?.medicalcondition.map((el,i) => 
                        
                            <li>{el}</li>
                        
                    )
                }
            </ol>
            </Box>

            <Text fontSize={"20px"} fontWeight={"bolder"} >Purpose</Text>
            <Box fontStyle={"italic"} fontWeight={"semibold"} w={"50%"} border={"2px solid grey"} p={"10px 10px 10px 20px"} >
            <ol>    
                {
                    data?.purpose.map((el) => 
                        
                            <li>{el}</li>
                        
                    )
                }
            </ol>
            </Box>
        </Box>
    </div>
  )
}

export default SingleUser