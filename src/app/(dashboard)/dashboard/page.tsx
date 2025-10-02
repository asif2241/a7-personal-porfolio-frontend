"use client"
import { useAuth } from "@/context/AuthContext"


const DashboardPage = () => {
    const { user } = useAuth()


    return (
        <h3>{user?.name}</h3>

    )
}

export default DashboardPage