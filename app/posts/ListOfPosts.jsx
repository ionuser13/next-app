
const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
}

export async function ListOfPosts({ params }) {
    
    const posts = await fetchPosts()
    return posts.slice(0, 5).map(post => (
        <article style={{color: "#09f"}} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    ))
}