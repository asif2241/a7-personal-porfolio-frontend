import { getAllProjects } from '@/actions/projectActions'
import ProjectCard from '@/components/public/ProjectCard'
import { IProject } from '@/types'
import React from 'react'

const AllProjects = async () => {
    const projects = await getAllProjects()
    // console.log(projects);
    return (
        <div className='my-10  max-w-[1500px] w-11/12 mx-auto'>
            <h3 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-5'>Explore My Latest Works!</h3>
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5' >
                {
                    projects
                        .sort((a: { createdAt: string }, b: { createdAt: string }) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime())
                        .map((project: IProject) => (
                            // <BlogCard blog={blog} key={blog._id}></BlogCard>
                            <ProjectCard project={project} key={project._id}></ProjectCard>
                        ))
                }
            </div>
        </div>
    )
}

export default AllProjects