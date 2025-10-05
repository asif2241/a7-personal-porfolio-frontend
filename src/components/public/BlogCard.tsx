"use client"
import { IBlog } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    blog: IBlog
}

export const BlogCard = ({ blog }: Props) => {
    return (
        <Link href={`/blogs/${blog.slug}`}>
            <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <Image width={400} height={426}
                    alt=""
                    src={blog.thumbnail as string}
                    className="absolute inset-0 h-full w-full object-cover"
                />


                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-white/90"> {blog.createdAt?.split('T')[0]} </time>


                        <h3 className="mt-0.5 text-lg text-white">{blog.title}</h3>


                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            {blog.content}
                        </p>
                    </div>
                </div>
            </article>

        </Link>
    )
}
