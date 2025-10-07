/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { revalidateBlogsTagAndPath } from "@/actions/blogActions"
import { useAuth } from "@/context/AuthContext"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

type Props = {
    blogId: string,
    slug: string
}



const BlogActionsBtn = ({ blogId, slug }: Props) => {
    const { user } = useAuth()
    const router = useRouter()
    if (!user) {
        return null
    }


    const handleDelete = async (blogId: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`, {
                    method: "DELETE",
                    credentials: "include"
                });

                if (res.status === 403) {
                    // Unauthorized or Forbidden
                    Swal.fire({
                        title: "Error!",
                        text: "You do not have permission to delete this blog.",
                        icon: "error"
                    });
                    return;
                }


                Swal.fire({
                    title: "Deleted!",
                    text: "Your blog has been successfully deleted.",
                    icon: "success"
                }).then(async () => {
                    await revalidateBlogsTagAndPath()
                });

                router.push("/")


            } catch (err) {
                // console.log(err);
                Swal.fire({
                    title: "Failed!",
                    text: "The deletion failed due to a server error.",
                    icon: "error"
                });
            }
        }
        ;
    }

    return (

        <div>
            <div className="flex justify-end gap-3 flex-wrap">
                {/* edit button */}
                <Link href={`/dashboard/edit-blog/${blogId}`}>
                    <Image width={20} height={20} alt="edit" src="https://img.icons8.com/?size=100&id=43150&format=png&color=000000">
                    </Image>
                </Link>
                {/* delete button */}
                <button onClick={() => handleDelete(blogId)}>
                    <Image width={20} height={20} alt="edit" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000">
                    </Image>
                </button>
            </div>
        </div>
    )
}

export default BlogActionsBtn