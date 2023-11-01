"use client";
import React, { useState } from 'react'
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
          const formData = new FormData();
          formData.append("file", file);
            const returnData = await fetch("/api/upload", {
              method: "POST",
              body: formData,
            });
            console.log(returnData);
            setmessage(String(returnData.json()));
            setfile(null);
        }

    }
  return (
    <>
      <p>Upload file:</p>
      <p className='text-red-500'>{message}</p>
      <input type="file" onChange={e => storeFile(e)} />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={uploadFile} >Invia</button>
    </>
  )
}

export default Page
