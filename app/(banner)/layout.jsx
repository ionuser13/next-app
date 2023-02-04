export default function PostsLayout({children}) {
    return (
        <div>
            <marquee style={{color: "purple", background: "#fff"}}>Jag vill sova</marquee>
            <small>Home &bull; Posts</small>
            {children}
        </div>
    )
}