// import React from 'react';
// import { Box, Flex, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react';
// import { FiHome, FiUser } from 'react-icons/fi';
// import { FaWeight,FaProductHunt } from 'react-icons/fa';
// import { BsMotherboard } from "react-icons/bs";
// import { BiFoodTag } from "react-icons/bi";
// import { Link } from "react-router-dom"
// const Sidebar = () => {
//     return (
//         <Box
//             bg={useColorModeValue('white', 'gray.800')}
//             height="max-content"
//             position="sticky"
//             top="0"
//             width={{ base: '100%', md: '16rem' }}
//             zIndex="1"
//         >
//             <Box alignItems="center" p="2" backgroundColor="teal">
//                 <Flex w="100%" gap={12} alignItems="center">
//                     <Text fontSize="xl" fontWeight="bold" color="white">
//                         Healthify Me !
//                     </Text>
//                     <Image w="12%" src='https://cdn-images-1.medium.com/v2/resize:fit:1200/1*ycMNYnfk1wjsJbxEja4OTg.png' alt='logo' />
//                 </Flex>
//             </Box>
//             <Box px="4" py="2" mt="3" fontSize="20px" fontWeight="500">
//                 <Box mb="2">
//                     <Flex alignItems="center" gap="15px" >
//                         <Icon as={FiHome} mr="2" />
//                         <Text><Link to="/dashboard"> Dashboard </Link></Text>
//                     </Flex>
//                 </Box>
//                 <Box mb="2">
//                     <Flex alignItems="center" gap="15px">
//                         <Icon as={FaProductHunt} mr="2" />
//                         <Text> <Link to="/products">Products</Link></Text>
//                     </Flex>
//                 </Box>
//                 <Box mb="2">
//                     <Flex alignItems="center" gap="15px">
//                         <Icon as={FiUser} mr="2" />
//                         <Text><Link to="/users">User's</Link></Text>
//                     </Flex>
//                 </Box>
//                 <Box mb="2">
//                     <Flex alignItems="center" gap="15px">
//                         <Icon as={FaWeight} mr="2" />
//                         <Text><Link to="/weightgain">Weight Gain</Link></Text>
//                     </Flex>
//                 </Box>
//                 <Box mb="2">
//                     <Flex alignItems="center" gap="15px">
//                         <Icon as={BiFoodTag} mr="2" />
//                         <Text><Link to="/dietplan">Diet Plan</Link></Text>
//                     </Flex>
//                 </Box>
//                 <Box mb="2">
//                     <Flex alignItems="center" gap="15px">
//                         <Icon as={BsMotherboard} mr="2" />
//                         <Text><Link to="/other">Other</Link></Text>
//                     </Flex>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default Sidebar;
