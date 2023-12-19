"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
label: string;
href: string;
requiresAuth?: boolean | undefined;
};

const SidebarLink = (props:PropsWithChildren<Props>) => {
const path = usePathname();
const { data:session, status } = useSession();

    return (<>
    {(!props.requiresAuth || status === 'unauthenticated') && <Link className='bg-indigo-400 rounded py-2' href={props.href}>{props.label}</Link> }
    </>)


}


export default SidebarLink;