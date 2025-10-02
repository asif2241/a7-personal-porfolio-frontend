"use client"

import { addProject } from "@/actions/addProject"
import Form from "next/form"
import Image from "next/image"
import { useState } from "react"

export const AddProjectForm = () => {

    const [inputFields, setInputFields] = useState([""])

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

    return (
        <div className=" flex justify-center w-4/5 md:w-full px-2 my-10  ">
            <div>
                <Form action={addProject}
                    //   onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-5  mx-auto"
                >
                    <label>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Title </span>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            className=" input input-sm md:input-xl w-full"
                        />
                    </label>

                    <label>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Thumbnail </span>
                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Thumbnail"
                            className="input input-sm md:input-xl w-full"
                        />
                    </label>

                    <label>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Live Link</span>

                        <input
                            type="text"
                            name="tags"
                            placeholder="Live Link"
                            className="input  input-sm md:input-xl w-full"
                        />
                    </label>

                    <label>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> projectUrl </span>

                        <input
                            type="text"
                            name="author"
                            placeholder="projectUrl"
                            className="input input-sm md:input-xl w-full"
                        />
                    </label>



                    <div className="col-span-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Description </span>

                        <textarea
                            name="description"
                            className="textarea  w-full"
                            placeholder="Description"
                        ></textarea>
                    </div>

                    <div className="col-span-2" >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Tech Stacks (comma separated) </span>

                        <textarea
                            name="techStack"
                            className="textarea  w-full"
                            placeholder=" Tech Stacks"
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
    )
}
