"use client"
import { useRef } from "react";
import Input from "./components/Input";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)



  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    console.log(inputRef.current?.value);
  }

  return (
    <main className="flex">
     <Input ref={inputRef} type="text"></Input>
     <button onClick={handleClick}>CLICK</button>
    </main>
  );
}
