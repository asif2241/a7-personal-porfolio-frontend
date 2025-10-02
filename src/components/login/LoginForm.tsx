"use client"
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';


export const LoginForm = () => {

    const { login } = useAuth();
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include"
        })
        const data = await res.json()
        console.log(data);
        if (!data.success) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Login Failed!",
                showConfirmButton: false,
                timer: 1500,
            });
            return
        }


        if (data.success) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Login Successfull!",
                showConfirmButton: false,
                timer: 1500,
            });
            login(data.data.user)
            router.push("/dashboard")
        }



        // Swal.fire({
        //   position: "top",
        //   icon: "success",
        //   title: "Login Successful",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });



    };

    return (
        <div className='flex items-center justify-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
                <h2 className="text-2xl font-semibold text-center">
                    Login your account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                        />
                        <label className="fieldset-label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>


            </div>
        </div>
    )
}
