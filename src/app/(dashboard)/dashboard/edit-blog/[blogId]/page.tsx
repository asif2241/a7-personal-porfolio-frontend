"use server"
import { getBlogById } from '@/actions/blogActions';
import EditBlogForm from '@/components/dashboard/blog/EditBlogForm';
import { IBlog } from '@/types';
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
      <h3 className='font-bold text-gray-600 text-5xl text-center mt-5'>Edit Blog!</h3>
      <div className=" flex justify-center w-4/5 md:w-full px-2 my-10  ">
        <EditBlogForm blog={blog as IBlog}></EditBlogForm>
      </div>
    </div>
  )
}

export default EditBlog