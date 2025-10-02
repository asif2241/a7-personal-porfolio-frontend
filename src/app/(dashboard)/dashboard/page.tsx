"use client"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
    const { user, isLoading } = useAuth()
    const router = useRouter();

    useEffect(() => {
        if (isLoading) {
            if (!user) {
                router.push("/login")
            }
        }
    }, [user, isLoading, router])

    return (
        <h3>{user?.name}</h3>
    )
}

export default DashboardPage