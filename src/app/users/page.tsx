import { Metadata } from 'next';
import React, { Suspense } from 'react'
import UsersTable from './UsersTable';
import { SortByKey } from '@/types/TSortByKey';
import GoToHome from './GoToHome';
export const metadata: Metadata = {
    title: 'Users',
  }

  interface Props {
    searchParams: {
      sortBy: SortByKey
    }
  }


export default async function page({searchParams:{sortBy}}:Props) {

  return (
    <div>
      <Suspense fallback={<p>Caricamento...</p>}>
      <UsersTable sortBy={sortBy}></UsersTable>
      <GoToHome></GoToHome>
      </Suspense>
    </div>
  )
}
