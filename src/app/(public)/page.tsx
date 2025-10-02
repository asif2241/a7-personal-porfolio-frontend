"use client";
import { Hero } from "@/components/Home/Hero";
import { Swipers } from "@/components/Home/Swiper";
import WhyChooseMe from "@/components/Home/WhyChooseMe";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function HomePage() {
    return (
        <div>
            <nav className="md:w-4/5 w-11/12 mx-auto"> <Navbar></Navbar> </nav>
            <main>
                <Hero></Hero>
                <Swipers></Swipers>
                <WhyChooseMe></WhyChooseMe>
            </main>
            <Footer></Footer>
        </div>
    );
}