import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "users"
}
import getAllUser from "@/lib/getAllUser";
import Link from "next/link";


async function Users() {
  const users: User[] = await getAllUser()
  return (
    <div>
      Users page
      <br />
      {users.map(user => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`} >{user.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Users
