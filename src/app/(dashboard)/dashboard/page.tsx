"use client"
import { useAuth } from "@/context/AuthContext"
import BlogsTableSection from "@/sections/BlogsTableSection"
import ProjectsTableSection from "@/sections/ProjectsTableSection"


const DashboardPage = () => {
    const { user } = useAuth()


    return (
        <div className="flex flex-col mx-auto">
            <BlogsTableSection></BlogsTableSection>
            <ProjectsTableSection></ProjectsTableSection>
        </div>

    )
}

export default DashboardPage