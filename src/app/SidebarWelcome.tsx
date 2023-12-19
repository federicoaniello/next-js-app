"use client";

import { useSession } from "next-auth/react";
import SidebarLink from "./SidebarLink";

type Props = {}

const SidebarWelcome = (props: Props) => {
    const { data:session, status } = useSession();
    
  return (
    <>
    {status === 'authenticated' && 
    <div className='flex flex-col'>
      <p className='text-2xl text-black mb-1'>Benvenuto {session?.user?.name}</p>
      <SidebarLink href="/api/auth/signout" label="Log Out" />
      </div>}
    </>
  )
}

export default SidebarWelcome