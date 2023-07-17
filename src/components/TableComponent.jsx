import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Auto from "./Active/Active";



const TableComponent = ({ data, fields, handleDelete, handleEdit, type }) => {

  return (
    <Table variant="simple" mobileBreakPoint={768} style={{ overflowY: "scroll" }}>
      <Thead>
        <Tr>
          {fields.map((field) => (
            <Th key={field} backgroundColor="orange.500" color="black">{field}</Th>
          ))}
        </Tr>
      </Thead>
      {type === "user" ?
        <Tbody>
          {data && data?.map((item, i) => (

            <Tr key={item._id}>

              <Td>{i + 1}</Td>
              <Td>{item.name}</Td>
              <Td>{item.gender}</Td>
              <Td>{item.email}</Td>
              <Td>{item.city}</Td>
              <Td>
                <Link to={`/EditUser/${i}`} >
                  <IconButton
                    icon={<FaEdit />}
                    aria-label="Edit"
                    onClick={() => handleEdit(item.id)}
                    mr={2}
                  />
                </Link>
                {/* <IconButton
                icon={<FaTrash />}
                aria-label="Delete"
                onClick={() => handleDelete(item.id)}
              /> */}
                {/* <Button bg={"green.400"}>Active</Button>
              <Button bg={"red.400"}>Inactive</Button> */}
                

                <Link to={`/users/${item._id}`} ><Button>View</Button></Link>

              </Td>
              <Td><Auto /></Td>
            </Tr>
          ))}
        </Tbody>
        :
        <Tbody>
          {data?.map((item, i) => (
            <Tr key={item.id} >
              <Td><Image src={item.image[0]} alt={item.title} w="60px" h="60px" borderRadius="50%" /></Td>
              <Td>{item.title}</Td>
              <Td>{item.price}</Td>
              <Td>
                <Link to={`/Salesman/${item._id}`} ><IconButton
                  icon={<FaEdit />}
                  aria-label="Edit"
                  onClick={() => handleEdit(item.id)}
                  mr={2}
                /></Link>
                {/* <IconButton
                icon={<FaTrash />}
                aria-label="Delete"
                onClick={() => handleDelete(item._id)}
              /> */}

              </Td>
            </Tr>
          ))}
        </Tbody>}
    </Table>
  );
};

export default TableComponent;