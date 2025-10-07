"use server"

import { IBlog } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createBlog = async (data: FormData) => {
    try {
        const cookieStore = cookies();
        const accessToken = (await cookieStore).get('accessToken')?.value
        if (!accessToken) {
            throw new Error('Admin Login Required');
        }

        const blogData = Object.fromEntries(data.entries());

        const modifiedBlogData = {
            ...blogData,
            tags: blogData.tags
                .toString()
                .split(",")
                .map((tag) => tag.trim()),
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/create-blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${accessToken}`
            },
            body: JSON.stringify(modifiedBlogData),
        });

        // if (!res.ok) {
        //     throw new Error(`Failed to CREATE blog: ${res.status}`);

        // }

        const resData = await res.json();
        if (resData.success === true) {
            revalidateTag("BLOGS")
            revalidatePath("/blogs")
            // redirect("/")
        }
        return resData
    } catch (error) {
        return error
    }
}


export const getAllBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
        next: {
            tags: ["BLOGS"]
        }
    })
    const { data: blogs } = await res.json()
    return blogs
}

export const getBlogById = async (blogId: string): Promise<IBlog | undefined> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`)
    const data = await res.json()
    const blogs: IBlog[] = data.data
    return blogs.find(blog => blog._id === blogId)
}


export const editBlog = async (formData: FormData) => {
    try {
        const cookieStore = cookies();
        const accessToken = (await cookieStore).get('accessToken')?.value
        if (!accessToken) {
            throw new Error('Admin Login Required');
        }
        const blogId = formData.get("blogId") as string;

        const blogData = Object.fromEntries(formData.entries());

        const modifiedBlogData = {
            ...blogData,
            tags: blogData.tags
                .toString()
                .split(",")
                .map((tag) => tag.trim()),
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/update/${blogId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${accessToken}`
            },
            body: JSON.stringify(modifiedBlogData),
        });

        if (!res.ok) {
            throw new Error(`Failed to update blog: ${res.status}`);

        }

        const resData = await res.json();
        if (resData.success === true) {
            revalidateTag("BLOGS")
            revalidatePath("/blogs")
            // redirect("/")
        }
        return resData
    } catch (error) {
        return error
    }
};


export const revalidateBlogsTagAndPath = async () => {
    revalidateTag("BLOGS")
    revalidatePath("/blogs")
}
