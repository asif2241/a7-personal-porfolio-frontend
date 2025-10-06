"use client"
import { editBlog } from '@/actions/blogActions'
import { IBlog } from '@/types'
import Form from 'next/form'
import { redirect } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

const EditBlogForm = ({ blog }: { blog: IBlog }) => {

    const clientAction = async (formData: FormData) => {
        const result = await editBlog(formData)
        // console.log(result);
        if (!result.success) {
            Swal.fire("⚠️ Error!", "Something went wrong!", "error");
            console.log(result);
        }
        if (result.success) {
            Swal.fire("✅ Success!", "Blog updated successfully.", "success");
            redirect("/")
        }
    }

    return (
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
                        defaultValue={blog?.title}
                        placeholder="Title"
                        className=" input input-sm md:input-xl w-full"
                    />
                </label>
                {/* sending blogId to editBlog server action function */}
                <input type="hidden" name="blogId" value={blog._id} />
                <label>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Thumbnail </span>
                    <input
                        type="url"
                        required
                        name="thumbnail"
                        defaultValue={blog?.thumbnail}
                        placeholder="Thumbnail"
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
                        defaultValue={blog?.tags}
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
                        required
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
                        defaultValue={blog?.content}
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
    )
}

export default EditBlogForm