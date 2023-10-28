import React from 'react'

interface Props {
    params:{
        num: string,
        id: string[]
    } 
}

const page = ({params}:Props) => {
  return (
    <>
    {params && params.id[0] && <div>
      <p>User details {params.num} for product {params.id[0]}</p>
    </div>}
    </>
  
  )
}

export default page
