"use client"
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'

const ProjectActionsBtn = ({ projectId }: { projectId: string }) => {
    const { user } = useAuth()
    if (!user) {
        return null
    }

    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/delete/${id}`, {
                    method: "DELETE",
                    credentials: "include"
                });

                const data = await res.json()
                console.log(data);

                if (!data.success) {
                    Swal.fire({
                        title: "Error!",
                        text: "Project delation failed!.",
                        icon: "error"
                    });
                    console.log(data);
                    return;
                }
                else {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your project has been successfully deleted.",
                        icon: "success"
                    }).then(() => {
                        window.location.href = "/"
                    })
                }
            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: "Failed!",
                    text: "The deletion failed due to a server error.",
                    icon: "error"
                });
            }
        }



        // try {
        //     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/delete/${id}`, {
        //         method: "DELETE",
        //         credentials: "include"


        //     })
        //     const result = await res.json();
        //     return result
        // } catch (error) {
        //     console.log("project delete error", error);
        // }
    }

    return (
        <div className="flex gap-2">
            <Link href={`/dashboard/edit-project/${projectId}`} className="">
                <Image width={20} height={20} alt="edit" src="https://img.icons8.com/?size=100&id=43150&format=png&color=000000">
                </Image>
            </Link>
            <button onClick={() => handleDelete(projectId)} className="cursor-pointer">
                <Image width={20} height={20} alt="edit" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000">
                </Image>
            </button>
        </div>
    )
}

export default ProjectActionsBtn