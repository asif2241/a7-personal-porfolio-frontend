"use client"
import ProjectCard from '@/components/public/ProjectCard'
import { IProject } from '@/types'
import Link from 'next/link'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

interface Props {
    projects: IProject[]
}

const ProjectShowcaseSection = ({ projects }: Props) => {
    return (
        <div className='my-10  max-w-[1500px] w-11/12 mx-auto '>
            <div className='max-w-[800px] mx-auto text-center' >
                <Fade direction='down'>
                    <h3 className='font-bold text-3xl mb-2 '>Project Showcase</h3>
                </Fade>
                <Fade direction='up' delay={100}>
                    <p className='text-gray-500 text-lg'>Explore a collection of projects where ideas were transformed into tangible digital experiences. Dive in to see the process, the technologies used, and the final results in action.</p>
                </Fade>
            </div>

            <div className='flex justify-between my-2'>
                <div></div>
                <Slide direction='right'>
                    <Link href="/project" className='btn btn-accent'>Explore more</Link>
                </Slide>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1my-5 gap-4 '>
                {
                    projects
                        .sort((a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime())
                        .slice(0, 3).map((project, idx) => (
                            <Fade key={project._id} direction='up' delay={idx * 100}>
                                <ProjectCard project={project} ></ProjectCard>
                            </Fade>
                        ))
                }
            </div>
        </div>
    )
}

export default ProjectShowcaseSection