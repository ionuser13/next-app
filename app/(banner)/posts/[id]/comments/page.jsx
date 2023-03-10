
const fetchComments = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: {
        revalidate: 10
    } })
        .then(res => res.json());
}

export default async function Post({params}) {
    const {id} = params;
    const comments = await fetchComments(id)
    return (
        <ul style={{background: "#444", fontSize: "12px"}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <img width="50" height="50" src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} />
                    <h4>{comment.name}</h4>
                    <h4>{comment.body}</h4>
                </li>
            ))}
        </ul>
    )
}