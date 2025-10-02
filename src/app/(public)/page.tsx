"use client";
import { Hero } from "@/components/Home/Hero";
import { Swipers } from "@/components/Home/Swiper";
import WhyChooseMe from "@/components/Home/WhyChooseMe";

export default function HomePage() {
    return (
        <div>
            <main>
                <Hero></Hero>
                <Swipers></Swipers>
                <WhyChooseMe></WhyChooseMe>
            </main>
        </div>
    );
}