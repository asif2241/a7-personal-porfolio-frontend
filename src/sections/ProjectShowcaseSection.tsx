"use client"
import ProjectCard from '@/components/public/ProjectCard'
import { IProject } from '@/types'
import React from 'react'

interface Props {
    projects: IProject[]
}

const ProjectShowcaseSection = ({ projects }: Props) => {
    return (
        <div className='my-10  max-w-[1500px] w-11/12 mx-auto '>
            <div className='max-w-[800px] mx-auto text-center' >
                <h3 className='font-bold text-3xl mb-2 '>Project Showcase</h3>
                <p className='text-gray-500 text-lg'>Explore a collection of projects where ideas were transformed into tangible digital experiences. Dive in to see the process, the technologies used, and the final results in action.</p>
            </div>

            <div className='flex justify-between my-2'>
                <div></div>
                <div><button className='btn btn-accent'>Explore more</button></div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1my-5 gap-4 '>
                {
                    projects.slice(0, 3).map((project) => (
                        <ProjectCard project={project} key={project._id}></ProjectCard>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectShowcaseSection