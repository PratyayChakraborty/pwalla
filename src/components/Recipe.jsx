import React from 'react';
import { Box, Image, Heading, Text, Stack } from '@chakra-ui/react';

const Recipe = ({ image, title, ingredients }) => {
  return (
    <Box w={'100%'} p={2}>
      <Image src={image} alt={title} w={'100%'}/>
      <Heading as="h3" size="md" my={2}>
        {title}
      </Heading>
      <Text fontSize="sm" fontWeight="bold">
        Ingredients:
      </Text>
      <Stack spacing={1} mt={1}>
        {ingredients.map((ingredient, index) => (
          <Text key={index} fontSize="sm">
            - {ingredient}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

export default Recipe;
