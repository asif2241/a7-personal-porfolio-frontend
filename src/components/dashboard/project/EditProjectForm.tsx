"use client"
import { editProject } from '@/actions/projectActions'
import { IProject } from '@/types'
import Form from 'next/form'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const clientAction = async (formData: FormData) => {
    const result = await editProject(formData)
    if (!result.success) {
        Swal.fire("⚠️ Error!", "Something went wrong!", "error");
        console.log(result);
    }
    if (result.success) {
        Swal.fire("✅ Success!", "Project updated successfully.", "success");
        redirect("/")
    }
}


const EditProjectForm = ({ project }: { project: IProject }) => {
    const [inputFields, setInputFields] = useState([""])
    // acction state for showing alert

    useEffect(() => {
        if (project?.features) {
            setInputFields(project.features);
        }
    }, [project]);

    const handleValueChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...inputFields]
        values[index] = event.target.value;
        setInputFields(values)
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, ""])
    }
    const handleRemoveField = (index: number) => {
        const newInputFields = [...inputFields];
        newInputFields.splice(index, 1);
        setInputFields(newInputFields)
    }

    //   loading state
    if (!project) return <div>Loading...</div>;


    return (

        <div className=" w-4/5 md:w-full px-2 my-10 ">
            <h3 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-5' >Edit Your Project!</h3>
            <div className='flex justify-center '>
                <div>
                    {/* editProject changed to form action , sweet alert show koranor jnno */}
                    <Form action={clientAction}
                        className="grid grid-cols-2 gap-5  mx-auto"
                    >
                        {/* sending projectId to editProject server action function */}
                        <input type="hidden" name="projectId" value={project._id} />

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Title </span>
                            <input
                                type="text"
                                required
                                name="title"
                                defaultValue={project?.title}
                                placeholder="Title"
                                className=" input input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Thumbnail </span>
                            <input
                                type="url"
                                name="thumbnail"
                                defaultValue={project?.thumbnail}
                                placeholder="https://"
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                className="input input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Live Link</span>

                            <input
                                type="url"
                                required
                                name="liveLink"
                                defaultValue={project?.liveLink}
                                placeholder="https://"
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                className="input  input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Frontend Code Link </span>

                            <input
                                type="url"
                                required
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                name="frontendCodeLink"
                                defaultValue={project?.frontendCodeLink}
                                placeholder="https://"
                                className="input input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> backendCodeLink </span>

                            <input
                                type="url"
                                required
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                name="backendCodeLink"
                                defaultValue={project?.backendCodeLink}
                                placeholder="https://"
                                className="input input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <div className="relative inline-block group">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 cursor-help">
                                    Tech Stacks
                                </span>

                                {/* Tooltip Content */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 
                        text-xs text-white bg-gray-800 rounded-lg shadow-lg whitespace-nowrap 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                    Enter all technologies, separated by a comma (e.g., React, Node.js, Tailwind)
                                </div>
                            </div>
                            <input
                                type="text"
                                required
                                name="techStack"
                                defaultValue={project?.techStack}
                                placeholder="Tech Stacks"
                                className="input input-sm md:input-xl w-full"
                            />
                        </label>




                        <div className="col-span-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Description </span>

                            <textarea
                                name="description"
                                required
                                defaultValue={project?.description}
                                className="textarea  w-full"
                                placeholder="Description"
                            ></textarea>
                        </div>





                        {
                            inputFields.map((inputField, index) => {
                                return (
                                    <div key={index} className="col-span-2 flex items-center gap-3">
                                        <label className="w-full">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Feature {index + 1}</span>
                                            <input
                                                type="text"
                                                name="feature"
                                                value={inputField}
                                                placeholder="Feature"
                                                onChange={(e) => handleValueChange(index, e)}
                                                className="input input-sm md:input-xl w-full"
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveField(index)}
                                            className=""
                                        >
                                            <Image width={20} height={10} alt="" src="https://img.icons8.com/?size=100&id=47258&format=png&color=000000"></Image>
                                        </button>
                                    </div>
                                );
                            })
                        }
                        <button type="button" className="btn btn-accent col-span-2 w-1/3 mx-auto" onClick={handleAddFields}>Add Feature</button>

                        <input
                            className="btn w-full col-span-2"
                            type="submit"
                            value="Submit"
                        />
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default EditProjectForm





