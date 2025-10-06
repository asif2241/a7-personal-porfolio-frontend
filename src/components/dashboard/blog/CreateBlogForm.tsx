"use client"
import React from 'react'
import Form from "next/form";
import { createBlog } from '@/actions/blogActions';
import Swal from 'sweetalert2';
import { redirect } from 'next/navigation';


export const CreateBlogForm = () => {

    const clientAction = async (formData: FormData) => {
        const result = await createBlog(formData)
        console.log(result);
        if (!result.success) {
            Swal.fire("⚠️ Error!", "Something went wrong!", "error");
            console.log(result);
        }
        if (result.success) {
            Swal.fire("✅ Success!", "Blog created successfully.", "success");
            redirect("/")
        }
    }



    return (
        <div className='  w-4/5 md:w-full px-2 my-10 '>
            <h3 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-5' >Fillup And Submit The Form To Add A New  Blog!</h3>
            <div className=" flex justify-center  ">
                <div>
                    <Form action={clientAction}
                        //   onSubmit={handleSubmit}

                        className="grid grid-cols-2 gap-5  mx-auto"
                    >
                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Title </span>
                            <input
                                type="text"
                                required
                                name="title"
                                placeholder="Title"
                                className=" input input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Thumbnail </span>
                            <input
                                type="url"
                                required
                                name="thumbnail"
                                placeholder="https://"
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                className="input input-sm md:input-xl w-full"
                            />
                        </label>

                        <label>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Tags </span>

                            <input
                                type="text"
                                required
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
                                required
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
        </div>
    )
}
