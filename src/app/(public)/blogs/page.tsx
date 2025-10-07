import { getAllBlogs } from '@/actions/blogActions'
import { BlogCard } from '@/components/public/BlogCard'
import { IBlog } from '@/types'
import React from 'react'

const AllBlogs = async () => {
    const blogs = await getAllBlogs()
    // console.log(blogs);
    return (
        <div className='my-10  max-w-[1500px] w-11/12 mx-auto'>
            <h3 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-5'>Explore The Latest News From The Industry!</h3>
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5' >
                {
                    blogs
                        .sort((a: { createdAt: string }, b: { createdAt: string }) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime())
                        .map((blog: IBlog) => (
                            <BlogCard blog={blog} key={blog._id}></BlogCard>
                        ))
                }
            </div>
        </div>
    )
}

export default AllBlogs