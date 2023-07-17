import React from 'react'
import {
  Box, Text,  
  } from '@chakra-ui/react';
const Subplan = ({plan}) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p="3">
    <Text>Duration: {plan.duration} months</Text>
    <Text>Price: {plan.price}</Text>
    <Text>Discount: {plan.discount}%</Text>
  </Box>
  )
}

export default Subplan
