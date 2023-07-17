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
  Input,
  Button,
} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Update = () => {
  const UpdateData = [
    {
      UpdateId: 1,
      name: "name",
      email: "eg@example.com",
      subject: "subject",
      details: "details",
      gender: "gender",
      state: "state",
      city: "Pune",
      PinCode: "987451"
    }

  ]
  const policeData = [
    {
      batchid: 1,
      name: "name",
      Update: 4.5,
      feedBack: "Good Work"
    },
    {
      batchid: 10,
      name: "name",
      Update: 2.5,
      feedBack: "Poor Performance"
    },
    {
      batchid: 5,
      name: "name",
      Update: 5,
      feedBack: "Excellent"
    }

  ]
  const policeStationData = [
    {
      officer_in_Charge: "Officer in Charge",
      state: "Maharashtra",
      city: "Pune",
      policeStation: "Kothrud Peth",
      pinCode: "987451",
      Update: 4.7,
      feedBack: "Good"
    }

  ]
  return (
    <>
      <Box minHeight={"600px"}>
        <Heading>Update</Heading>

        <Tabs>
          <TabList>
            <Tab>Banner Update</Tab>
            <Tab>Video Update</Tab>


          </TabList>

          <TabPanels>

            <TabPanel>
              <label htmlFor="Update Banner">Update Banner</label>
              <Input placeholder="Give Banner Url"></Input>
              <Button m="10px" bg='green.200'>Submit</Button><br></br>
            </TabPanel>
            <TabPanel>
              <label htmlFor="Update Video">Update Video</label>
              <Input placeholder="Give Video Url"></Input>
              <Button m="10px" bg='green.200'>Submit</Button><br></br>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default Update
