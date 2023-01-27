import { Modal,Button,TextInput } from '@mantine/core';
import {useState} from 'react';


const Modals=({open,onClose,onCreateUser})=>{
  const [mail,setMail] = useState('');
  const [imageUrl,setUrl] =useState('');
  const [error,setError] = useState(false);

  return (
    <>
      <Modal
        opened={open}
        onClose={onClose}
        title="Create User"
      >
        <><TextInput
      label="Email address"
      placeholder="Enter email"
      onChange={(e)=>{
        if(/^\S+@\S+$/.test(e.target.value)){
          setError(false);
        }else{
          setError(true);
        }
        setMail(e.target.value);
      }}
      value={mail}
      error={error?'Invalid mail!!':''}
    />
    <TextInput
    mt={10}
      label="User image Url"
      placeholder="Your image url"
      onChange={(e)=>setUrl(e.target.value)}
      value={imageUrl}
    />
    <Button mt={20} bg='#353669' onClick={()=>onCreateUser(mail,imageUrl)}>Save</Button>
    </>
      </Modal>
    </>
  );
}

export default Modals;