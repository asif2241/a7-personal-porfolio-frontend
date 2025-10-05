"use server"

export const addProject = async (data: FormData) => {
    const features = data.getAll("feature");

    const projectData = Object.fromEntries(data.entries())
    console.log({ ...projectData, features });
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