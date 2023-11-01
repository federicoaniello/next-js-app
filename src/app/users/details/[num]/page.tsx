import React from 'react';

interface Props {
    params:{
        num:number
    }
}

const page = ({params:{num}}: Props) => {
  return (
    <div>
      <p className='p-5'>User details {num}</p>
    </div>
  )
}

export default page
