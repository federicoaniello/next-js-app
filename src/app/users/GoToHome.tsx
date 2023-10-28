"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
const GoToHome = () => {
    const router = useRouter();

    const GoToHome = () => {
        router.push("/");
    }

  return (
    <button onClick={GoToHome}>
      Go To home
    </button>
  )
}

export default GoToHome
