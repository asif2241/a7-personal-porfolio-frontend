"use client"
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Navbar } from "@/components/shared/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

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
        <div>
            <main className="min-h-dvh flex gap-4">
                <Sidebar></Sidebar>
                {children}
            </main>
        </div>
    );
}