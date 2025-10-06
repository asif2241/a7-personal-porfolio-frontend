"use server"
import { getProjectById } from '@/actions/projectActions';
import EditProjectForm from '@/components/dashboard/project/EditProjectForm';
import React from 'react'

type Props = {
    params: { projectId: string };
};

const EditProject = async ({ params }: Props) => {
    const { projectId } = await params;
    const project = await getProjectById(projectId)
    if (!project) {
        throw new Error("no project found")
    }
    // if (!project) return <div>Project not found</div>; // Optional safety check

    return (

        <EditProjectForm project={project}></EditProjectForm>

    )
}

export default EditProject