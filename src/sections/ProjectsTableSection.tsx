"use client"
import { getAllProjects } from '@/actions/projectActions'
import { IProject } from '@/types'
import React, { useEffect, useState } from 'react'

const ProjectsTableSection = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await getAllProjects();
            setProjects(res)
        }
        fetchBlogs()
    }, [])
    return (
        <div className='mr-1'>
            <div>
                <h3 className='text-gray-800 font-bold text-3xl text-center my-10'>Manage Projects</h3>
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
                            projects.map((project: IProject) => (

                                <tr key={project._id}
                                    className="*:text-gray-900 *:first:font-sm"
                                >
                                    <td className="px-3 py-2 whitespace-nowrap">{project.title.slice(0, 20)}....</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{project.createdAt?.split('T')[0]}</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-center">{project.views}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">details</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default ProjectsTableSection