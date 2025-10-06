"use client"

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

interface User {
    _id?: string,
    name: string,
    role: "ADMIN" | "SUPER_ADMIN",
    email: string,
    password: string,
    address: string,
    phone: string
}

interface AuthContextType {
    user: User | null;
    // token: string | null;
    login: (user: User) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    // const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setIsLoading(true)
    }, [])

    const login = (userData: User) => {
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData)
    }

    const logout = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, logout",
            cancelButtonText: "Cancel",
        })
        if (result.isConfirmed) {

            localStorage.removeItem("user")
            setUser(null)
            router.push("/")
        }
    }


    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}