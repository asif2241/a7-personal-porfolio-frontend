"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Form from "next/form";
import { createBlog } from '@/actions/createBlog';


export const CreateBlogForm = () => {

    // const handleSubmit = (e: any) => {
    //     e.preventDefault()
    // }

    return (
        <div className=" flex justify-center w-4/5 md:w-full px-2 my-10  ">
            <div>
                <Form action={createBlog}
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
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Tags </span>

                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags(comma separated)"
                            className="input  input-sm md:input-xl w-full"
                        />
                    </label>

                    <label>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Author Name </span>

                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            defaultValue={"Asiful Islam"}
                            className="input input-sm md:input-xl w-full"
                        />
                    </label>


                    <div className="col-span-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Content </span>

                        <textarea
                            name="content"
                            className="textarea  w-full"
                            placeholder="Description"
                        ></textarea>
                    </div>


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
