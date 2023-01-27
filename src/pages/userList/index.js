import { useState,useEffect } from "react";
import TableComponent from "../../components/tableComponent";
import axios from 'axios';
import {Button,Flex ,LoadingOverlay,Notification} from '@mantine/core';
import Modals from "../../components/modal";

function Users(){
  const [data,setData] = useState([]);
  const [loading,setLoading]=useState(true);
  const [opened, setOpened] = useState(false);
  const [notify,setNotify]=useState('');

  const getData=()=>{
    axios.get('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users')
    .then(response => {
      setData(response.data);
      setLoading(false);
      setNotify('');
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(()=>{
    getData()
  },[])

  //to create a user onclick button
  const onCreateUser=()=>{
    setOpened(true);
  }

  //to save
  const onSave=(mail,img)=>{
    setOpened(false);
    const payload={
      avatar:img,
      email:mail
    }
    axios.post('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users',payload)
      .then(response => {
        if(response.status===201){
          setNotify('User added successfully');
          getData();
        }
        else{
          setNotify('Oops!!failed to add user')
        }

      })
      .catch(error => {
        console.log(error);
      });
  }

  return(
    <>
    {!loading ? 
    <>
    {notify&&<Notification>{notify}</Notification>}
    <Flex
      mih={50}
      gap="md"
      justify="flex-end"
      align="center"
      direction="row"
      wrap="wrap"
      mr={20}
    ><Button mt={20} bg='#353669' onClick={onCreateUser}>Create User</Button></Flex>
    <TableComponent data={data} />
    {opened&&<Modals open={opened} onClose={()=>setOpened(false)} onCreateUser={onSave}/>}
    </>:<LoadingOverlay visible={loading} overlayBlur={2} />}
    </>
  )
}

export default Users;