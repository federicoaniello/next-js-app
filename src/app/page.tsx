import { getServerSession } from "next-auth";
import { googleAuth } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession({providers:[googleAuth]});



  return (
    <main className="flex">
      {session && session.user ?  <p className="text-black">Benvenuto {session.user.name}</p> : null}

      <video data-html5-video="" preload="auto" src="blob:https://claplivehdplay.ru/469f00fe-bf41-4b23-a483-3b382f911065"></video>
    </main>
  );
}
