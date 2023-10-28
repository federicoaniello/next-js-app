import { TUser } from "@/types/TUser";
import React from "react";
import Link from "next/link";
import { SortByKey } from "@/types/TSortByKey";

interface Props {
  sortBy: SortByKey;
}

const UsersTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  let users: TUser[] = await res.json();

  switch (sortBy) {
    case "email":
      users.sort((a, b) => a.email.localeCompare(b.email));
      break;
    case "name":
    default:
      users.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="text-black">
            <Link href="/users?sortBy=name">Full Name</Link>
          </th>
          <th className="text-black">
            <Link href="/users?sortBy=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="text-black">{user.name}</td>
            <td className="text-black">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
