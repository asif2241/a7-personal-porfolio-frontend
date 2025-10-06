"use server"

import { IProject } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const addProject = async (data: FormData) => {
    try {
        const features = data.getAll("features");

        const cookieStore = cookies();
        const accessToken = (await cookieStore).get('accessToken')?.value
        if (!accessToken) {
            throw new Error('Admin Login Required');
        }

        const projectData = Object.fromEntries(data.entries());

        const modifiedProjectData = {
            ...projectData,
            techStack: projectData.techStack
                .toString()
                .split(",")
                .map((tech) => tech.trim()),
            features
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/add-project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${accessToken}`
            },
            body: JSON.stringify(modifiedProjectData),
        });



        const resData = await res.json();
        if (resData.success === true) {
            revalidateTag("PROJECTS")
            revalidatePath("/project")
            // redirect("/")
        }
        // console.log(resData);
        return resData

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return error
    }
}

export const getProjectById = async (id: string): Promise<IProject | undefined> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`)

    const data = await res.json()
    const projects: IProject[] = data.data
    const project = projects.find(project => project._id === id)
    return project
}



export const getAllProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects?sort=createdAt`, {
        next: {
            tags: ["PROJECTS"]
        }
    });

    const { data: projects } = await res.json();
    return projects
}

export const editProject = async (data: FormData) => {

    try {
        const features = data.getAll("features");

        const cookieStore = cookies();
        const accessToken = (await cookieStore).get('accessToken')?.value
        if (!accessToken) {
            throw new Error('Admin Login Required');
        }
        const projectId = data.get("projectId") as string;

        const projectData = Object.fromEntries(data.entries());

        const modifiedProjectData = {
            ...projectData,
            techStack: projectData.techStack
                .toString()
                .split(",")
                .map((tech) => tech.trim()),
            features
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/update-project/${projectId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${accessToken}`
            },
            body: JSON.stringify(modifiedProjectData),
        });



        const resData = await res.json();
        if (resData.success === true) {
            revalidateTag("PROJECTS")
            revalidatePath("/project")
            // redirect("/")
        }
        // console.log(resData);
        return resData

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return error
    }
};