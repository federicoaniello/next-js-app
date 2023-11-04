import { getServerSession } from "next-auth";
import { googleAuth } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession({providers:[googleAuth]});



  return (
    <main className="flex">
      {session && session.user ?  <p className="text-black">Benvenuto {session.user.name}</p> : null}
    </main>
  );
}
