import { BlogCard } from '@/components/public/BlogCard'
import { IBlog } from '@/types'
import Link from 'next/link'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

interface Props {
    blogs: IBlog[]
}

const BlogShowcaseSection = ({ blogs }: Props) => {
    return (
        <div className='my-10  max-w-[1500px] w-11/12 mx-auto '>
            <div className='max-w-[800px] mx-auto text-center' >
                <Fade direction='down' >
                    <h3 className='font-bold text-3xl mb-2 '>Explore Latest News From The Industry!</h3>
                </Fade>
                <Fade direction='up' delay={200}>
                    <p className='text-gray-500 text-lg'>Explore insightful articles, tutorials, and updates on web development, programming, and tech trends to boost your knowledge and skills..</p>
                </Fade>
            </div>

            <div className='flex justify-between my-2'>
                <div></div>
                <Slide direction='right' >
                    <Link href="/blogs" className='btn btn-accent'>Explore more</Link>

                </Slide>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1my-5 gap-4 '>
                {
                    blogs
                        .sort((a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime())
                        .slice(0, 3).map((blog, idx) => (
                            <Fade key={blog._id} direction='up' delay={idx * 100}>
                                <BlogCard blog={blog}></BlogCard>
                            </Fade>
                        ))
                }
            </div>
        </div>
    )
}

export default BlogShowcaseSection