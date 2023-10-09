import getUser from "@/lib/getUser"
import { Suspense } from "react";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
interface Props {
    params: { id: string }
}
export const generateMetadata = async ({ params: { id } }: Props) => {
    const userData: Promise<User> = getUser(id);
    const user = await userData;
    return {
        title: user.name,
        description: 'about the user'
    }
}
async function Userpage({ params: { id } }: Props) {
    const userData: Promise<User> = getUser(id);
    const userPostsData: Promise<Post[]> = getUserPosts(id)
    const user = await userData;
    return (
        <div>
            <h2>{user.name}</h2>
            <Suspense fallback={<h2>Loading..</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </div>
    )
}

export default Userpage
