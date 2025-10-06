"use client"
import { getAllBlogs } from '@/actions/blogActions'
import { IBlog } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BlogsTableSection = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await getAllBlogs();
            setBlogs(res)
        }
        fetchBlogs()
    }, [])
    return (
        <div className='mr-1'>
            <div>
                <h3 className='text-gray-800 font-bold text-3xl text-center my-10'>Manage Blogs</h3>
                <p className='text-lg font-bold text-gray-600 text-center'>Click The Details Button to View, Edit or Delete A Blog</p>
            </div>
            <div className="overflow-x-auto   rounded border border-gray-300 shadow-sm">
                <table className="min-w-full divide-y-2 divide-gray-200">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-2 whitespace-nowrap">Title</th>
                            <th className="px-3 py-2 whitespace-nowrap">Published At</th>
                            <th className="px-3 py-2 whitespace-nowrap">Total Views</th>
                            <th className="px-3 py-2 whitespace-nowrap"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        {
                            blogs.map((blog: IBlog) => (

                                <tr key={blog._id}
                                    className="*:text-gray-900 *:first:font-sm"
                                >
                                    <td className="px-3 py-2 whitespace-nowrap">{blog.title.slice(0, 20)}....</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{blog.createdAt?.split('T')[0]}</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-center">{blog.views}</td>
                                    <td className="px-3 py-2 whitespace-nowrap"><Link className='btn btn-secondary' href={`/blogs/${blog.slug}`}>View Details</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default BlogsTableSection