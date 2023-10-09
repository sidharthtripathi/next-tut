type Post = {
    userId : string,
    id : string,
    title : string,
    body : string
  }
type Props = {
    promise: Promise<Post[]>
}


export default async function UserPosts({ promise }: Props) {
    const posts = await promise;

    return (
        <div>
            {posts.map(post => {
                return (
                    <article key = {post.id} >
                        <h2 className="bg-blue-300">{post.title}</h2>
                        <p className="bg-slate-400">{post.body}</p>
                        <br />
                    </article>
                )
            })}
        </div>
    )
}
