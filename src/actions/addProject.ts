"use server"

export const addProject = async (data: FormData) => {
    const features = data.getAll("feature");

    const projectData = Object.fromEntries(data.entries())
    console.log({ ...projectData, features });
}