import { getAllBlogs } from "@/actions/blogActions";
import { getAllProjects } from "@/actions/projectActions";
import { Hero } from "@/components/Home/Hero";
import { Swipers } from "@/components/Home/Swiper";
import WhyChooseMe from "@/components/Home/WhyChooseMe";
import BlogShowcaseSection from "@/sections/BlogShowcaseSection";
import ProjectShowcaseSection from "@/sections/ProjectShowcaseSection";

export default async function HomePage() {

    const projects = await getAllProjects()
    // console.log(projects);
    const blogs = await getAllBlogs()
    // console.log(blogs);



    return (
        <div>
            <main>
                <Hero></Hero>
                <ProjectShowcaseSection projects={projects}></ProjectShowcaseSection>
                <Swipers></Swipers>
                <BlogShowcaseSection blogs={blogs}></BlogShowcaseSection>
                <WhyChooseMe></WhyChooseMe>
            </main>
        </div>
    );
}