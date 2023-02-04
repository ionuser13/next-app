import Link from "next/link";

const fetchSInglePost = (id) => {
    console.log("FETCHING")
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: {
        revalidate: 10
    } })
        .then(res => res.json());
}

export default async function Post({children, params}) {
    const {id} = params;
    const post = await fetchSInglePost(id)
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>See comments</Link>
            {children}
        </article>
    )
}