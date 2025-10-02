"use server"

export const createBlog = async (data: FormData) => {
    const blogData = Object.fromEntries(data.entries());
    console.log(blogData);
}