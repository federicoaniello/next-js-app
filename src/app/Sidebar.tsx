'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  const { data:session, status } = useSession();
  return (
    <section className='p-3 flex flex-col gap-3 text-center '>
      {status === 'authenticated' && 
      <div className='flex flex-col'>
        <p className='text-2xl text-black mb-1'>Benvenuto {session?.user?.name}</p>
        <Link className='bg-indigo-400 rounded py-2' href="/api/auth/signout">Log out</Link>
        </div>}
      <Link className='bg-indigo-400 rounded py-2' href="/">Home</Link>
      <Link className='bg-indigo-400 rounded py-2' href="/admin">Admin</Link>
      <Link className='bg-indigo-400 rounded py-2'  href="/users">Users</Link>
      <Link className='bg-indigo-400 rounded py-2'  href="/uploadImage">Upload</Link>
      {status === 'unauthenticated' && <Link className='bg-indigo-400 rounded py-2'  href="/api/auth/signin">Sign In</Link>}
    </section>
  )
}

export default Sidebar
