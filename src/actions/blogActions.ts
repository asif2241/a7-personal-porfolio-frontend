"use server"

export const createBlog = async (data: FormData) => {
    const blogData = Object.fromEntries(data.entries());
    console.log(blogData);
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


