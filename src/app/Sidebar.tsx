import React from 'react'
import SidebarLink from './SidebarLink';
import SidebarWelcome from './SidebarWelcome';
interface Props {
  className?: string
}
const Sidebar = ({className}: Props) => {
  return (
    <section className={`p-3 flex flex-col gap-3 text-center ${className}`}>
      <SidebarWelcome />
        <SidebarLink label='Home' href='/' />
        <SidebarLink label='Admin' href='/admin' />
        <SidebarLink label='Users' href='/users' />
        <SidebarLink label='Upload' href='/uploadImage' />
        <SidebarLink label='Login' href='/api/auth/signin' requiresAuth={true} />
        <SidebarLink label='Sign Up' href='/register' requiresAuth={true} />

    </section>
  )
}

export default Sidebar
