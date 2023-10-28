import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <section className='p-3 flex flex-col gap-3 text-center '>
              <Link className='bg-indigo-400 rounded py-2' href="/">Home</Link>
      <Link className='bg-indigo-400 rounded py-2' href="/admin">Admin</Link>
      <Link className='bg-indigo-400 rounded py-2'  href="/users">Users</Link>

    </section>
  )
}

export default Sidebar
