import { Suspense } from "react"
import { ListOfPosts } from "./ListOfPosts.jsx"
export default async function PostPage({ params }) {
    return (
        <section>
            <Suspense fallback={<p>Getting posts...</p>}>
                <ListOfPosts />
            </Suspense>
        </section>
    )
}