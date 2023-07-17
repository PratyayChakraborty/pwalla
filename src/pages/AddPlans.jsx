import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Flex, Box, List, ListItem, ListIcon, useToast, Progress } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { CheckCircleIcon } from '@chakra-ui/icons'

// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyAM2Z7PZhKqU2Km1rnI8Nxb2XU_52PIuHU",
  authDomain: "livhealthify-a26b9.firebaseapp.com",
  databaseURL:"gs://livhealthify-a26b9.appspot.com",
  projectId: "livhealthify-a26b9",
  storageBucket: "livhealthify-a26b9.appspot.com",
  messagingSenderId: "703301225412",
  appId: "1:703301225412:web:9c35d84b3b70cf50487291"
});

// Firebase storage reference
const storage = getStorage(app);

const AddPlans = () => {
    const [formData, setFormData] = useState({
        title: '',
        img: '',
        benifit: [],
        description: '',
        actualPrice: '',
        offerPrice: '',
        subplan: []
    });
    const [images, setImages] = useState([]);
    const [progress,setProgress] = useState(0)

    const toast = useToast()

    // var imageURL = [];

    const handleUpload = async (event) => {
        event.preventDefault();
        // imageURL = [];
        formData.img = ''
        let count = 0;
        if(images.length == 0)
        {
            return toast({
                title: 'Images Credentials.',
                description: "You have to select attleast 1 Image.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        if(formData.title.length <=4)
        {
            return toast({
                title: 'Title Credentials.',
                description: "You have to write attleast more than 5 letters long.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        if(inputArray.length <1)
        {
            return toast({
                title: 'Benefit Credentials.',
                description: "You have to write attleast 1 Benefit.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        if(formData.description.length <=10)
        {
            return toast({
                title: 'Description Credentials.',
                description: "You have to write attleast 10 letter Description!",
                status: 'info',
                duration: 9000,
                isClosable: true,
              })
        }
        if(formData.actualPrice.length ==0)
        {
            return toast({
                title: 'Actual Price Credentials.',
                description: "You are not allowed to set price at 0.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        if(formData.offerPrice.length == 0)
        {
            return toast({
                title: 'Offer Price Credentials.',
                description: "You are not allowed to set price at 0.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        if(formData.subplan.length == 0)
        {
            return toast({
                title: 'Sub Plan Credentials.',
                description: "You have to right attleast 1 plan!",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        

        for(let i=0;i<images.length;i++)
        {

            const storageRef = ref(storage,`/files/${images[i].name}`)
            const uploadTask = uploadBytesResumable(storageRef, images[i]);
        
            uploadTask.on(
            "state_changed",
            (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(percent)
        
            },
            (err) => console.log(err),
            async() => {
                        // download url
                    

                await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url)
                        formData.img = url;
                        console.log(formData.img)
                        count++
                        
                        if(count == images.length)
                            {
                                // console.log(formData.subplan)
                                
                              fetch('https://dark-gray-nightingale-tam.cyclic.app/subscription',{
                                method:"post",
                                headers:{
                                    "Content-Type":"application/json",
                                },
                                body:JSON.stringify({
                                    "img":formData.img,
                                    "title":formData.title,
                                    "benifit":inputArray,
                                    "description":formData.description,
                                    "actualPrice":formData.actualPrice,
                                    "offerPrice":formData.offerPrice,
                                    "subplan":formData.subplan

                                    
                                })
                                }).then(res => res.json())
                                .then(data => {
                                    console.log(data,"new data")
                                    toast({
                                        title: 'New Plan created.',
                                        description: "We've created your new plan for you!",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                      })
                                }).catch(err => {
                                    console.log(err)
                                    toast({
                                        title: 'Network Error!',
                                        description: "Please check your network!",
                                        status: 'error',
                                        duration: 9000,
                                        isClosable: true,
                                      })
                                })
                            }
                    });
                    }
                )
            
        }
    }
    

    const [inputArray, setInputArray] = useState([]);
    
    const handleBenefit = () => {
      setInputArray([...inputArray, formData.benifit]);
      formData.benifit = ""
    }
    

    return (
        <div style={{border:"2px solid lightgrey",borderRadius:"20px",width:"60%",margin:"auto",padding:"20px"}}>
            <form style={{display:"flex",flexDirection:"column",gap:"10px"}} onSubmit={handleUpload}>
                <FormControl>
                    <FormLabel>Images</FormLabel>
                    <Input
                        type="file" 
                        onChange={(e) => setImages(e.target.files)}
                    />
                </FormControl>
                <Progress value={progress} />
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                        type="text"
                        value={formData.title}
                        onChange={(event) =>
                          setFormData({ ...formData, title: event.target.value })}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Benefits</FormLabel>
                    <Flex>
                    <Input
                        type="text"
                        value={formData.benifit}
                        onChange={(event) =>
                            setFormData({ ...formData, benifit: event.target.value })
                        }
                    />
                    <Button onClick={handleBenefit} >+</Button>
                    </Flex>
                </FormControl>
                <Box>
                      <List>
                      {inputArray.map((el) => 
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} color='green.500' />
                          {el}
                        </ListItem>
                        )}
                      </List>
                      
                </Box>

                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                        type="text"
                        value={formData.description}
                        onChange={(event) =>
                            setFormData({ ...formData, description: event.target.value })
                        }
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Actual Price</FormLabel>
                    <Input
                        type="number"
                        value={formData.actualPrice}
                        onChange={(event) =>
                            setFormData({ ...formData, actualPrice: event.target.value })
                        }
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Offer Price</FormLabel>
                    <Input
                        type="number"
                        value={formData.offerPrice}
                        onChange={(event) =>
                            setFormData({ ...formData, offerPrice: event.target.value })
                        }
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Subscription Plans</FormLabel>
                    {formData.subplan.map((plan, index) => (
                        <div key={index}>
                            <Input
                                type="number"
                                placeholder={`Duration of plan ${index + 1}`}
                                value={plan.duration}
                                onChange={(event) => {
                                    const subplan = [...formData.subplan];
                                    subplan[index].duration = event.target.value;
                                    setFormData({ ...formData, subplan });
                                }}
                            />
                            <Input
                                type="number"
                                placeholder={`Price of plan ${index + 1}`}
                                value={plan.price}
                                onChange={(event) => {
                                    const subplan = [...formData.subplan];
                                    subplan[index].price = event.target.value;
                                    setFormData({ ...formData, subplan });
                                }}
                            />
                            <Input
                                type="number"
                                placeholder={`Discount of plan ${index + 1}`}
                                value={plan.discount}
                                onChange={(event) => {
                                    const subplan = [...formData.subplan];
                                    subplan[index].discount = event.target.value;
                                    setFormData({ ...formData, subplan });
                                }}
                            />
                        </div>
                    ))}
                    <Button
                        size="sm"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                subplan: [...formData.subplan, { duration: '', price: '', discount: '' }]
                            })
                        }
                    >
                        Add Plan
                    </Button>
                </FormControl>
                <Button background={"teal"} color={"white"} type="submit">Submit</Button>

            </form>
        </div>
    )
}

export default AddPlans


