"use client";
import { Navbar } from "@/components/shared/Navbar";

export default function HomePage() {
    return (
        <div>
            <nav className="md:w-4/5 w-11/12 mx-auto"> <Navbar></Navbar> </nav>
            <h2 className="text-center my-5 text-4xl">Home Page</h2>
        </div>
    );
}