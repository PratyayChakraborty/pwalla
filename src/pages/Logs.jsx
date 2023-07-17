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
} from "@chakra-ui/react"

import prf from "../assets/prf.png"

const Logs = () => {
  const Logsdata = [
    {
      logsId: 1,
      userId: 201,
      logDate: "20/07/23",
      logTime: "20:30",
      
    }

  ]
  return (
    <>
      <Box minHeight={"600px"}>
        <Heading>Logs</Heading>
        <TableContainer>
          <Table variant='simple'>

            <Thead bg={"rgb(22,119,255)"} >
              <Tr >
                <Th color={"white"}>Logs ID </Th>
                <Th color={"white"}>User Id</Th>
                <Th color={"white"}>Log Date</Th>
                <Th color={"white"}>Log Time </Th>

              </Tr>
            </Thead>
            <Tbody>
              {Logsdata.map((Logs) =>
                <Tr>
                  <Td>{Logs.logsId}</Td>
                  <Td >{Logs.userId}</Td>
                  <Td >{Logs.logDate}</Td>
                  <Td >{Logs.logTime}</Td>
                </Tr>
              )}

            </Tbody>

          </Table>
        </TableContainer>

      </Box>
    </>
  )
}

export default Logs
