import { editBlog, getBlogById } from '@/actions/blogActions';
import { IBlog } from '@/types';
import Form from 'next/form';
import React from 'react'


type Props = {
  params: { blogId: string };
};

const EditBlog = async ({ params }: Props) => {
  const { blogId } = await params
  const blog = await getBlogById(blogId)
  // console.log(blog);
  return (
    <div className='flex flex-col  w-4/5 md:w-full'>
      <h3 className='font-bold text-gray-600 text-5xl text-center mt-5'>Edit Blogs!</h3>
      <div className=" flex justify-center w-4/5 md:w-full px-2 my-10  ">
        <div>
          <Form action={editBlog}

            //   onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-5  mx-auto"
          >
            <label>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Title </span>
              <input
                type="text"
                name="title"
                defaultValue={blog?.title}
                placeholder="Title"
                className=" input input-sm md:input-xl w-full"
              />
            </label>
            <input type="hidden" name="blogId" value={blogId} />
            <label>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Thumbnail </span>
              <input
                type="text"
                name="thumbnail"
                defaultValue={blog?.thumbnail}
                placeholder="Thumbnail"
                className="input input-sm md:input-xl w-full"
              />
            </label>

            <label>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Tags </span>

              <input
                type="text"
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
                placeholder="Author"
                defaultValue={"Asiful Islam"}
                className="input input-sm md:input-xl w-full"
              />
            </label>


            <div className="col-span-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Content </span>

              <textarea
                name="content"
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
      </div>
    </div>
  )
}

export default EditBlog