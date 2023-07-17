import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Progress, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';

function EditUser() {

    const { id } = useParams();

    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [salesman, setSalesman] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [dummy, setDummy] = useState("")

    const [data, setData] = useState([]);
    const [imageURL, setImageURL] = useState([]);
    const toast = useToast();
    const [progress, setProgress] = useState(0)

    // imageURL.push(...images)

    const getSingleUser = async () => {
        const res = await axios.get(`https://dark-gray-nightingale-tam.cyclic.app/otp/user/${id}`)
        setData(res.data)
        console.log(res.data, "editUser");
        setImageURL(res.data.image)
        setName(res.data.name)
        setGender(res.data.Gender)
        setEmail(res.data.Email)
        setCity(res.data.City)
        setSalesman(res.data.Salesman)
        setBrand(res.data.brand)
        setDescription(res.data.description)

    }

    useEffect(() => {
        getSingleUser()
    }, [])

    // console.log(data);




    const handleImageUpload = () => {

        let count = 0;

        for (let i = 0; i < images.length; i++) {
            
            const storageRef = ref(storage, `/files/${images[i].name}`)
            const uploadTask = uploadBytesResumable(storageRef, images[i]);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                    console.log(percent)
                    setProgress(percent)
                },
                (err) => console.log(err),
                async () => {
                    // download url


                    await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        // console.log(url)
                        // setImageURL([...imageURL, url]);
                        imageURL.push(url)
                        console.log(imageURL)
                        count++

                        if (count == images.length) {
                            setImageURL(imageURL)
                            setDummy(data.Name)
                        }
                    });
                }
            )

        }
    }

    // console.log(images,"lllllll")

    useEffect(() => {
        handleImageUpload()
    }, [images]);

    const handleUpdate = async (e) => {
        e.preventDefault()
        const data = await axios.patch(`https://dark-gray-nightingale-tam.cyclic.app/User/update/${id}`,
            {
                image: imageURL,
                Name: name,
                Gender: gender,
                Email: email,
                City: city,
                Salesman: salesman,
                

            })
        // console.log(data,"updatedData")
        toast({
            Name: 'User Updated.',
            description: "Your User is updated successfully!",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }



    return (
        <div style={{ border: "2px solid lightgrey", borderRadius: "20px", width: "60%", margin: "auto", padding: "20px" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleUpdate} >
                
                <Progress colorScheme='green' size='sm' value={progress} />
                <Box>
                    <Flex gap={"10px"} >
                        {
                            imageURL.map((el, index) =>
                                <>
                                    <Box w={"10%"} key={index} >
                                        <Image w={"100%"} src={el} fallbackSrc="Error in \n loading image ! "
                                            alt={"loading..."} />
                                    </Box>
                                </>
                            )
                        }

                    </Flex>
                </Box>

                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </FormControl>

                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}

                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Salesman</FormLabel>
                    <Input
                        type="text"
                        value={salesman}
                        onChange={(e) => setSalesman(e.target.value)}
                    />
                </FormControl>

                


                <Button background={"teal"} color={"white"} type='submit' >Update</Button>

            </form>
        </div>
    )
}






export default EditUser
