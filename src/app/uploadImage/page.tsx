"use client";
import React, { useState } from 'react'
import aws from '../s3/aws';
const Page = () => {
    const [message, setmessage] = useState<string | null>(null);
    const [file, setfile] = useState<File | null>(null);

    function storeFile(e: React.ChangeEvent<HTMLInputElement>){
       if(e.target.files) setfile(e.target.files[0]);
       console.log(e.target.files);
    }

    const uploadFile = async () => {
        setmessage("Uploading...");
        if(file){
            const returnData = await aws(file);
            setmessage(String(returnData));
            setfile(null);
        }

    }
  return (
    <>
      <p>Upload file:</p>
      <p className='text-red-500'>{message}</p>
      <input type="file" onChange={e => storeFile(e)} />
      <button className='fill-sky-100 stroke-sky-500' onClick={uploadFile} >Invia</button>
    </>
  )
}

export default Page
