import { LikeButton } from "./LikeButton";
import Link from "next/link"

const fetchPosts = () => {
    console.log("FETCHING")
    return fetch("https://jsonplaceholder.typicode.com/posts", { next: {
        revalidate: 10
    } })
        .then(res => res.json());
}

export async function ListOfPosts({ params }) {
    
    const posts = await fetchPosts();
    return posts.slice(0, 5).map(post => (
        <article style={{color: "#09f"}} key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id}/>
            </Link>
        </article>
    ))
}