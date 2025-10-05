"use client"
import { useAuth } from "@/context/AuthContext"
import Link from "next/link"

type Props = {
    blogId: string,
    slug: string
}


const BlogActionsBtn = ({ blogId, slug }: Props) => {
    const { user } = useAuth()
    if (!user) {
        return ""
    }
    return (
        <div>
            <div className="flex justify-end gap-3 flex-wrap">
                <Link href={`/dashboard/edit-blog/${blogId}`}>
                    <button className="btn btn-outline btn-primary">Edit</button>
                </Link>
                <button
                    className="btn btn-outline btn-error"

                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BlogActionsBtn