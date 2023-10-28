import { Children } from '@/interfaces/IChildren';
import React from 'react';

interface Props extends Children {
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
