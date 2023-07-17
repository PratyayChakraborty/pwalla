import React, { useState } from 'react'
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
    ListIcon,
    OrderedList,

    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure,
    Collapse,
    keyframes,

} from '@chakra-ui/react';
import './Auto.css';


const Auto = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            
            <HStack m="auto" marginTop={"20px"}>
                
                <Box className={`toggle ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
                    <Box className="toggle-handle" />
                </Box>
            </HStack>
       
        </>
    );
};

export default Auto;
